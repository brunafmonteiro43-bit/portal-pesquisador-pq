import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$executeRawUnsafe("CREATE EXTENSION IF NOT EXISTS vector");

  const cocen = await prisma.center.upsert({
    where: { acronym: "COCEN" },
    update: {},
    create: {
      acronym: "COCEN",
      name: "Coordenadoria de Centros e Nucleos Interdisciplinares de Pesquisa",
      description: "Estrutura institucional que apoia Centros e Nucleos de Pesquisa da UNICAMP."
    }
  });

  const passwordHash = await bcrypt.hash("portal-pq", 10);

  await prisma.user.upsert({
    where: { email: "admin@cocen.unicamp.br" },
    update: {
      passwordHash,
      role: "SUPER_ADMIN",
      centerId: cocen.id
    },
    create: {
      name: "Administrador PQ",
      email: "admin@cocen.unicamp.br",
      passwordHash,
      role: "SUPER_ADMIN",
      centerId: cocen.id
    }
  });

  const glossary = [
    {
      term: "Funcamp",
      slug: "funcamp",
      category: "Fundacao de apoio",
      definition:
        "Fundacao de apoio que executa projetos, contratos e convenios vinculados a unidades e pesquisadores, conforme regras do instrumento aprovado.",
      synonyms: ["fundacao", "projeto administrado", "convenio"]
    },
    {
      term: "Rubrica",
      slug: "rubrica",
      category: "Orcamento",
      definition:
        "Categoria orcamentaria que organiza despesas permitidas, como material de consumo, servicos de terceiros, equipamentos, diarias e passagens.",
      synonyms: ["categoria de despesa", "elemento de despesa"]
    },
    {
      term: "Transferegov",
      slug: "transferegov",
      category: "Convenios",
      definition:
        "Plataforma federal usada para operacionalizar transferencias voluntarias, propostas, planos de trabalho, execucao e prestacao de contas.",
      synonyms: ["Siconv", "transferencias federais"]
    }
  ];

  for (const term of glossary) {
    await prisma.glossaryTerm.upsert({
      where: { slug: term.slug },
      update: term,
      create: term
    });
  }

  const fapesp = await prisma.agency.upsert({
    where: { acronym: "FAPESP" },
    update: {},
    create: {
      name: "Fundacao de Amparo a Pesquisa do Estado de Sao Paulo",
      acronym: "FAPESP",
      website: "https://fapesp.br"
    }
  });

  const cnpq = await prisma.agency.upsert({
    where: { acronym: "CNPq" },
    update: {},
    create: {
      name: "Conselho Nacional de Desenvolvimento Cientifico e Tecnologico",
      acronym: "CNPq",
      website: "https://www.gov.br/cnpq"
    }
  });

  const custeio = await prisma.budgetCategory.upsert({
    where: { name: "Custeio" },
    update: {},
    create: {
      name: "Custeio",
      description: "Despesas correntes como material de consumo, servicos, diarias e passagens."
    }
  });

  const capital = await prisma.budgetCategory.upsert({
    where: { name: "Capital" },
    update: {},
    create: {
      name: "Capital",
      description: "Equipamentos e materiais permanentes previstos no plano aprovado."
    }
  });

  await prisma.fundingCall.upsert({
    where: { slug: "auxilio-regular-pesquisa" },
    update: {},
    create: {
      title: "Auxilio Regular a Pesquisa",
      slug: "auxilio-regular-pesquisa",
      agencyId: fapesp.id,
      summary: "Apoio a projetos com objetivos definidos, cronograma, equipe executora e orcamento justificado.",
      status: "OPEN",
      target: "Pesquisadores com vinculo institucional",
      categories: { connect: [{ id: custeio.id }, { id: capital.id }] }
    }
  });

  await prisma.fundingCall.upsert({
    where: { slug: "chamada-universal" },
    update: {},
    create: {
      title: "Chamada Universal",
      slug: "chamada-universal",
      agencyId: cnpq.id,
      summary: "Financiamento de projetos de pesquisa cientifica, tecnologica e de inovacao em diferentes areas.",
      status: "UPCOMING",
      target: "Grupos de pesquisa",
      categories: { connect: [{ id: custeio.id }, { id: capital.id }] }
    }
  });

  await prisma.documentTemplate.upsert({
    where: { slug: "plano-trabalho-projeto" },
    update: {},
    create: {
      title: "Plano de trabalho para projeto",
      slug: "plano-trabalho-projeto",
      description: "Estrutura padronizada para objetivos, metas, cronograma, equipe, entregas e orcamento.",
      category: "Projetos",
      fileType: "docx",
      tags: ["projeto", "cronograma", "orcamento"]
    }
  });

  const trail = await prisma.supportTrail.upsert({
    where: { slug: "submissao-projeto-fundacao" },
    update: {},
    create: {
      title: "Submissao de projeto com fundacao de apoio",
      slug: "submissao-projeto-fundacao",
      summary: "Fluxo para proposta, anuencia, plano de trabalho, orcamento e formalizacao.",
      category: "Projetos"
    }
  });

  await prisma.trailStep.createMany({
    data: [
      {
        trailId: trail.id,
        order: 1,
        title: "Enquadramento",
        description: "Confirmar natureza do projeto, fonte de recurso e unidade responsavel.",
        slaDays: 1
      },
      {
        trailId: trail.id,
        order: 2,
        title: "Documentacao",
        description: "Reunir plano de trabalho, orcamento, equipe, aprovacoes e anexos.",
        slaDays: 3
      },
      {
        trailId: trail.id,
        order: 3,
        title: "Formalizacao",
        description: "Encaminhar pacote validado para celebracao do instrumento.",
        slaDays: 5
      }
    ],
    skipDuplicates: true
  });

  await prisma.faqItem.upsert({
    where: { id: "faq-anuencia-projeto" },
    update: {},
    create: {
      id: "faq-anuencia-projeto",
      question: "Posso submeter projeto antes da anuencia do Centro/Nucleo?",
      answer:
        "A anuencia deve ser obtida antes do envio institucional quando o edital exigir vinculo, infraestrutura ou contrapartida.",
      category: "Submissao",
      tags: ["anuencia", "projeto", "centro"]
    }
  });

  const document = await prisma.knowledgeDocument.upsert({
    where: { slug: "base-rubricas-despesas" },
    update: {},
    create: {
      title: "Base - Rubricas e despesas",
      slug: "base-rubricas-despesas",
      module: "Financeiro",
      centerId: cocen.id
    }
  });

  await prisma.knowledgeChunk.createMany({
    data: [
      {
        documentId: document.id,
        heading: "Rubricas",
        content:
          "Rubricas organizam despesas autorizadas por edital e plano de trabalho. A classificacao deve considerar finalidade, natureza do gasto e documentacao exigida."
      }
    ],
    skipDuplicates: true
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

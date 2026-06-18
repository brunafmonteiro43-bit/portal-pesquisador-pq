# Portal do Pesquisador (PQ)

Portal web institucional da COCEN/UNICAMP para apoiar pesquisadores durante o ciclo da pesquisa: ideia, fomento, submissão, execução, inovação, documentação e prestação de contas.

O projeto combina uma **home pública institucional** com uma **área autenticada em formato de plataforma SaaS de produtividade**, mantendo módulos de glossário, documentos, editais, trilhas administrativas, patentes, favoritos, FAQ, chatbot com RAG e gestão COCEN.

## Objetivo

Centralizar informações e serviços que hoje costumam ficar dispersos entre documentos, sites, editais, normas, modelos e fluxos administrativos.

O Portal do Pesquisador busca:

- reduzir dúvidas recorrentes de pesquisadores e equipes administrativas;
- padronizar orientações sobre Funcamp, FAPESP, CNPq, CAPES, FINEP, convênios, rubricas e prestação de contas;
- facilitar o acesso a modelos, documentos e editais;
- apoiar processos de patentes e inovação;
- oferecer um Assistente do Pesquisador com respostas baseadas na base documental do portal;
- separar claramente a experiência pública institucional da experiência interna de trabalho.

## Tecnologias

- **Next.js 15** com App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Componentes shadcn/ui locais**
- **NextAuth v5** com Credentials Provider
- **Prisma ORM**
- **PostgreSQL**
- **pgvector** previsto para base RAG
- **OpenAI API** para chat/RAG
- **Docker e Docker Compose**
- **ESLint**
- **pnpm**

## Experiência do Produto

### Home pública

A rota `/` é uma página aberta, sem senha.

Ela apresenta:

- cabeçalho institucional com logos UNICAMP e COCEN;
- menu público;
- busca discreta no cabeçalho;
- botão `Entrar no Portal`;
- hero institucional com foco em pesquisa, inovação e fomento;
- acesso rápido aos principais módulos;
- destaques da semana;
- chamada para o Assistente do Pesquisador;
- rodapé institucional com endereço, contatos, redes sociais e QR Code real para acesso pelo celular.

### Fluxo de login

O fluxo principal é:

```txt
Home pública (/) -> Login (/login) -> Dashboard interno (/dashboard)
```

O botão do hero `Conversar com o Assistente do Pesquisador` usa:

```txt
/login?callbackUrl=/chat
```

Assim, o usuário passa pelo login e, após autenticação, entra diretamente no Assistente do Pesquisador.

### Área autenticada

A área interna é protegida por middleware e usa uma experiência visual de plataforma de produtividade, inspirada em ferramentas como Notion, Linear, GitHub, ClickUp e Jira.

O dashboard autenticado oferece:

- cabeçalho compacto com logo pequena, busca global, notificações e perfil;
- botão `← Ver Portal Público`;
- saudação `Olá, Pesquisador(a)`;
- pergunta central `O que você precisa hoje?`;
- busca inteligente;
- cards de acesso rápido;
- seção `Meu Trabalho`;
- seção `Próximos Prazos`;
- seção `Atividades Recentes`;
- card especial do Assistente do Pesquisador;
- editais recentes, modelos favoritos e prazos em destaque.

## Rotas e Páginas

| Rota | Acesso | Descrição |
| --- | --- | --- |
| `/` | Público | Home institucional do Portal do Pesquisador |
| `/login` | Público | Tela de autenticação |
| `/dashboard` | Autenticado | Dashboard interno de produtividade |
| `/glossario` | Autenticado | Glossário Facilitado com explicação simples, técnica, exemplos e documentos relacionados |
| `/templates` | Autenticado | Modelos e Documentos com categorias, versões e downloads |
| `/fomento` | Autenticado | Fomento e Editais por agência, área, status, prazo e valor |
| `/oportunidades` | Autenticado | Central de Oportunidades com filtros por agência e tipo |
| `/trilhas` | Autenticado | Trilhas de Apoio Administrativo com fluxos visuais |
| `/patentes` | Autenticado | Patentes e Inovação, sigilo, Inova Unicamp, INPI e transferência de tecnologia |
| `/faq` | Autenticado | Central de Dúvidas |
| `/chat` | Autenticado | Assistente do Pesquisador com respostas em formato simples e orientado |
| `/favoritos` | Autenticado | Meus Favoritos |
| `/centros` | Autenticado | Centros e Núcleos da COCEN com busca e filtros |
| `/admin` | Autenticado/Admin | Gestão COCEN: termos, documentos, editais, trilhas, FAQs, métricas, upload e versões |

## Perfis de Acesso

Os perfis estão definidos em `src/lib/permissions.ts`.

- `RESEARCHER`: pesquisador, acesso aos módulos principais.
- `CENTER_MANAGER`: gestor de Centro/Núcleo.
- `INNOVATION_OFFICE`: equipe de inovação e patentes.
- `COCEN_ADMIN`: administração de conteúdo e acompanhamento.
- `SUPER_ADMIN`: acesso operacional completo.

## Login Demo

Para uso local sem banco ativo, habilite:

```env
DEMO_AUTH="true"
```

Credenciais de demonstração:

```txt
E-mail: admin@cocen.unicamp.br
Senha: portal-pq
```

Em produção, use:

```env
DEMO_AUTH="false"
```

## Estrutura de Pastas

```txt
portal-pesquisador-pq/
  docs/
    ARQUITETURA.md
  prisma/
    schema.prisma
    seed.ts
  public/
    assets/
      logo-unicamp.png
      logo-cocen.jpg
      hero-laboratorio-unicamp.png
      qr-portal-pesquisador.png
  src/
    app/
      page.tsx
      (auth)/
        login/
      (portal)/
        dashboard/
        glossario/
        templates/
        fomento/
        oportunidades/
        trilhas/
        patentes/
        faq/
        chat/
        favoritos/
        centros/
        admin/
      api/
        auth/
        chat/
        metrics/
        search/
    components/
      layout/
      modules/
      ui/
    data/
      portal-content.ts
    lib/
      auth.ts
      auth.config.ts
      permissions.ts
      prisma.ts
      rag.ts
      search.ts
    types/
  Dockerfile
  docker-compose.yml
  package.json
```

## Variáveis de Ambiente

Crie um arquivo `.env` baseado em `.env.example`.

```env
DATABASE_URL="postgresql://pq:pq@localhost:5432/portal_pq?schema=public"
NEXTAUTH_SECRET="troque-este-segredo-em-producao"
AUTH_SECRET="troque-este-segredo-em-producao"
NEXTAUTH_URL="http://localhost:3000"
AUTH_URL="http://localhost:3000"
AUTH_TRUST_HOST="true"
OPENAI_API_KEY=""
RAG_EMBEDDING_MODEL="text-embedding-3-small"
RAG_CHAT_MODEL="gpt-4o-mini"
DEMO_AUTH="false"
```

Observações:

- `OPENAI_API_KEY` é necessária para respostas reais do Assistente com IA.
- `DEMO_AUTH=true` permite testar o login local mesmo sem PostgreSQL ativo.
- `NEXTAUTH_SECRET` e `AUTH_SECRET` devem ser fortes em produção.

## Instalação Local

Pré-requisitos:

- Node.js 22+
- pnpm
- Docker e Docker Compose

Instale as dependências:

```bash
pnpm install
```

Copie o ambiente:

```bash
cp .env.example .env
```

Suba o PostgreSQL:

```bash
docker compose up -d postgres
```

Gere o Prisma Client:

```bash
pnpm prisma:generate
```

Execute migrações:

```bash
pnpm prisma:migrate
```

Carregue dados iniciais:

```bash
pnpm seed
```

Inicie o servidor:

```bash
pnpm dev
```

Acesse:

```txt
http://localhost:3000
```

## Execução Sem Banco Local

Para testar somente a interface e o fluxo de autenticação demo:

```env
DEMO_AUTH="true"
```

Depois rode:

```bash
pnpm dev
```

Use:

```txt
admin@cocen.unicamp.br
portal-pq
```

## Scripts Disponíveis

```bash
pnpm dev
```

Inicia o servidor local de desenvolvimento.

```bash
pnpm typecheck
```

Valida TypeScript sem emitir arquivos.

```bash
pnpm lint
```

Executa ESLint.

```bash
pnpm build
```

Gera build de produção.

```bash
pnpm start
```

Executa a build de produção.

```bash
pnpm prisma:generate
```

Gera Prisma Client.

```bash
pnpm prisma:migrate
```

Executa migrações em desenvolvimento.

```bash
pnpm prisma:studio
```

Abre Prisma Studio.

```bash
pnpm seed
```

Executa o seed de dados.

## Docker

Subir banco e aplicação:

```bash
docker compose up --build
```

Serviços:

- `postgres`: PostgreSQL com pgvector, porta `5432`.
- `app`: aplicação Next.js, porta `3000`.

URL:

```txt
http://localhost:3000
```

## Build de Produção

Antes da build, garanta que as variáveis estejam configuradas:

```bash
pnpm prisma:generate
pnpm build
```

Para executar:

```bash
pnpm start
```

## Deploy

O projeto pode ser publicado como aplicação Next.js standalone via Docker.

Recomendações para produção:

- usar PostgreSQL gerenciado;
- configurar `DATABASE_URL` de produção;
- configurar `NEXTAUTH_URL` com domínio oficial;
- definir `NEXTAUTH_SECRET` e `AUTH_SECRET` seguros;
- manter `DEMO_AUTH=false`;
- configurar `OPENAI_API_KEY` se o Assistente IA for usado;
- proteger `/admin` por perfis administrativos;
- revisar políticas de backup, logs e auditoria;
- atualizar o QR Code caso o domínio público seja diferente de `localhost`.

## QR Code

O rodapé usa `public/assets/qr-portal-pesquisador.png`.

No ambiente local, ele aponta para:

```txt
http://127.0.0.1:3000
```

Antes do deploy institucional, gere um novo QR Code apontando para o domínio oficial do portal.

## Qualidade

Antes de entregar uma mudança, rode:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Futuras Melhorias

- Integração com SSO institucional da UNICAMP.
- Painel de notificações por prazo, edital e etapa de trilha.
- Ingestão real de PDFs, DOCX e planilhas para RAG.
- OCR para documentos digitalizados.
- Editor visual de fluxos administrativos.
- Gestão real de favoritos por usuário.
- Histórico persistente de conversas com o Assistente.
- Painel de métricas separado para Gestão COCEN.
- Integração com bases institucionais e sistemas internos.
- QR Code dinâmico por ambiente.
- Deploy em infraestrutura institucional com observabilidade, backup e logs.

## Status Atual

O projeto possui:

- home pública institucional;
- login com callback;
- dashboard autenticado em formato de plataforma SaaS;
- módulos principais implementados;
- dados demonstrativos em `src/data/portal-content.ts`;
- autenticação demo;
- estrutura Prisma preparada;
- Dockerfile e Docker Compose;
- rodapé institucional com QR Code real.

import { NextRequest, NextResponse } from "next/server";
import { answerFundingSearch, isFundingSearchQuestion } from "@/lib/funding-assistant";
import { z } from "zod";
import { answerWithRag } from "@/lib/rag";

const chatSchema = z.object({
  message: z.string().min(3).max(2000)
});

export async function POST(request: NextRequest) {
  const payload = chatSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: "Mensagem invalida." }, { status: 400 });
  }

  const answer = isFundingSearchQuestion(payload.data.message)
    ? answerFundingSearch(payload.data.message)
    : await answerWithRag(payload.data.message);

  return NextResponse.json(answer);
}

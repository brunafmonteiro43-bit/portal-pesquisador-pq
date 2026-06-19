import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { searchPortalContent } from "@/lib/search";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";
  const moduleFilter = request.nextUrl.searchParams.get("module") ?? undefined;

  if (query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const session = await auth();
  const results = searchPortalContent(query, moduleFilter, Boolean(session?.user));

  try {
    await prisma.searchLog.create({
      data: {
        query,
        module: moduleFilter,
        resultCount: results.length,
        userId: session?.user?.id
      }
    });
  } catch {
    // Logging must never break search in development or first-run demos.
  }

  return NextResponse.json({ results });
}

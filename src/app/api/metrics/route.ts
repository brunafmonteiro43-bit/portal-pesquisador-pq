import { NextResponse } from "next/server";
import { adminMetrics, dashboardMetrics } from "@/data/portal-content";

export async function GET() {
  return NextResponse.json({
    dashboard: dashboardMetrics,
    admin: adminMetrics
  });
}

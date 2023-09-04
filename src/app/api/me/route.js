import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Waenkaew Phimsena",
    studentId: "6506100809",
  });
};

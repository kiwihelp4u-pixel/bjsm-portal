import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, mobile, adults, kids, consent } = body;

    if (!name || !email || !mobile || !consent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🔍 DIAGNOSTIC LOG — DO NOT MOVE
    console.log("RSVP ENV CHECK", {
      sheet: !!process.env.GOOGLE_SHEET_ID,
      sa: !!process.env.GOOGLE_SERVICE_ACCOUNT_JSON,
    });

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;

    if (!sheetId || !serviceAccount) {
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    const credentials = JSON.parse(serviceAccount);

    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            name,
            email,
            mobile,
            Number(adults || 0),
            Number(kids || 0),
            consent ? "Yes" : "No",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("RSVP submit error:", error);
    return NextResponse.json(
      { error: "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}

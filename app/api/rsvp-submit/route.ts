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

    // 🔒 Sanitize env vars (Vercel-safe)
    const sheetId = process.env.GOOGLE_SHEET_ID?.replace(/\s+/g, "");
    const serviceAccountJson =
      process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();

    if (!sheetId || !serviceAccountJson) {
      console.error("Missing env vars", {
        sheetIdPresent: !!sheetId,
        serviceAccountJsonPresent: !!serviceAccountJson,
      });

      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    let credentials;
    try {
      credentials = JSON.parse(serviceAccountJson);
    } catch (e) {
      console.error("Failed to parse service account JSON", e);
      return NextResponse.json(
        { error: "Invalid service account configuration" },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: credentials.client_email,
        private_key: credentials.private_key.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:G",
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
            "Yes",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    // 🔍 Log full Google error when available
    console.error(
      "RSVP submit error:",
      error?.response?.data || error?.message || error
    );

    return NextResponse.json(
      { error: "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}

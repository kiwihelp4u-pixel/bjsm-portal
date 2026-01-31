import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";

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

    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) {
      return NextResponse.json(
        { error: "Server misconfiguration" },
        { status: 500 }
      );
    }

    let auth;

    // Production (Vercel)
    if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
      const credentials = JSON.parse(
        process.env.GOOGLE_SERVICE_ACCOUNT_JSON
      );

      auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: credentials.client_email,
          private_key: credentials.private_key.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
    } else {
      // Local development
      auth = new google.auth.GoogleAuth({
        keyFile: path.join(process.cwd(), "app/google-service-account.json"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
    }

    const sheets = google.sheets({ version: "v4", auth });

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
            "Yes",
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "RSVP submission failed" },
      { status: 500 }
    );
  }
}

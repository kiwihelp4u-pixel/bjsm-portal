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

    const credentials = JSON.parse(
      process.env.GOOGLE_SERVICE_ACCOUNT_JSON as string
    );

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString(),
          name,
          email,
          mobile,
          adults ?? 0,
          kids ?? 0,
          consent ? "Yes" : "No"
        ]]
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("RSVP ERROR:", error);
    return NextResponse.json(
      { error: "Failed to submit RSVP" },
      { status: 500 }
    );
  }
}

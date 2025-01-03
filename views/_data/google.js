import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

export default async function () {
    const sheets = google.sheets('v4');
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const range1 = 'log!A:I'; 
    const range2 = 'monthly!A:I'; 

    if (!apiKey || !sheetId) {
        throw new Error("Missing required environment variables.");
    }

    async function fetchSheetData(range) {
        try {
            const response = await sheets.spreadsheets.values.get({
                key: apiKey,
                spreadsheetId: sheetId,
                range,
            });

            const rows = response.data.values;

            if (!rows || rows.length === 0) {
                console.log(`No data found for range: ${range}`);
                return [];
            }

            const headers = rows[0];
            const dataRows = rows.slice(1);

            return { headers, dataRows };
        } catch (error) {
            console.error(`Error fetching data for range: ${range}`, error);
            return { headers: [], dataRows: [] };
        }
    }

    const [sheet1, sheet2] = await Promise.all([
        fetchSheetData(range1),
        fetchSheetData(range2),
    ]);

    const workout = sheet1.dataRows.map((row) => ({
        date: row[sheet1.headers.indexOf('date')],
        distance: row[sheet1.headers.indexOf('distance')],
        duration: row[sheet1.headers.indexOf('duration')],
        pace: row[sheet1.headers.indexOf('pace')],
        avghr: row[sheet1.headers.indexOf('avghr')],
        ascent: row[sheet1.headers.indexOf('ascent')],
        cadence: row[sheet1.headers.indexOf('cadence')],
        garmin: row[sheet1.headers.indexOf('garmin')],
        location: row[sheet1.headers.indexOf('location')],
    }));

    const monthly = sheet2.dataRows.map((row) => ({
        month: row[sheet2.headers.indexOf('month')],
        eomonth: row[sheet2.headers.indexOf('eomonth')],
        distance: row[sheet2.headers.indexOf('distance')],
        duration: row[sheet2.headers.indexOf('duration')],
        pace: row[sheet2.headers.indexOf('pace')],
        avghr: row[sheet2.headers.indexOf('avghr')],
        ascent: row[sheet2.headers.indexOf('ascent')],
        cadence: row[sheet2.headers.indexOf('cadence')],
        id: row[sheet2.headers.indexOf('id')],
    }));

    return { workout, monthly };
}


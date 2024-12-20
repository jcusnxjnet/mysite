---
title: Google Sheets API
templateEngineOverride: md
eleventyNavigation:
  key: Google Sheets API
  parent: Eleventy
  order: 9
---
<h2>Sources</h2>
<ol class="pl-14 text-other" style="list-style-type: lower-roman;">
<li><a href="https://chatgpt.com" class="text-link hover:font-bold">ChatGPT</a></li>
</ol>

<h2>Enable Google Sheets API</h2>
<ul class="list-disc pl-8 pt-4">
<li>Go to <a href="https://console.cloud.google.com" class="text-link hover:font-bold">Google Cloud Console</a></li>
<li>Create new project or use existing one</li>
<li>In the project navigate to <div class="font-semibold inline text-other">APIs & Services > Credentials</div></li>
<li>Click on <div class="font-semibold inline text-other">Create Credentials</div> and select <div class="font-semibold inline text-other">API key </div>option</li>
<li>Edit newly created API key and in <div class="font-semibold inline text-other">API Restriction</div> section select <div class="font-semibold inline text-other">Restrict key </div> and then <div class="font-semibold inline text-other">Google Sheets API</div></li>
</ul>

<h2>Google Sheet access rights</h2>
<ul class="list-disc pl-8 pt-4">
<li>Make your google sheet accessible by <div class="font-semibold inline text-other">Anyone with the link</div></li>
</ul>

<h2>googleapis library</h2>

```txt
npm install googleapis
```

<h2>Fetch data from Google Sheets</h2>
<div class="text-other italic">An example of code retrieving data (for each row it fetches data in columns A - C) from two different sheets in single spreadsheet.</div>
<br>

`/_data/google.js`

```js
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

export default async function () {
    const sheets = google.sheets('v4');
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const range1 = 'log!A:C'; 
    const range2 = 'monthly!A:C';  

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
    }));

    const monthly = sheet2.dataRows.map((row) => ({
        month: row[sheet2.headers.indexOf('month')],
        distance: row[sheet2.headers.indexOf('distance')],
        duration: row[sheet2.headers.indexOf('duration')],
    }));

    return { workout, monthly };
}
```

<h2>.env file</h2>
<ul class="list-disc pl-8 pt-4 pb-4">
<li>Follow the instructions in <a href="/notes/eleventy/dotenv/" class="text-link">dotenv</a></li>
<li>.env file should contain:</li>
</ul>

`/.env`

```txt
GOOGLE_SHEETS_API_KEY=your-actual-google-sheets-API-key
GOOGLE_SHEET_ID=actual-google-sheet-id
```


<h2>Usage</h2>

```html
<ul>
  {% for item in google.workout %}
    <li>{{ item.date }} - {{ item.distance }} km</li>
  {% endfor %}
</ul>
```



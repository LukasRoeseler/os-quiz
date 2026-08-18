// Google Apps Script: paste this into Extensions > Apps Script on the target
// Google Sheet, then Deploy > New deployment > type "Web app" > execute as
// "Me" > access "Anyone" > Deploy. Copy the resulting URL (ends in /exec)
// into the SHEET_WEBHOOK_URL constant near the top of os_quiz/index.html
// (or, for the GitHub Pages build, into the repo secret SHEET_WEBHOOK_URL).
//
// doPost appends one row per finished quiz attempt.
// doGet returns all attempts as JSON, used by the app to build the
// leaderboard and compute the player's percentile.

const HEADERS = [
  'timestamp', 'sessionId', 'nickname', 'totalScore', 'maxScore',
  'percentScore', 'durationSeconds', 'categoryScoresJson',
];

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }
  const data = JSON.parse(e.postData.contents);
  const rows = Array.isArray(data) ? data : [data];
  rows.forEach(row => {
    sheet.appendRow(HEADERS.map(h => (row[h] !== undefined ? row[h] : '')));
  });
  return ContentService.createTextOutput('OK');
}

function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return ContentService.createTextOutput(JSON.stringify({ attempts: [] }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  const values = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  const attempts = values.map(row => {
    const obj = {};
    HEADERS.forEach((h, i) => { obj[h] = row[i]; });
    return obj;
  });
  return ContentService.createTextOutput(JSON.stringify({ attempts }))
    .setMimeType(ContentService.MimeType.JSON);
}

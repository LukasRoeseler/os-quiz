// Google Apps Script: paste this into Extensions > Apps Script on the target
// Google Sheet, then Deploy > New deployment > type "Web app" > execute as
// "Me" > access "Anyone" > Deploy. Copy the resulting URL (ends in /exec)
// into the SHEET_WEBHOOK_URL constant near the top of os_quiz/index.html
// (or, for the GitHub Pages build, into the repo secret SHEET_WEBHOOK_URL).
//
// doPost appends one row per finished quiz attempt.
// doGet returns all attempts as JSON (or, if called with a "callback"
// query parameter, as JSONP) used by the app to build the leaderboard
// and compute the player's percentile. JSONP is used from the frontend
// because Apps Script web app responses are frequently not readable via
// a cross-origin fetch() due to missing CORS headers on the redirected
// response; a <script> tag is exempt from that restriction.

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
  let attempts = [];
  if (lastRow >= 2) {
    const values = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
    attempts = values.map(row => {
      const obj = {};
      HEADERS.forEach((h, i) => { obj[h] = row[i]; });
      return obj;
    });
  }
  const payload = JSON.stringify({ attempts });
  const callback = e && e.parameter && e.parameter.callback;
  if (callback && /^[a-zA-Z0-9_]+$/.test(callback)) {
    return ContentService.createTextOutput(callback + '(' + payload + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(payload).setMimeType(ContentService.MimeType.JSON);
}

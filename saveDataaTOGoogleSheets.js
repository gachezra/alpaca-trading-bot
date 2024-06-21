const { google } = require('googleapis');
const sheets = google.sheets('v4');

const authenticateGoogle = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'path/to/your/service/account/keyfile.json',
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
    return await auth.getClient();
};

const saveDataToGoogleSheets = async (data, spreadsheetId, range) => {
    const auth = await authenticateGoogle();
    const request = {
        spreadsheetId,
        range,
        valueInputOption: 'RAW',
        resource: {
            values: data.map(bar => [bar.t, bar.o, bar.h, bar.l, bar.c, bar.v])
        },
        auth
    };
    await sheets.spreadsheets.values.append(request);
    console.log('Data saved to Google Sheets.');
};

module.exports = saveDataToGoogleSheets;

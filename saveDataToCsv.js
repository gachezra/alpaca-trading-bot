const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const saveDataToCSV = async (data, fileName) => {
    const csvWriter = createCsvWriter({
        path: fileName,
        header: [
            {id: 't', title: 'Timestamp'},
            {id: 'o', title: 'Open'},
            {id: 'h', title: 'High'},
            {id: 'l', title: 'Low'},
            {id: 'c', title: 'Close'},
            {id: 'v', title: 'Volume'}
        ]
    });

    await csvWriter.writeRecords(data);
    console.log('Data saved to CSV.');
};

module.exports = saveDataToCSV;

const analyzeData = require('./analyzeData');
const symbol = 'EURUSD'; // Example forex pair

const init = async () => {
    const checkAndAnalyze = async () => {
        await analyzeData(symbol);
    }
    
    checkAndAnalyze();
    setInterval(checkAndAnalyze, 60 * 1000); // Check every minute
}

init();
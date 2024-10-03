const fs = require('fs');
const path = require('path');

function createLogFiles() {
    const logsDir = path.join(__dirname, 'Logs');
    
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }

    for (let i = 0; i < 10; i++) {
        const filePath = path.join(logsDir, `log${i}.txt`);
        fs.writeFileSync(filePath, `Log file ${i}`);
        console.log(`log${i}.txt`);
    }
}

createLogFiles();

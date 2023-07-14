const fs = require('fs');
const path = require('path');
// dirCodes is adding users code in codes folder
const dirCodes = path.join(__dirname, 'codes');
// uuid is a backend npm pahage thet genarete us defarent id in every time 
const { v4: uuid } = require('uuid');

// this is simple if condition thet is if we have no folder withe codes then it create new folder 
if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = (format, content) => {
    const jobId = uuid();
    const fileName = `${jobId}.${format}`;
    const filePath = path.join(dirCodes, fileName);
    fs.writeFileSync(filePath, content);
    return filePath;
  };
  
  

module.exports = generateFile;

// get exicute form node child-process
const { exec } = require('child_process');
const path = require('path')
const fs = require('fs');
const { error } = require('console');
const { stdout, stderr } = require('process');
// there are we declare  output path
const outputPath = path.join(__dirname, 'output')
// short if condition for if this folder is not exist there it will creat new 
if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
};

// we can find job id there withe the base name of the created file

const exicuteCpp = (filePath) => {
    const jobId = path.basename(filePath).split('.')[0]
    const outPath = path.join(outputPath, `${jobId}.out`)
    return new Promise((resolve, reject) => {
        // what exec doing there it made a command to going the right file path  and give us the output
        exec(`g++ ${filePath} -o ${outPath} && cd ${outputPath} ./${jobId}.out`,
            (error, stdout, stderr) => {
                if (error) {
                    reject({ error, stderr })
                }
                if (stderr) {
                    reject(stderr)
                }
                resolve(stdout)
            }
        )
    });
};
module.exports = exicuteCpp;
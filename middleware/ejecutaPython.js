//const { spawn } = require('child_process');
import { spawn } from 'child_process'

const runPythonScript = (scriptPath, args) => {
    return new Promise((resolve, reject) => {
      const pythonProcess = spawn('python', [scriptPath, ...args]);
  
      let result = '';
  
      pythonProcess.stdout.on('data', (data) => {
        result += data.toString();
      });
  
      pythonProcess.stderr.on('data', (data) => {
        reject(data.toString());
      });
  
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          resolve(result);
        } else {
          reject(`Python process exited with code ${code}`);
        }
      });
    });
  };

export {
    runPythonScript
  } ;

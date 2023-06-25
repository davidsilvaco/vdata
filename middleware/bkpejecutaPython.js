import { spawn } from 'child_process'

//const spawn = require("child_process").spawn

const pythonProcess = spawn("python",["../expectation/great_expectations/pruebapython.py"])

let pythonResponse = ""
pythonProcess.stdout.on("data", function(data){
    pythonResponse += data.toString()
})

pythonProcess.stdout.on("end",function(){
    console.log(pythonResponse)
})

pythonProcess.stdin.write("probando")

pythonProcess.stdin.end()

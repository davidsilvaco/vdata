import test from 'node:test'
import assert from 'node:assert'
import {generarJWT, generarId } from "../helpers/token.js";
import {runPythonScript } from "../middleware/ejecutaPython.js";

test('ejemplo 1',()=>{
    assert.equal(1,0,'Los numeros no son iguales')
})

test('ejemplo token',()=>{
    const tokenpreuba = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibm9tYnJlIjoiZGF2aWQiLCJpYXQiOjE2ODc2NTQ4NjEsImV4cCI6MTY4Nzc0MTI2MX0.3nm88sIMx_60lya6lKXxo_4aSl1jMVIL1P2YUv9guro'
    const token = generarJWT({
        id : 2,
      nombre: 'david' })
    assert.equal(tokenpreuba,token,'Los tockens son diferentes')
})

test('Test Ejecuta Python',()=>{
    runPythonScript('./expectation/great_expectations/pruebapython.py', ['test'])
    .then((result) => {
        console.log('Resultado:', result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });    
})
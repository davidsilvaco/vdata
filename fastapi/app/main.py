from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import ejecuta_ge as ege


app = FastAPI()

class Reglas(BaseModel):
    nombre:str
    regla:dict
    archivo:str
    ##archivo:Optional[str]

@app.get("/")
def index():
    return {"mensaje":"hola mundo"}

@app.post("/validador")
def ejecuta_val(reglas:Reglas):
    nombre=reglas.nombre
    archivo=reglas.archivo
    validaciones=reglas.regla["tipo_expect"]          
    #archvio='../data/CLIENTES_20180101.csv'
    salida = ege.valida(nombre,validaciones,archivo)
    #print(salida["success"])
    #print(salida["statistics"]["success_percent"])
    #return(salida)    
    return {"salida_val":salida}

from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional
import ejecuta_ge as ege


app = FastAPI()

class Validador(BaseModel):
    nombre:str
    validaciones:dict
    archivo:str
    ##archivo:Optional[str]

@app.get("/")
def index():
    return {"mensaje":"hola mundo"}


@app.get("/libros/{id}")
def mostrar_libro(id:int):
    return {"libroid":id}

@app.post("/validador")
def ejecuta_val(validador:Validador):
    nombre=validador.nombre
    archivo=validador.archivo
    validaciones=validador.validaciones["tipo_expect"]       
 
    datos=[
            {
                "expectation_type": "expect_column_to_exist",
                "kwargs": {
                    "column": "DNI"
                }
            },
            {
                "expectation_type": "expect_column_values_to_be_between",
                "kwargs": {
                    "column": "RUC",
                    "min_value": 0,
                    "max_value": 100000
                }
            }
        ]
    #archvio='../data/CLIENTES_20180101.csv'
    salida = ege.valida(nombre,validaciones,archivo)
    #print(salida["success"])
    #print(salida["statistics"]["success_percent"])
    #return(salida)    
    return {"salida_val":salida}

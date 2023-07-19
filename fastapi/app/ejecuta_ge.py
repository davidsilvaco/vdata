from great_expectations.core import ExpectationSuite
from great_expectations.dataset import PandasDataset
import pandas as pd


def valida(nombre:str, datos:dict, archivo:str):
    # Definir el nombre de la expectativa
    expectation_suite_name = "esn_"+nombre

    # Definir expectativas
    expectation_suite = ExpectationSuite(
        expectation_suite_name=expectation_suite_name,
        expectations=datos
    )

    # Cargar los datos en un DataFrame de pandas (puedes reemplazar esto con tus propios datos)
    df = pd.read_csv(archivo)

    # Convertir el DataFrame en un objeto Batch de Great Expectations
    batch = PandasDataset(df)

    # Ejecutar la validación
    validation_result = batch.validate(expectation_suite)

    # Imprimir el resultado de la validación   
    return validation_result    

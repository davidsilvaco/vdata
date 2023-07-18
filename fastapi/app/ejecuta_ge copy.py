from great_expectations.core import ExpectationSuite
from great_expectations.dataset import PandasDataset
import pandas as pd


def valida(datos:dict):
    # Definir el nombre de la expectativa
    expectation_suite_name = "mi_expectativa"

    # Definir expectativas
    expectation_suite = ExpectationSuite(
        expectation_suite_name=expectation_suite_name,
        expectations=[
            {
                "expectation_type": "expect_column_to_exist",
                "kwargs": {
                    "column": "age"
                }
            },
            {
                "expectation_type": "expect_column_values_to_be_between",
                "kwargs": {
                    "column": "salary",
                    "min_value": 0,
                    "max_value": 100000
                }
            }
        ]
    )

    # Cargar los datos en un DataFrame de pandas (puedes reemplazar esto con tus propios datos)
    data = {
        "age": [25, 30, 35, 40],
        "salary": [50000, 70000, 90000, 110000]
    }
    df = pd.DataFrame(data)

    # Convertir el DataFrame en un objeto Batch de Great Expectations
    batch = PandasDataset(df)

    # Ejecutar la validación
    validation_result = batch.validate(expectation_suite)

    # Imprimir el resultado de la validación
    print(validation_result["success"])
    print(validation_result["statistics"]["success_percent"])

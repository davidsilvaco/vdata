import great_expectations as ge

try:
    ge.__version__
    print("Great Expectations está instalado.")
except ImportError:
    print("Great Expectations no está instalado.")

require 'forecast_io'
ForecastIO.api_key = ENV["API_FORECAST"]
ForecastIO.default_params = {units: 'si'}
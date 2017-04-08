class Town < ActiveRecord::Base
 before_validation :geocode
  
  def getForecast
     ForecastIO.forecast(self.latitude, self.longitude)
  end
  private
  def geocode
    if attribute_present?("name")
      places = Nominatim.search(self.name).limit(1)
      place = places.first
      if place
        self.latitude = place.lat
        self.longitude = place.lon
      end
    end
  end 
end

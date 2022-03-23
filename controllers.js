// Controllers
app.controller('homeController', ['$scope', '$location','cityService', function(scope, location, cityService) {
  scope.city = cityService.city;
  
  scope.$watch('city', function(){
    cityService.city = scope.city;
  })

  scope.submit=function(){
    location.path('/forecast')
  }
}])

app.controller('forecastController', ['$scope', 'cityService', 'weatherService', function(scope, cityService, weatherService) {
  scope.city = cityService.city;
  scope.numForecasts = 60;
  scope.weatherResult = weatherService.getWeather();
  
  // Functions
  scope.convertToCelsius = function(degK) {
    return Math.round((1.8 * (degK-273)) * (5/9))
  }

  scope.convertToDate = function(dt){
    return new Date(dt * 1000)
  }
}])

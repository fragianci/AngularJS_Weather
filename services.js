// Services
app.service('cityService', function(){
  this.city = "Turin, TO";
})

app.service('weatherService', ['$resource', function(resource){
  this.getWeather = function(){
    let weatherAPI = resource('https://api.openweathermap.org/data/2.5/onecall?lat=45.12&lon=-07.46&exclude=hourly,daily&appid=948ed8b4ce276d9f8dfaf6827311f10e', 
    { 
      callback: 'JSON_CALLBACK' 
    }, 
    { 
      get: { method: 'JSONP' 
    }
   });
    let weatherResult = weatherAPI.get()
    console.log(weatherResult)
    return weatherResult;
  }
}])
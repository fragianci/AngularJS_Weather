// Directives
app.directive('singleForecast', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/singleForecast.html',
    replace: true,
    scope: {
      weatherObject: '=',
      convertToDateFunction: '&'
    }
  }
})

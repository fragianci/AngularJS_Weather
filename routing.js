// Routes
app.config(function ($routeProvider) {
  $routeProvider
  .when(
    '/home', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    }
  )
  .when(
    '/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    }
  )
});

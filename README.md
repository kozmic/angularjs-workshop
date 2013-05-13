AngularJS Workshop
==================

In this workshop we will try to create an [AngularJS](http://angularjs.org/) application that utilizes most aspects of the framework.
This workshop creates everything from scratch, step by step, so the participants can understand and follow how to build an AngularJS application.
It does not include building a production ready application (concatination, minification, less -> css) since it adds complexity.


* [Slides for workshop](http://kozmic.github.io/angularjs-workshop/)

## Tasks


### 1. Your first AngularJS application

Create an Hello World AngularJS application.

1. Creating an index.html.
2. Include [angular.js](http://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.js) from [http://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.js](http://ajax.googleapis.com/ajax/libs/angularjs/1.0.6/angular.js).
3. Bootstrap AngularJS by adding a HTML-element with the ng-app attribute.

### 2. Name your application

1. Give your Angular a name by setting the ng-app attribute value to the name of your application (should start with lower case). In the examples, `weatherApp` is used.
2. Create a new Javascript file called app.js which declares the module `weatherApp`.
3. Include `app.js` in `index.html`.

### 3. Create a controller

1. Create a controller in controller/WeatherController.js.
2. Declare a $scope property.
3. Update template to display the $scope property.


### 4. Create search form without submit action

1. Create a form with `ng-submit`.
2. Create input field in form that is bound to scope in controller.


### 5. Add validation
1. Give your controller a name.
2. Add a error message that is shown if the field is empty.

### 6. JSON resource
1. Create a service with a $resource with url: http://api.openweathermap.org/data/2.5/weather?q=London,uk.
2. Call the service from your controller where the input from your form is sent as an argument to the service ( q=<form-input>).
3. Display weather response in the controller.

### 7. Refactor your application to introduce routing.
1. Replace "main view" with a ng-view directive, add what was in the main view before into a separate template.
2. Add routing for "#/" so the new template is show in the ng-view directive.

### 8. Add weekly forecast on new url
1. Add a new route which should be used to display weekly weather with its own template.
2. Update menu to link to your new route.
3. Create a new resource with the url http://api.openweathermap.org/data/2.5/forecast/daily?q=London,uk.&cnt=7
4. Display the weather for the next 7 days in the view.

### 9. Create your a simple directive (weatherIcon)
1. Create a directive so the weather icon does not perform a GET request before the interpolation is done.
(One solution: Put the uninterpolated icon url in the directive. Do not set img.src before the model has the icon property set)

### 10. Create a complex directive (weather)
1. Create a directive which use the directive in the above task, but also display other weather data.
(Tip: Use transclude: true and <weather><weatherIcon/></weather)



angular.module('TestApp', []);

angular.module('TestApp')
  .controller('MainController', ctrlFunc);

function ctrlFunc() {
// client JS/angular grab newly created clientPeople variable and save it in
// this angular module as people
  this.people = clientPeople;
}
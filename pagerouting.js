// create the module and name it scotchApp
console.log("entering to js")    
var scotchApp = angular.module('RoutingApp',["ngRoute"]);

// configure our routes    
scotchApp.config(function($routeProvider) {  
    $routeProvider  
  
    // route for the home page    
       
.when("/manali", {  
  templateUrl:"assets/templates/manali.html"
})
.when("/manali1", {  
  templateUrl:"assets/templates/manali1.html"
})
    .otherwise({
        redirectTo: ''
    });
  
    
});  
  
scotchApp.controller("bankpagecontroller", function($scope) {

  var cleanAccount = function() {
    var account = {
      name:"DINESH",
      runningBalance:500,
      error:''
    }
    return account;
  };
  
   var cleanTransaction = function() {
    var transaction = {
      type: 'debit',
      amount: 0.00,
      description: ''
    }

    return transaction;
  };

  var transactions = [{
    amount: 10000.00,
    description: 'Salary',
    type: 'credit'
  }, {
    amount: 500.00,
    description: 'Power Bill',
    type: 'debit'
  }, {
    amount: 250.26,
    description: 'Milk',
    type: 'debit'
  }, {
    amount: 100.00,
    description: 'CityBank Interest',
    type: 'credit'
  }, {
    amount: 350.15,
    description: 'Travelling',
    type: 'Credit'
  }, {
    amount: 160.25,
    description: 'Phone Bill',
    type: 'debit'
  }, ];

 

  $scope.transaction = cleanTransaction();
  $scope.account = cleanAccount();

  $scope.transactionList = transactions;

  $scope.saveTransaction = function() {
    var amount = parseFloat($scope.transaction.amount);
    var num = parseFloat($scope.account.runningBalance);
    var answer = 0;
    if ($scope.transaction.type === 'credit') {
      answer = num + amount
    }
    else if(amount>($scope.account.runningBalance)){
      $scope.account.error='Insuffient Funds'
    }else{
      answer = num - amount

    }
    $scope.account.runningBalance = answer;

    $scope.transaction.amount = amount;
    transactions.push($scope.transaction);
    $scope.transaction = cleanTransaction();
  };

});


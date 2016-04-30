app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider. 
      when("/Home",
        { templateUrl: "Views/Home/Index.cshtml", controller: "ControllerEmployee" }).
      // event more routes here ...
      otherwise({ redirectTo: "/Home" });
}).
  run(function ($rootScope, $location) {
      $rootScope.$on("$routeChangeStart", function (event, next, current) {
          if ($rootScope.loggedInUser == null) {
              // no logged user, redirect to /login
              if (next.templateUrl === "partials/login.html") {
              } else {
                  $location.path("/Home");
              }
          }
      });
  });

 

app.service("myService", function ($http, $q, $window, $location) {


    //get All Eployee
    this.getEmployees = function () {

        return $http.get("User/GetAll");
    };


    //// get Employee By Id
    this.getEmployee = function (id) {
        var response = $http({
            method: "get",
            url: "User/GetById",
            dataType: "json",
            params: {
                id: JSON.stringify(id)
            }
        });
        return response;
    }

    // Update Employee 
    this.updateEmp = function (employee) {
        var response = $http({
            method: "post",
            url: "User/Update",
            data: JSON.stringify(employee),
            dataType: "json"
        });
        return response;
    }

    // Add Employee
    this.AddEmp = function (employee) {

        var response = $http({
            method: "post",
            //url: "User/Create",
            url: "User/Create",
            data: JSON.stringify(employee),
            dataType: "json"
        });

        return response;
    }

    // register ekranı ıcın Add Employee
    this.AddEmpRegister = function (employee) {

        var response = $http({
            method: "post",
            //url: "User/Create",
            url: "Register/Create",
            data: JSON.stringify(employee),
            dataType: "json"
        });

        return response;
    }

    //Delete Employee
    this.DeleteEmp = function (id) {
        var response = $http({
            method: "post",
            url: "User/DeleteUser",
            //data: JSON.stringify(id),
            dataType: "json",
            params: {
                id: JSON.stringify(id)
            }
        });
        return response;
    }
});
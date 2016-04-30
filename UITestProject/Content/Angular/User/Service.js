

app.service("myService", function ($http, $q, $window) {


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

    //// get Employee By Id
    this.getAddress = function (id) {
        var response = $http({
            method: "get",
            url: "User/GetAddressById",
            dataType: "json",
            params: {
                id: JSON.stringify(id)
            }
        });
        return response;
    }

    this.getAllAddress = function () {

        return $http.get("User/GetAllAddress");
    };



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

    // add address 
    this.addAdresss = function (address) {
        var response = $http({
            method: "post",
            url: "User/CreateAddress",
            data: JSON.stringify(address),
            dataType: "json"
        });
        return response;
    }
});
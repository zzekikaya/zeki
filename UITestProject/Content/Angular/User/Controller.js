
app.controller("user", function ($scope, myService) {
    //#pop çalışması için gerekli kodlar 
    $scope.showModal = false;
    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };
 
    $scope.AddAddressDiv = function () {
        $scope.Action2 = "Add";
        $scope.divEmployee = false;
        $scope.divAddress = true;
    }

    $scope.AddAddress = function (address) {

        //Employee.Id = $scope.employeeId;
        var getData = myService.addAdresss(address);
        getData.then(function (msg) {
            $scope.employee = null;
            $scope.divEmployee = false;
            //$scope.address = null;
            alert("Kayıt Başarılı");
        }, function () {
            alert('Error in updating record');
        });
    };


    //address tablosunu okur
    function GetAllAddress() {
        var getData = myService.getAllAddress();
        getData.then(function (emp) {
            $scope.address = emp.data;

        }, function () {
            alert('Error in getting records');
        });
    };


    GetAllEmployee(); $scope.divEmployee = false;
    //To Get All Records  
    function GetAllEmployee() {

        var getData = myService.getEmployees();
        getData.then(function (emp) {
            $scope.employees = emp.data;

        }, function () {
            alert('Error in getting records');
        });
    };

    $scope.editEmployee = function (employee) {
        GetAllAddress();
        var id = employee.ID;
        var getData = myService.getEmployee(id);
        getData.then(function (response) {
            $scope.employee = response.data; 
            $scope.Action = "Update";
            $scope.divEmployee = true;//div acılır 
            $scope.divAddress = false;//addressDiv kapatılır.
        },
        function () {
            alert('Error in getting records');
        });
    }
    $scope.AddUpdateEmployee = function (employee) {

        var model = employee;
        var getAction = $scope.Action;

        if (getAction == "Update") {
            //Employee.Id = $scope.employeeId;
            var getData = myService.updateEmp(model);
            getData.then(function (msg) {
                GetAllEmployee();
                ClearFields();
                $scope.employee = null;
                $scope.divEmployee = false;
                alert("Kayıt Güncellendi");
            }, function () {
                alert('Error in updating record');
            });
        }
        else {
            //GetAllAddress();
            var getData = myService.AddEmp(model);
            getData.then(function (msg) {
                GetAllEmployee();
                alert("Kayıt Başarılı");
                ClearFields();
                $scope.divEmployee = false;
            }, function () {
                alert('Error in adding record');
            });
        }
        debugger;
        GetAllEmployee();
        //$scope.refresh();
    }


    $scope.AddEmployeeDiv = function () {
        GetAllAddress();
        ClearFields();
        $scope.Action2 = "";
        $scope.divAddress = false;
        $scope.Action = "Add";
        $scope.divEmployee = true;
    }

    $scope.deleteEmployee = function (employee) {
        $scope.divAddress = false;//addressDiv kapatılır.
        var getData = myService.DeleteEmp(employee.ID);
        getData.then(function (msg) {
            GetAllEmployee();
            alert('Employee Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.employee = null;
    }
});
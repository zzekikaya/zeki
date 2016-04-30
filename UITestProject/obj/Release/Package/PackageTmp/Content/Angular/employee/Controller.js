
app.controller("employee", function ($scope, myService) {
    //#pop çalışması için gerekli kodlar 
    $scope.showModal = false;
    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };
    //#popup endregion 


    GetAllEmployee(); $scope.divEmployee = false;
    //To Get All Records  
    function GetAllEmployee() {

        var getData = myService.getEmployees();

        getData.then(function (emp) {
            $scope.employees = emp.data;


        }, function () {
            alert('Error in getting records');
        });
    }

    $scope.editEmployee = function (employee) {
        var id = employee.ID;
        var getData = myService.getEmployee(id);
        getData.then(function (response) {
            $scope.employee = response.data;
            $scope.Action = "Update";
            $scope.divEmployee = true;//div acılır 
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
                //modalDialogService.show({ header: "des", message: "dess", returnUrl: 'location', okTitle: "ok" });
                $scope.divEmployee = false;
                alert("Kayıt Güncellendi");
            }, function () {
                alert('Error in updating record');
            });
        }
        else {
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

    //$scope.apply(function () {
    //    debugger;
    //     update goes here
    //    GetAllEmployee();
    //});

    $scope.AddEmployeeDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divEmployee = true;
    }

    $scope.deleteEmployee = function (employee) {
        debugger;
        var getData = myService.DeleteEmp(employee.ID);
        getData.then(function (msg) {
            GetAllEmployee();
            alert('Employee Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    }

    function ClearFields() {
        $scope.employee.ID = "";
        $scope.employee.UserName = "";
        $scope.employee.FirstName = "";
        $scope.employee.LastName = "";
        $scope.employee.Email = "";
        $scope.employee.Address = "";
        $scope.employee.Password = "";
    }
});
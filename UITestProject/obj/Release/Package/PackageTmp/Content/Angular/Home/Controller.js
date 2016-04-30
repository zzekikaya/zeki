
app.controller("home", function ($scope, myHomeService) {
    //#pop çalışması için gerekli kodlar 
    $scope.showModal = false;
    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };
    //#popup endregion 
    GetAllhome();
  

    $scope.divhome = false;
    //GetAllhome();
    //GethomeTypes();
    //To Get All Records  
    function GetAllhome() {

        var getData = myHomeService.getHomes();

        getData.then(function (emp) {
            //$scope.comment = [];
            $scope.comments = emp.data;
            console.log(emp.data);
        }, function () {
            alert('Error in getting records');
        });
    }

    ////To Get All Records  
    //function GethomeTypes() {

    //    var getData = myHomeService.gethomeTypes();

    //    getData.then(function (emp) {
    //        $scope.homeTypes = emp.data;
    //    }, function () {
    //        alert('Error in getting records');
    //    });
    //}


    $scope.edithome = function (home) {
        var id = home.ID;
        var getData = myHomeService.gethome(id);
        getData.then(function (response) {
            $scope.home = response.data;
            $scope.Action = "Update";
            $scope.divhome = true;//div acılır 
        },
        function () {
            alert('Error in getting records');
        });
    }

    $scope.addComment = function (home) {
        var model = home;
        var getAction = $scope.Action;
        var getData = myHomeService.AddHome(model);
        getData.then(function (msg) {
            GetAllhome();
            //alert("Kayıt Başarılı");

            //ClearFields();
            $scope.divhome = false;
        }, function () {
            alert('Error in adding record');
        });
    }
    //GetAllhome();
    //$scope.refresh();


    //$scope.apply(function () {
    //    debugger;
    //     update goes here
    //    GetAllhome();
    //});

    //$scope.AddhomeDiv = function () {
    //    ClearFields();
    //    $scope.Action = "Add";
    //    $scope.divhome = true;
    //}

    //$scope.deletehome = function (home) {
    //    debugger;
    //    var getData = myHomeService.Deletehome(home.ID);
    //    getData.then(function (msg) {
    //        GetAllhome();
    //        alert('home Deleted');
    //    }, function () {
    //        alert('Error in Deleting Record');
    //    });
    //}

    //function ClearFields() {
    //    $scope.home.ID = "";
    //    $scope.home.Name = "";
    //    $scope.home.Author = "";
    //    $scope.home.EditionNumber = "";
    //    $scope.home.AddedDate = "";
    //    $scope.employee.TypeId = "";

    //}
});
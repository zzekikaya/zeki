
app.controller("home", function ($scope, myHomeService) {
    //#pop çalışması için gerekli kodlar 
    $scope.showModal = false;
    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };
    //#popup endregion 
    //GetAllhome();
  

    $scope.divhome = false;
 
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
  
});
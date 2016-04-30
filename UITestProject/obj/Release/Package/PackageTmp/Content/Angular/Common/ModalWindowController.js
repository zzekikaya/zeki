app.controller("ModalWindowController", function ($scope, $modalInstance, message, okTitle, cancelTitle, pageHeading) {
    $scope.item = {};
    $scope.message = message;
    $scope.buttonCancelTitle = cancelTitle;
    $scope.buttonOkTitle = okTitle;
    $scope.pageHeading = pageHeading;
    $scope.close = function () {
        $modalInstance.close();
    }
    $scope.cancel = function () {
        $modalInstance.cancel();
    }
    $scope.ok = function () {
        $modalInstance.close($scope.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.buttonCancelEnabled = function () {
        return cancelTitle != undefined && cancelTitle != '' && cancelTitle != 'ML Değeri Eksik';
    }
});
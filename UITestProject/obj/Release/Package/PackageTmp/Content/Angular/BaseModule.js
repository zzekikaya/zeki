/// <reference path="../../Scripts/templates/datepicker/datepicker.html" />
var app = angular.module("myApp", ['ngRoute','ui.bootstrap']);


app.factory('viewModelService', function ($http, $q, $window, $location) {
    var viewModelService = {};
    //bir önceki sayfaya dönüş
    viewModelService.goBack = function () {
        $window.history.back();
    }
    //redirect işlemi
    viewModelService.navigateTo = function (path) {
        if (path) {
            $location.path(MyApp.rootPath + path);
        }
    }
});

app.filter('convertDate', function () {
    return function (value) {
        if (value != null) {
            var pattern = /Date\(([^)]+)\)/;
            var results = pattern.exec(value);
            var dt = new Date(parseFloat(results[1]));
            return dt;
        }
        else {
            return undefined;
        }
    }
});
//app.controller('MainCtrl', function ($scope) {
//    $scope.showModal = false;
//    $scope.toggleModal = function () {
//        $scope.showModal = !$scope.showModal;
//    };
//});

app.directive('modal', function () {
    return {
        template: '<div class="modal fade">' +
            '<div class="modal-dialog">' +
              '<div class="modal-content">' +
                '<div class="modal-header">' +
                  '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                  '<h4 class="modal-title">{{ title }}</h4>' +
                '</div>' +
                '<div class="modal-body" ng-transclude></div>' +
              '</div>' +
            '</div>' +
          '</div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: true,
        link: function postLink(scope, element, attrs) {
            scope.title = attrs.title;

            scope.$watch(attrs.visible, function (value) {
                if (value == true)
                    $(element).modal('show');
                else
                    $(element).modal('hide');
            });

            $(element).on('shown.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = true;
                });
            });

            $(element).on('hidden.bs.modal', function () {
                scope.$apply(function () {
                    scope.$parent[attrs.visible] = false;
                });
            });
        }
    };
});

app.directive('crnDatepicker', function () {
    return {
        restrict: 'E',
        templateUrl: '../../Scripts/templates/datepicker/datepicker.html',
        link: function () {

        },
        scope: {
            ngModel: '=',
            ngLimitMinDateToToday: '=',
            ngLimitMaxDateToToday: '='
        },
        controller: function ($scope, $element) {
            $scope.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.opened = true;
            };
            $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1,
            };
            $scope.format = 'dd.MM.yyyy';

            if ($scope.limitMinDateToToday) {
                $scope.minDate = new Date();
            }
            else {
                $scope.minDate = null;
            }

            if ($scope.limitMaxDateToToday) {
                $scope.maxDate = new Date();
            }
            else {
                $scope.maxDate = null;
            }

            //$scope.setLang('en');
        },
        controllerAs: 'dateCtrl'
    }
});


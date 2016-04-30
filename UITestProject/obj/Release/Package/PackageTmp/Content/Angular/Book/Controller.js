
app.controller("book", function ($scope, myBookService) {
    //#pop çalışması için gerekli kodlar 
    $scope.showModal = false;
    $scope.toggleModal = function () {
        $scope.showModal = !$scope.showModal;
    };
    //#popup endregion 

    var initialize = function () {
        GetBookTypes();

    };

    $scope.divbook = false;
    GetAllBook();
    GetBookTypes();
    //To Get All Records  
    function GetAllBook() {

        var getData = myBookService.getBooks();

        getData.then(function (emp) {
            $scope.books = emp.data;
            console.log(emp.data);
        }, function () {
            alert('Error in getting records');
        });
    };

    //To Get All Records  
    function GetBookTypes() {

        var getData = myBookService.getBookTypes();

        getData.then(function (emp) {
            $scope.bookTypes = emp.data;
        }, function () {
            alert('Error in getting records');
        });
    };

    //rapor icin yazilan metot
    $scope.getReport = function (startDate, endDate) {
        var getData = myBookService.getReport(startDate, endDate);
        getData.then(function (emp) {
            $scope.books = emp.data;
            console.log(emp.data);
        }, function () {
            alert('Error in getting records');
        })
    };

    $scope.editBook = function (book) {
        var id = book.ID;
        var getData = myBookService.getBook(id);
        getData.then(function (response) {
            $scope.book = response.data;
            $scope.Action = "Update";
            $scope.divBook = true;//div acılır 
        },
        function () {
            alert('Error in getting records');
        });
    };

    $scope.AddUpdateBook = function (book) {
        var model = book;
        var getAction = $scope.Action;

        if (getAction == "Update") {
            //Book.Id = $scope.bookId;
            var getData = myBookService.updateBook(model);
            getData.then(function (msg) {
                GetAllBook();
                ClearFields();
                //modalDialogService.show({ header: "des", message: "dess", returnUrl: 'location', okTitle: "ok" });
                $scope.divBook = false;
                alert("Kayıt Güncellendi");
            }, function () {
                alert('Error in updating record');
            });
        }
        else {
            var getData = myBookService.AddBook(model);
            getData.then(function (msg) {
                GetAllBook();
                alert("Kayıt Başarılı");

                ClearFields();
                $scope.divBook = false;
            }, function () {
                alert('Error in adding record');
            });
        }
        debugger;
        GetAllBook();
        //$scope.refresh();
    };

    //$scope.apply(function () {
    //    debugger;
    //     update goes here
    //    GetAllBook();
    //});

    $scope.AddBookDiv = function () {
        ClearFields();
        $scope.Action = "Add";
        $scope.divBook = true;
    };

    $scope.deleteBook = function (book) {
        debugger;
        var getData = myBookService.DeleteBook(book.ID);
        getData.then(function (msg) {
            GetAllBook();
            alert('Book Deleted');
        }, function () {
            alert('Error in Deleting Record');
        });
    };

    function ClearFields() {
        $scope.book.ID = "";
        $scope.book.Name = "";
        $scope.book.Author = "";
        $scope.book.EditionNumber = "";
        $scope.book.AddedDate = "";
        $scope.employee.TypeId = "";

    };

    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // Disable weekend selection
    $scope.disabled = function (date, mode) {
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };

    $scope.toggleMin();
    $scope.maxDate = new Date(2020, 5, 22);

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events =
      [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
      ];

    $scope.getDayClass = function (date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    };
});
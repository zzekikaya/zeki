

app.service("myBookService", function ($http) {

    //get All Eployee
    this.getBooks = function () {

        return $http.get("Book/GetAll");
    };

    this.getBookTypes = function () {

        return $http.get("Book/GetBookTypeAll");
    };

    //// get Book By Id
    this.getReport = function (startDate, endDate) {
        debugger;
        var response = $http({
            method: "POST",
            url: "Book/GetReport",
            dataType: "json",
            params: {
                startDate: startDate,
                endDate: endDate
            }
        });
        return response;
    }

    //// get Book By Id
    this.getBook = function (id) {
        var response = $http({
            method: "GET",
            url: "Book/GetById",
            dataType: "json",
            params: {
                id: JSON.stringify(id)
            }
        });
        return response;
    }

    // Update Book 
    this.updateBook = function (book) {
        var response = $http({
            method: "post",
            url: "Book/Update",
            data: JSON.stringify(book),
            dataType: "json"
        });
        return response;
    }

    // Add Book
    this.AddBook = function (book) {

        var response = $http({
            method: "post",
            url: "Book/Create",
            data: JSON.stringify(book),
            dataType: "json"
        });

        return response;
    }

    //Delete Book
    this.DeleteBook = function (id) {
        var response = $http({
            method: "post",
            url: "Book/DeleteBook",
            //data: JSON.stringify(id),
            dataType: "json",
            params: {
                id: JSON.stringify(id)
            }
        });
        return response;
    }
});
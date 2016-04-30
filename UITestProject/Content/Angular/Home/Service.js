app.service("myHomeService", function ($http) {

    //get All Eployee
    //this.getHomes = function () {

    //    return $http.get("Home/GetAll");
    //};

    //this.getHomeTypes = function () {

    //    return $http.get("Home/GetHomeTypeAll");
    //};

    //// get Home By Id
    this.getHome = function (id) {
        var response = $http({
            method: "get",
            url: "Home/GetById",
            dataType: "json",
            params: {
                id: JSON.stringify(id)
            }
        });
        return response;
    }

    // Update Home 
    this.updateHome = function (book) {
        var response = $http({
            method: "post",
            url: "Home/Update",
            data: JSON.stringify(book),
            dataType: "json"
        });
        return response;
    }

    // Add Home
    this.AddHome = function (comment) {

        var response = $http({
            method: "post",
            url: "Home/Create",
            data: JSON.stringify(comment),
            dataType: "json"
        });

        return response;
    }

    //Delete Home
    this.DeleteHome = function (id) {
        var response = $http({
            method: "post",
            url: "Home/DeleteHome",
            //data: JSON.stringify(id),
            dataType: "json",
            params: {
                id: JSON.stringify(id)
            }
        });
        return response;
    }
});
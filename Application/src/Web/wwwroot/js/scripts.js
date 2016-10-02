var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 2] = "Inactive";
    Status[Status["Success"] = 101] = "Success";
    Status[Status["Warning"] = 102] = "Warning";
    Status[Status["Error"] = 103] = "Error";
    Status[Status["Ok"] = 200] = "Ok";
    Status[Status["Created"] = 201] = "Created";
})(Status || (Status = {}));
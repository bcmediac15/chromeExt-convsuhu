$(document).ready(function(e) {
    const newLocal = "http://10.1.1.3:81/cgi-bin/bacastatus.json";
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: newLocal,
        success: function(responseData, textStatus, jqXHR) {
            var data = JSON.parse(responseData);
            alert();
        },
        error: function(responseData, textStatus, errorThrown) {
            $("#debug").html('Get Data failed.' + textStatus);
        }
    });
});
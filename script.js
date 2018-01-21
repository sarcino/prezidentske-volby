window.onload = function () {

    var callAPI = function () {
        $.ajax({
            type: "get",
            dataType: "xml",
            contentType: "application/xml",
            url: "http://api.jsemsarka.cz",
            success: function (xml) {

                console.log(xml);
            },

        });


    }

    callAPI();
    // RELOAD EVERY FIVE MINUTES
    setInterval(callAPI, 300000);




}

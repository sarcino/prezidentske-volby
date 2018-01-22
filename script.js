window.onload = function () {


    var callAPI = function () {
        $.ajax({
            type: "get",
            dataType: "xml",
            contentType: "application/xml",
            url: "http://api.jsemsarka.cz",
            success: function (xml) {
                console.log(xml);
                var allCandidates = xml.getElementsByTagName("KANDIDAT");

                var allNames = [];
                var values = [];

                // PROCHÁZÍM VŠECHNY KANDIDÁTY A VYBÍRÁM JMÉNO, PŘÍJMENÍ A PROCENTA HLASŮ
                for (var i = 0; i < allCandidates.length; i++) {
                    allNames.push(allCandidates[i].getAttribute("JMENO") + " " + allCandidates[i].getAttribute("PRIJMENI"));
                    values.push(allCandidates[i].getAttribute("HLASY_PROC_1KOLO"));
                }
                document.getElementById("results2").innerHTML = allNames;
                document.getElementById("results3").innerHTML = values;

                // GRAF

              
                
// END OF SUCCESS
            },

        });


    }

    callAPI();
    // RELOAD EVERY FIVE MINUTES
    setInterval(callAPI, 300000);




}

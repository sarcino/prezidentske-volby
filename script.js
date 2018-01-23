window.onload = function () {
    
    // TABS
    //SLIDE DOWN = SHOW
    //SLIDE UP = HIDE
    $('div.first').slideUp();
    $('#second').click(function() {
        $('div.first').slideUp();
		// Zobraz DIV s class .first
		$('div.second').slideDown();
        
    });
                       
    $('#first').click(function() {
		$('div.second').slideUp();
		$('div.first').slideDown();
        
	});
    
    $('h2').click(function() {
        $('h2').removeClass('current-tab');
        $(this).addClass('current-tab');
    });
                      

    var callAPI = function () {
        $.ajax({
            type: "get",
            dataType: "xml",
            contentType: "application/xml",
           // url: "https://api.jsemsarka.cz",
            
            url: "https://api.jsemsarka.cz/?offline=1",
            success: function (xml) {


                var allCandidates = xml.getElementsByTagName("KANDIDAT");

                var allNames = [];
                var values = [];
                var valuesTwo = [];
                var allNamesTwo = [];

                // PROCHÁZÍM VŠECHNY KANDIDÁTY A VYBÍRÁM JMÉNO, PŘÍJMENÍ A PROCENTA HLASŮ
                for (var i = 0; i < allCandidates.length; i++) {
                    allNames.push(allCandidates[i].getAttribute("JMENO") + " " + allCandidates[i].getAttribute("PRIJMENI"));
                    values.push(allCandidates[i].getAttribute("HLASY_PROC_1KOLO"));

                    if (allCandidates[i].getAttribute("PORADOVE_CISLO") == 7 || allCandidates[i].getAttribute("PORADOVE_CISLO") == 9) {
                        allNamesTwo.push(allCandidates[i].getAttribute("JMENO") + " " + allCandidates[i].getAttribute("PRIJMENI"));
                        valuesTwo.push(allCandidates[i].getAttribute("HLASY_PROC_2KOLO"));

                    }

                }
                // document.getElementById("results").innerHTML = allNames;
                // document.getElementById("results1").innerHTML = values;
                 document.getElementById("results2").innerHTML = allNamesTwo;
                 document.getElementById("results3").innerHTML = valuesTwo;

                // GRAPH - 1. KOLO

                var data = [{
                    x: allNames,
                    y: values,
                    marker: {
                        color: ['rgba(17, 69, 126,1)', 'rgba(17, 69, 126,1)', 'rgba(17, 69, 126,1)', 'rgba(17, 69, 126,1)', 'rgba(17, 69, 126,1)','rgba(17, 69, 126,1)', 'rgba(215, 20, 26,1)', 'rgba(17, 69, 126,1)', 'rgba(215, 20, 26,1)']
                    },
                    type: 'bar'
}];

                var layout = {
                    title: '',
                    showlegend: false
                };

                Plotly.newPlot('graph', data, layout, {
                    displayModeBar: false
                });
                
                // GRAPH - 2. KOLO


                // END OF SUCCESS
            },
            // END OF AJAX
        });


    }

    callAPI();
    // RELOAD EVERY FIVE MINUTES
    setInterval(callAPI, 300000);




}

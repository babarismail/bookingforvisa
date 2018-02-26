;(function() {
		document.getElementById("id123-control37994648").onchange = function() {format("id123-control37994648", "id123-control37995199")};
		document.getElementById("id123-control37994658").onchange = function() {format("id123-control37994658", "id123-control37995202")};
		document.getElementById("id123-control37994693").onchange = function() {format("id123-control37994693", "id123-control37995206")};
		document.getElementById("id123-control37994718").onchange = function() {format("id123-control37994718", "id123-control37995204")};
		document.getElementById("id123-control37994696").onchange = function() {format("id123-control37994696", "id123-control37995205")};
		document.getElementById("id123-control37994720").onchange = function() {format("id123-control37994720", "id123-control37995203")};
		document.getElementById("id123-control37994756").onchange = function() {format("id123-control37994756", "id123-control37995223")};
		
	})();

function format(idFrom, idTo) {
    var dateToConvert = document.getElementById(idFrom).value;
    var dateObj = new Date(dateToConvert);
    if (!isNaN( dateObj.getTime() )) {
        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        document.getElementById(idTo).value = dateObj.getDate() + " " + months[dateObj.getMonth()] + " " + dateObj.getFullYear();
    }
    
}
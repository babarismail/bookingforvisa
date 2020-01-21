;(function() {

        //registering onchange for dates
		document.getElementById("id123-control60526272").onchange = function() {formatDate("id123-control60526272", "id123-control60526273")};
		document.getElementById("id123-control60526276").onchange = function() {formatDate("id123-control60526276", "id123-control60526277")};
		document.getElementById("id123-control60526280").onchange = function() {formatDate("id123-control60526280", "id123-control60526281")};
		document.getElementById("id123-control60526284").onchange = function() {formatDate("id123-control60526284", "id123-control60526285")};
		document.getElementById("id123-control60526288").onchange = function() {formatDate("id123-control60526288", "id123-control60526289")};
		document.getElementById("id123-control60526292").onchange = function() {formatDate("id123-control60526292", "id123-control60526293")};
		document.getElementById("id123-control60526296").onchange = function() {formatDate("id123-control60526296", "id123-control60526297")};
		document.getElementById("id123-control60526300").onchange = function() {formatDate("id123-control60526300", "id123-control60526301")};

        document.getElementById("id123-control60526419").onchange = function() {formatHotelDate("id123-control60526419", "id123-control60526421", "id123-control60526409")};
        document.getElementById("id123-control60526421").onchange = function() {formatHotelDate("id123-control60526419", "id123-control60526421", "id123-control60526409")};
        document.getElementById("id123-control60526489").onchange = function() {formatHotelDate("id123-control60526489", "id123-control60526488", "id123-control60526493")};
        document.getElementById("id123-control60526488").onchange = function() {formatHotelDate("id123-control60526489", "id123-control60526488", "id123-control60526493")};
        document.getElementById("id123-control60526511").onchange = function() {formatHotelDate("id123-control60526511", "id123-control60526510", "id123-control60526512")};
        document.getElementById("id123-control60526510").onchange = function() {formatHotelDate("id123-control60526511", "id123-control60526510", "id123-control60526512")};
        document.getElementById("id123-control60526524").onchange = function() {formatHotelDate("id123-control60526524", "id123-control60526523", "id123-control60526525")};
        document.getElementById("id123-control60526523").onchange = function() {formatHotelDate("id123-control60526524", "id123-control60526523", "id123-control60526525")};
        document.getElementById("id123-control60526533").onchange = function() {formatHotelDate("id123-control60526533", "id123-control60526532", "id123-control60526534")};
        document.getElementById("id123-control60526532").onchange = function() {formatHotelDate("id123-control60526533", "id123-control60526532", "id123-control60526534")};
        document.getElementById("id123-control60526556").onchange = function() {formatHotelDate("id123-control60526556", "id123-control60526555", "id123-control60526557")};
        document.getElementById("id123-control60526555").onchange = function() {formatHotelDate("id123-control60526556", "id123-control60526555", "id123-control60526557")};

        //registering onchange for formatted name
        setOnchangeForNameControl("id123-control60526253","id123-control60526254");
        setOnchangeForNameControl("id123-control60526255","id123-control60526256");
        setOnchangeForNameControl("id123-control60526257","id123-control60526258");
        setOnchangeForNameControl("id123-control60526259","id123-control60526260");
        setOnchangeForNameControl("id123-control60526261","id123-control60526262");
        setOnchangeForNameControl("id123-control60526263","id123-control60526264");
        setOnchangeForNameControl("id123-control60526265","id123-control60526266");
        setOnchangeForNameControl("id123-control60526267","id123-control60526268");
	})();

function setOnchangeForNameControl(idFrom, idTo) {
    document.getElementById(idFrom + "-1").onchange = function() {formatName(idFrom, idTo)};
    document.getElementById(idFrom + "-2").onchange = function() {formatName(idFrom, idTo)};
    document.getElementById(idFrom + "-3").onchange = function() {formatName(idFrom, idTo)};
}

function formatName(idFrom, idTo) {
    document.getElementById(idTo).value = document.getElementById(idFrom + "-2").value + ", " + document.getElementById(idFrom + "-1").value;// + " " + document.getElementById(idFrom + "-3").value;

}
function formatDate(idFrom, idTo) {
    var dateToConvert = document.getElementById(idFrom).value;
    document.getElementById(idTo).value = getDate(dateToConvert);
}

function getDate(value) {
    var dateObj = new Date(value);
    var returnVal = "";
    if (!isNaN( dateObj.getTime() )) {
        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        returnVal = dateObj.getDate() + " " + months[dateObj.getMonth()] + " " + dateObj.getFullYear();
    }
    return returnVal;
}

function formatHotelDate(idFrom1, idFrom2, idTo) {
    var dateToConvert1 = document.getElementById(idFrom1).value;
    var dateToConvert2 = document.getElementById(idFrom2).value;
    var convertedDate1 = getDate(dateToConvert1);
    var convertedDate2 = getDate(dateToConvert2);

    if(convertedDate1 != "" && convertedDate2 != "") {
    document.getElementById(idTo).value = convertedDate1 + " - " + convertedDate2;
    } else {
        document.getElementById(idTo).value = "";
    }

}

;(function() {

        //registering onchange for dates
		document.getElementById("id123-control46081485").onchange = function() {formatDate("id123-control46081485", "id123-control46081486")};
		document.getElementById("id123-control46081489").onchange = function() {formatDate("id123-control46081489", "id123-control46081490")};
		document.getElementById("id123-control46081493").onchange = function() {formatDate("id123-control46081493", "id123-control46081494")};
		document.getElementById("id123-control46081497").onchange = function() {formatDate("id123-control46081497", "id123-control46081498")};
		document.getElementById("id123-control46081507").onchange = function() {formatDate("id123-control46081507", "id123-control46081508")};
		document.getElementById("id123-control46081511").onchange = function() {formatDate("id123-control46081511", "id123-control46081512")};
		document.getElementById("id123-control46081521").onchange = function() {formatDate("id123-control46081521", "id123-control46081522")};
		document.getElementById("id123-control46081534").onchange = function() {formatDate("id123-control46081534", "id123-control46096029")};


        //registering onchange for formatted name
        setOnchangeForNameControl("id123-control46097842","id123-control46098108");
        setOnchangeForNameControl("id123-control46097951","id123-control46098119");
        setOnchangeForNameControl("id123-control46097953","id123-control46098121");
        setOnchangeForNameControl("id123-control46097954","id123-control46098123");
        setOnchangeForNameControl("id123-control46097955","id123-control46098125");
        setOnchangeForNameControl("id123-control46097956","id123-control46098129");
        setOnchangeForNameControl("id123-control46097959","id123-control46098131");
        setOnchangeForNameControl("id123-control46097958","id123-control46098132");
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
    var dateObj = new Date(dateToConvert);
    if (!isNaN( dateObj.getTime() )) {
        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        document.getElementById(idTo).value = dateObj.getDate() + " " + months[dateObj.getMonth()] + " " + dateObj.getFullYear();
    } else {
        document.getElementById(idTo).value = "";
    }

}
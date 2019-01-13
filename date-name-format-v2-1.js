var ids = ["0000002e", "00000036", "0000003e", "00000046", "0000004e", "00000056", "0000005e", "00000066"];
var nameIds = ["0000000c", "00000010", "00000014", "00000018", "0000001c", "00000020", "00000024", "00000028"];
var formattedNameIds = ["0000000e", "00000012", "00000016", "0000001a", "0000001e", "00000022", "00000026", "0000002a"];

document.body.onload = function() {
    /*for(i = 0; i < 8; i++) {
        var targetNode = document.querySelector('[data-hash="' + ids[i] + '"]').children.item(2).children.item(0);
        var config = { attributes: true, childList: true, subtree: true };
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }*/
    //for(i = 0; i < 8; i++) {
        var title = document.querySelector('[data-hash="0000000c"]').children.item(2).children.item(0).children.item(0);
        var fn = document.querySelector('[data-hash="0000000c"]').children.item(2).children.item(1);
        var ln = document.querySelector('[data-hash="0000000c"]').children.item(2).children.item(2);
        title.onchange = function() {updateFormattedName("0000000c", "0000000e");}
        fn.onchange = function() {updateFormattedName("0000000c", "0000000e");}
        ln.onchange = function() {updateFormattedName("0000000c", "0000000e");}

        title = document.querySelector('[data-hash="00000010"]').children.item(2).children.item(0).children.item(0);
        fn = document.querySelector('[data-hash="00000010"]').children.item(2).children.item(1);
        ln = document.querySelector('[data-hash="00000010"]').children.item(2).children.item(2);
        title.onchange = function() {updateFormattedName("00000010", "00000012");}
        fn.onchange = function() {updateFormattedName("00000010", "00000012");}
        ln.onchange = function() {updateFormattedName("00000010", "00000012");}

        title = document.querySelector('[data-hash="00000014"]').children.item(2).children.item(0).children.item(0);
        fn = document.querySelector('[data-hash="00000014"]').children.item(2).children.item(1);
        ln = document.querySelector('[data-hash="00000014"]').children.item(2).children.item(2);
        title.onchange = function() {updateFormattedName("00000014", "00000016");}
        fn.onchange = function() {updateFormattedName("00000014", "00000016");}
        ln.onchange = function() {updateFormattedName("00000014", "00000016");}

        title = document.querySelector('[data-hash="00000018"]').children.item(2).children.item(0).children.item(0);
        fn = document.querySelector('[data-hash="00000018"]').children.item(2).children.item(1);
        ln = document.querySelector('[data-hash="00000018"]').children.item(2).children.item(2);
        title.onchange = function() {updateFormattedName("00000018", "0000001a");}
        fn.onchange = function() {updateFormattedName("00000018", "0000001a");}
        ln.onchange = function() {updateFormattedName("00000018", "0000001a");}

        title = document.querySelector('[data-hash="0000001c"]').children.item(2).children.item(0).children.item(0);
        fn = document.querySelector('[data-hash="0000001c"]').children.item(2).children.item(1);
        ln = document.querySelector('[data-hash="0000001c"]').children.item(2).children.item(2);
        title.onchange = function() {updateFormattedName("0000001c", "0000001e");}
        fn.onchange = function() {updateFormattedName("0000001c", "0000001e");}
        ln.onchange = function() {updateFormattedName("0000001c", "0000001e");}

        title = document.querySelector('[data-hash="00000020"]').children.item(2).children.item(0).children.item(0);
        fn = document.querySelector('[data-hash="00000020"]').children.item(2).children.item(1);
        ln = document.querySelector('[data-hash="00000020"]').children.item(2).children.item(2);
        title.onchange = function() {updateFormattedName("00000020", "00000022");}
        fn.onchange = function() {updateFormattedName("00000020", "00000022");}
        ln.onchange = function() {updateFormattedName("00000020", "00000022");}

        title = document.querySelector('[data-hash="00000024"]').children.item(2).children.item(0).children.item(0);
        fn = document.querySelector('[data-hash="00000024"]').children.item(2).children.item(1);
        ln = document.querySelector('[data-hash="00000024"]').children.item(2).children.item(2);
        title.onchange = function() {updateFormattedName("00000024", "00000026");}
        fn.onchange = function() {updateFormattedName("00000024", "00000026");}
        ln.onchange = function() {updateFormattedName("00000024", "00000026");}

        title = document.querySelector('[data-hash="00000028"]').children.item(2).children.item(0).children.item(0);
        fn = document.querySelector('[data-hash="00000028"]').children.item(2).children.item(1);
        ln = document.querySelector('[data-hash="00000028"]').children.item(2).children.item(2);
        title.onchange = function() {updateFormattedName("00000028", "0000002a");}
        fn.onchange = function() {updateFormattedName("00000028", "0000002a");}
        ln.onchange = function() {updateFormattedName("00000028", "0000002a");}
}

function callback(mutationsList, observer) {
    for(var mutation of mutationsList) {
        updateFormattedDate(mutation.target);
        break;
    }
}

function updateFormattedName(nameId, formattedNameId) {

    var title = document.querySelector('[data-hash="' + nameId + '"]').children.item(2).children.item(0).children.item(0);
    var fn = document.querySelector('[data-hash="' + nameId + '"]').children.item(2).children.item(1);
    var ln = document.querySelector('[data-hash="' + nameId + '"]').children.item(2).children.item(2);

    var formattedNameField = getNameElementByDataHash(formattedNameId);
    formattedNameField.value = ln.value + ',' + fn.value + ' ' + title.value;
}

function updateFormattedDate(source) {
    var targetHash = "";
    if(source.id.includes("0000002e")) {
        targetHash = "00000030";
    } else if (source.id.includes("00000036")) {
        targetHash = "00000038";
    }  else if (source.id.includes("0000003e")) {
        targetHash = "00000040";
    } else if (source.id.includes("00000046")) {
        targetHash = "00000048";
    } else if (source.id.includes("0000004e")) {
        targetHash = "00000050";
    } else if (source.id.includes("00000056")) {
        targetHash = "00000058";
    } else if (source.id.includes("0000005e")) {
        targetHash = "00000060";
    } else if (source.id.includes("00000066")) {
        targetHash = "00000068";
    } else {
        return;
    }

    var targetFormattedDateField = getElementByDataHash(targetHash);
    targetFormattedDateField.value = getFormattedDate(source.parentElement.innerText);
}

function getFormattedDate(dateToConvert) {
    var dateObj = new Date(dateToConvert);
    if (!isNaN( dateObj.getTime() )) {
        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        return dateObj.getDate() + " " + months[dateObj.getMonth()] + " " + dateObj.getFullYear();
    } else {
        return "";
    }
}
function getElementByDataHash(hash) {
var parent = document.querySelector('[data-hash="' + hash + '"]');
    if(parent.children != null && parent.children.length > 2) {
        var innerParent = parent.children.item(2);
        if(innerParent.children != null && innerParent.children.length > 0) {
            var source = innerParent.children.item(0);
            return source;
        }
    }
}

function getNameElementByDataHash(hash) {
var parent = document.querySelector('[data-hash="' + hash + '"]');
    if(parent.children != null && parent.children.length > 2) {
        var innerParent = parent.children.item(2);
        return innerParent.children.item(0);
    }
}


function formatDate(dateToConvert, targetElemDataHash) {
    //var dateToConvert = source.value;
    var dateObj = new Date(dateToConvert);
    if (!isNaN( dateObj.getTime() )) {
        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        target.value = dateObj.getDate() + " " + months[dateObj.getMonth()] + " " + dateObj.getFullYear();
    }
}

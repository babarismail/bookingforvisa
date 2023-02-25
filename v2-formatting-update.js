var dataHashesForNames = [
  "0000000b",
  "0000000f",
  "00000013",
  "00000017",
  "0000001b",
  "0000001f",
  "00000023",
  "00000027",
];

var dataHashesForFlightDates = [
  "00000033",
  "0000003b",
  "00000043",
  "0000004b",
  "00000053",
  "0000005b",
  "00000063",
  "0000006b",
];

var dataHashesHotelDates = [
  "00000077",
  "0000007f",
  "00000087",
  "0000008f",
  "00000079",
  "00000081",
  "00000089",
  "00000091",
];

document.body.onload = function () {
  for (i = 0; i < 8; i++) {
    let selector = '[data-hash="' + dataHashesForNames[i] + '"]';
    let firstName = document
      .querySelector(selector)
      .children.item(0)
      .children.item(2)
      .children.item(1);
    var lastName = document
      .querySelector(selector)
      .children.item(0)
      .children.item(2)
      .children.item(2);
    firstName.onchange = function () {
      reformatNameAndSetInvisibleField(this);
    };
    lastName.onchange = function () {
      reformatNameAndSetInvisibleField(this);
    };
  }

  for (i = 0; i < 8; i++) {
    let selector = '[data-hash="' + dataHashesForFlightDates[i] + '"]';
    let ancestor = document.querySelector(selector);
    let monthElem = getDateElementFromAncestor(ancestor, 0);
    let dayElem = getDateElementFromAncestor(ancestor, 2);
    let yearElem = getDateElementFromAncestor(ancestor, 4);

    const monthObserver = new MutationObserver(function (
      mutationsList,
      monthObserver
    ) {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "childList" &&
          mutation.target.nodeName === "DIV"
        ) {
          reformatFlightDateAndSetInvisibleField(mutation.target);
        }
      }
    });
    monthObserver.observe(monthElem, { childList: true });

    const dayObserver = new MutationObserver(function (
      mutationsList,
      dayObserver
    ) {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "childList" &&
          mutation.target.nodeName === "DIV"
        ) {
          reformatFlightDateAndSetInvisibleField(mutation.target);
        }
      }
    });
    dayObserver.observe(dayElem, { childList: true });

    const yearObserver = new MutationObserver(function (
      mutationsList,
      yearObserver
    ) {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "childList" &&
          mutation.target.nodeName === "DIV"
        ) {
          reformatFlightDateAndSetInvisibleField(mutation.target);
        }
      }
    });
    yearObserver.observe(yearElem, { childList: true });
  }

  for (i = 0; i < 8; i++) {
    let selector = '[data-hash="' + dataHashesHotelDates[i] + '"]';
    let ancestor = document.querySelector(selector);
    let monthElem = getDateElementFromAncestor(ancestor, 0);
    let dayElem = getDateElementFromAncestor(ancestor, 2);
    let yearElem = getDateElementFromAncestor(ancestor, 4);

    const monthObserver = new MutationObserver(function (
      mutationsList,
      monthObserver
    ) {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "childList" &&
          mutation.target.nodeName === "DIV"
        ) {
          reformatHotelDateAndSetInvisibleField(mutation.target);
        }
      }
    });
    monthObserver.observe(monthElem, { childList: true });

    const dayObserver = new MutationObserver(function (
      mutationsList,
      dayObserver
    ) {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "childList" &&
          mutation.target.nodeName === "DIV"
        ) {
          reformatHotelDateAndSetInvisibleField(mutation.target);
        }
      }
    });
    dayObserver.observe(dayElem, { childList: true });

    const yearObserver = new MutationObserver(function (
      mutationsList,
      yearObserver
    ) {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "childList" &&
          mutation.target.nodeName === "DIV"
        ) {
          reformatHotelDateAndSetInvisibleField(mutation.target);
        }
      }
    });
    yearObserver.observe(yearElem, { childList: true });
  }
};

function getDateElementFromAncestor(ancestor, index) {
  return ancestor.children
    .item(0)
    .children.item(2)
    .children.item(0)
    .children.item(0)
    .children.item(index);
}
function reformatNameAndSetInvisibleField(element) {
  var formattedName = "";
  // we are first name
  if (element.parentElement.children.item(1) === element) {
    formattedName =
      element.parentElement.children.item(2).value + "," + element.value;
  } else {
    // we are last name
    formattedName =
      element.value + "," + element.parentElement.children.item(1).value;
  }
  //setting the invisible formatted name
  var inputBox =
    element.parentElement.parentElement.parentElement.nextElementSibling.children
      .item(0)
      .children.item(2)
      .children.item(0)
      .children.item(1);

  inputBox.value = formattedName;
}

function reformatFlightDateAndSetInvisibleField(element) {
  var day, month, year;
  month = element.parentElement.children.item(0).textContent;
  day = element.parentElement.children.item(2).textContent;
  year = element.parentElement.children.item(4).textContent;

  let formattedDate = getFormattedDate(month + "/" + day + "/" + year);

  //setting the invisible formatted flight date
  element.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children
    .item(0)
    .children.item(2)
    .children.item(0)
    .children.item(1).value = formattedDate;
}

function reformatHotelDateAndSetInvisibleField(element) {
  var checkinDay, checkinMonth, checkinYear;
  var checkoutDay, checkoutMonth, checkoutYear;

  var ancestor =
    element.parentElement.parentElement.parentElement.parentElement
      .parentElement;
  var checkinAncestor, checkoutAncestor;
  //this means it is checkout as the next element is text
  if (
    ancestor.nextElementSibling.children.item(0).getAttribute("data-type") ===
    "text"
  ) {
    checkoutAncestor = ancestor;
    checkinAncestor = ancestor.previousElementSibling;
  } else {
    checkinAncestor = ancestor;
    checkoutAncestor = ancestor.nextElementSibling;
  }

  checkinMonth = getDateElementFromAncestor(checkinAncestor, 0).textContent;
  checkinDay = getDateElementFromAncestor(checkinAncestor, 2).textContent;
  checkinYear = getDateElementFromAncestor(checkinAncestor, 4).textContent;

  checkoutMonth = getDateElementFromAncestor(checkoutAncestor, 0).textContent;
  checkoutDay = getDateElementFromAncestor(checkoutAncestor, 2).textContent;
  checkoutYear = getDateElementFromAncestor(checkoutAncestor, 4).textContent;

  let formatteCheckinDate = getFormattedDate(
    checkinMonth + "/" + checkinDay + "/" + checkinYear
  );

  let formatteCheckoutDate = getFormattedDate(
    checkoutMonth + "/" + checkoutDay + "/" + checkoutYear
  );

  //setting the invisible formatted flight date
  ancestor.nextElementSibling.children
    .item(0)
    .children.item(2)
    .children.item(0)
    .children.item(1).value =
    formatteCheckinDate + " - " + formatteCheckoutDate;
}

function getFormattedDate(value) {
  var dateObj = new Date(value);
  var returnVal = "";
  if (!isNaN(dateObj.getTime())) {
    var months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    returnVal =
      dateObj.getDate() +
      " " +
      months[dateObj.getMonth()] +
      " " +
      dateObj.getFullYear();
  }
  return returnVal;
}

function formatHotelDate(dateToConvert1, dateToConvert2) {
  var convertedDate1 = getFormattedDate(dateToConvert1);
  var convertedDate2 = getFormattedDate(dateToConvert2);

  if (convertedDate1 != "" && convertedDate2 != "") {
    return convertedDate1 + " - " + convertedDate2;
  } else {
    return "";
  }
}

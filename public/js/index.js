getCollections();

function getCollections() {
  console.log("getCollections");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var collectionsOnServer = JSON.parse(xhttp.responseText);
      var postmanCollections = document.getElementById('postmanCollections');

      for (var i in collectionsOnServer) {
        var value = collectionsOnServer[i];
        value = value.substring(0, value.indexOf('.postman'));
        postmanCollections.options[postmanCollections.options.length] = new Option(value, value);
      }
    }
  };
  xhttp.open("GET", "collection", true);
  xhttp.send();
}

function prepareTarget() {
  var selectedCollection = document.forms[0].postmanCollections.value;

  document.forms[0].action = "/collection/run?collection=" + selectedCollection;
}

function validateAndSubmit() {
  if (document.forms[0].postmanCollections.value === '') {
    alert("Please select a collection to run!");
    return false;
  } else {
    return true;
  }
}

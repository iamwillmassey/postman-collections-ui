getReports();

function getReports() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var reportsOnServer = JSON.parse(xhttp.responseText);

      var list = document.getElementById('reportList');

      if (reportsOnServer.length > 0) {
        for (var i in reportsOnServer) {
          var value = reportsOnServer[i];

          var link = document.createElement('a');
          link.setAttribute('href', 'newman/' + value);
          link.setAttribute('target', '_blank');
          link.setAttribute('class', 'length-style-1');
          link.innerHTML = value;

          var listEntry = document.createElement('li');
          listEntry.appendChild(link);
          list.appendChild(listEntry);
        }
      } else {
        var errorNode = document.getElementById('error');
        errorNode.innerHTML = "There aren't any reports on the server.  If this is the first time it's been run, please refresh in a few minutes to see the report.";
      }
    }
  };
  xhttp.open("GET", "collection/reports", true);
  xhttp.send();
}

function reloadPage() {
  location.reload();
}

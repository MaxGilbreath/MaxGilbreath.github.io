$(document).ready(function() {
    $('name').click(function() {
      $.ajax({
        dataType: "jsonp",
        jsonpCallback: "processJSONPResponse",
        url: "https://api.agify.io?name="+ name,
        success: function(results) {
          $('.test').text(results["age"]);
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });
    $.ajax({
      dataType: "json",
      url: "https://random-d.uk/api",
      success: function(results) {
        console.log(results["url"]);
        if (results["url"].endsWith(".jpg")) {
          $('#duck').attr("src", "images/blank.jpg");
        } else {
          $('#duck').attr("src", results["url"]);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
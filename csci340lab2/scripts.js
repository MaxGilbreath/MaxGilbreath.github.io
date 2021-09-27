$(document).ready(function() {
    $('#name').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://api.agify.io?name="+ $('#username').val(),
        success: function(results) {
          console.log(results);
          $('.test').text(results["age"]);
          console.log($('#username').val());
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });
    $.ajax({
      dataType: "json",
      url: "https://forza-api.tk/",
      success: function(results) {
        console.log(results["image"]);

          $('#duck').attr("src", results["image"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
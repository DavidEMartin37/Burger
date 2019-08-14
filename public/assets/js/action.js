console.log("Loaded");
$(document).on("click",".devour",function() {
  
  var buttonId = $(this).val();
  console.log(buttonId);
  var url = "/api/burgers/" + buttonId;
  var devoured = {
    devoured: true
  }
  $.ajax({
    url: url,
    method: "PUT",
    data: devoured
  }).then(function() {
    console.log("Finish");
    location.reload()
  });
})
$("#submit").click(function(event) {
  event.preventDefault();
  var url = "/api/burgers/";
  var newBurger = {
    burger_name: $("#burger").val().trim(),
    devoured: 0
  };
  $.ajax({
    url: url,
    method: "POST",
    data: newBurger
  }).then(function() {
    console.log("Finish- burger");
    location.reload()
  });
})
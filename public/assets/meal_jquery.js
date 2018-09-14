// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-worth").on("click", function(event) {
      var id = $(this).data("id");
      var newWorth = $(this).data("newWorth");
  
      var newWorthState = {
        worth_it: newWorth
      };
  
      // Send the PUT request.
      $.ajax("/api/meals/" + id, {
        type: "PUT",
        data: newWorthState
      }).then(
        function() {
          console.log("changed sleep to", newWorth);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#create-meal").on("submit", function(event) {
      // preventDefault on a submit event
      event.preventDefault();
  
      var newMeal = {
        name: $("#name").val().trim(),
        restaurant: $("#restaurant").val().trim(),
        rating: $("#rating").val().trim(),
        worth_it: $("[name=worthit]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/cats", {
        type: "POST",
        data: newMeal
      }).then(
        function() {
          console.log("created new meal");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-meal").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/meals/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted meal", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  
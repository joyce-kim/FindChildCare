  var todos = [];

  $(document).on("click", "#zipcode-form", getTodos);

  function getTodos() {
    $.get("/api/todos", function(data) {
      todos = data;
      console.log(data);
    });
  }

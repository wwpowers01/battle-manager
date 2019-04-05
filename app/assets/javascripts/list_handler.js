// Handles the list of combatants to be sortable and selectable
// Also handles change in position to controller
$("#combatants-list").sortable({ 
  handle: ".handle",
  stop: function(e) {
    url = $("#combatants-list").data("link");
    var data = new Object();
    data.combatants = [];

    $("#combatants-list").find("li").each(function() {
      var combatant = {};
      combatant.id = $(this).data("combatant-id");
      combatant.position = $(this).index();
      data.combatants.push(combatant);
    });

    $.ajax({
      method: "PUT",
      url: url,
      data: data,
      dataType: "JSON"
    });
  }
}).selectable({ 
  handle: ".combatants-list-item", 
  cancel: ".handle" 
}).find("li").bind("mousedown", function(e) {
  e.metaKey = true;
});
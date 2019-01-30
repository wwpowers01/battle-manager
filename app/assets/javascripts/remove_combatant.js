$(document).on("turbolinks:load", function() {
  $("#removeCombatant").click(function( event ) {
    event.preventDefault(); //unsure if this is needed.
    url = $("#removeCombatant").data("link");
    var data = new Object();
    data.combatants = [];           

    $('.ui-selected').each(function() { //may need to limit this further other than ui-selected
      data.combatants.push($(this).data("combatant-id"));
    });

    $.ajax({
      method: "POST",
      url: url,
      data: data,
      dataType: "JSON",
      success: function() {
        window.location.reload();
      }
    });
  }); 
});
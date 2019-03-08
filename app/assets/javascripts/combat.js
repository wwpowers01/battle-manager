/*
 * Remove Combatant Bind
 */
$(document).on("turbolinks:load", function() {
  $("#removeCombatant").click(function( event ) {
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
        location.reload();
      },
      fail: function() {
        location.reload();
      }
    });
  }); 
});

/*
 * JQuery Selectable and Sortable
 */
$(document).on("turolinks:load", function() {
  $( "#combatants-list" ).sortable({ 
    handle: ".handle",
    stop: function(e, ui) {
      url = $("#combatants-list").data("link");
      var data = new Object();
      data.combatants = [];

      $("#combatants-list").find("li").each(function() {
        combatant = {};
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
  }).selectable( { 
    handle: ".combatants-list-item", 
    cancel: ".handle,.non-selectable" 
  }).find( "li" ).bind( "mousedown", function( e ) {
      e.metaKey = true;
  });
});

/*
 * JS Split for split screen
 */
Split(['#one', '#two'], {
  elementStyle: (dimension, size, gutterSize) => ({
      'flex-basis': `calc(${size}% - ${gutterSize}px)`,
  }),
  gutterStyle: (dimension, gutterSize) => ({
      'flex-basis':  `${gutterSize}px`,
  }),
});
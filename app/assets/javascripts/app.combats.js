App.Combats = class {
  listHandler() {
    $("#combatants-list").sortable({ 
      handle: ".handle",
      stop: function(e) {
        var url = Routes.combat_path($('.combats').attr('id'));
        var data = new Object();
        data.combatants = [];
    
        $("#combatants-list").find("li").each(function() {
          var combatant = {};
          combatant.id = $(this).data("combatant-id");
          combatant.position = $(this).index();
          data.combatants.push(combatant);
        });
        
        jsLogger.debug("Sending sorted list. URL: " + url + " | Data: " + data);
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
  }
  removeCombatant() {
    var url = $("#removeCombatant").data("link");
    var data = new Object();
    data.combatants = [];

    $('.ui-selected').each(function() { //may need to limit this further other than ui-selected
      data.combatants.push($(this).data("combatant-id"));
    });

    if (data.combatants.length > 0) {
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
    }
  }
  split() {
    Split(['#one', '#two'], {
      elementStyle: (dimension, size, gutterSize) => ({
          'flex-basis': `calc(${size}% - ${gutterSize}px)`,
      }),
      gutterStyle: (dimension, gutterSize) => ({
          'flex-basis':  `${gutterSize}px`,
      }),
    });
  }

}

$(document).on("turbolinks:load", () => {
  if (!($(".combats").length > 0)) { return; } // page specific js
  var combats = new App.Combats();
  $("#removeCombatant").click(() => {
    combats.removeCombatant();
  });
  combats.listHandler();
  combats.split();
});
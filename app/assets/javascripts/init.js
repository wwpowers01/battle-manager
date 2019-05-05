if (!window.App) { window.App = {}; }

window.onerror = function (message, url, line_number) {
  jsLogger.fatal("Uncaught error in: " + url + ":" + line_number + "\nDetails: " + message);
};

App.init = function init() {
  $("a, span, i, div").tooltip(); // used for Bootstrap. I don't think it's really needed.
  jQuery(".best_in_place").best_in_place();
}

$(document).on("turbolinks:load", () => App.init());
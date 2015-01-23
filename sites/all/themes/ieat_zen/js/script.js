/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

	  var showMenu = $("div#show-menu", context);
	  var menu = $("#page ul.nice-menu", context);

	  function switchMenu() {
	  	if(menu.css("position") == "fixed") {
	  		showMenu.css("display", "block");
	    	menu.hide();
	  		$("#block-search-form input[type=text]").attr("placeholder", " Search a recipe...").attr("data-position", "top");
	  		menu.attr("data-position", "top");
	  	} else {
	  		showMenu.hide();
	    	menu.show();
	  	}
	  }

	  switchMenu();
	  $(window).resize(function() {
	  	switchMenu();
	  });
  	
		showMenu.bind("click", function(event) {
		    event.preventDefault();
		    menu.toggle("middle");
		});
  }
};


})(jQuery, Drupal, this, this.document);

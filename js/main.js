/**
  * scrollpos plugin : repositioning that pesky floating scrollbar
  */


define([
           'dojo/_base/declare',
           'JBrowse/Plugin'
       ],
       function(
           declare,
           JBrowsePlugin
       ) {
return declare( JBrowsePlugin,
{
    constructor: function( args ) {
        var browser = args.browser;
		var thisB = this;
        // Initialize plugin 
        console.log( "scrollpos plugin starting" );
		// After everything is initialized, append the scrollbar from current 
		// position after container to a child of the genomebrowser proper
		thisB.browser.afterMilestone('completely initialized', function(){ 
			var viewContainer = document.getElementById("dijit_layout_ContentPane_0");
			var viewScroll = document.getElementsByClassName("vertical_scrollbar");

			viewContainer.parentNode.insertBefore(viewScroll[0],viewContainer);	
			// set position, or all is for naught
			viewScroll[0].style.position = "absolute";
		});
		console.log("scrollpos plugin added");
	}

});
});

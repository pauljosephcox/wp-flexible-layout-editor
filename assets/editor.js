
jQuery(document).ready(function($) {


	var Editor = {

		init: function(){

			// Enable Editing
			$('[data-editable]').attr('contenteditable',true);

		},



	};

	// Let's Go
	window.Editor = Editor;
	Editor.init();

});
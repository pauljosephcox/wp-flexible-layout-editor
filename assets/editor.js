// ------------------------------------
// Vue
// ------------------------------------
new Vue({
	el: "#editor",
	mounted: function(){
		// alert("mounted");
	},
	data() {
		return {
			state: "normal",
			title: "My Editor Title",
			currentEditValue: null,
			currentTarget: null,
			edit: {

				buttonTitle: 'Edit',

			}
		}
	},
	methods: {

		editTextValue: function(event){
			this.enableEditing();
			this.currentEditValue = event.target.innerText
			this.currentTarget = event.target;
		},

		// Toggle Edit More
		toggleEditMode: function(e){

			if(this.edit.buttonTitle == 'Edit')
				this.enableEditing();
			else
				this.disableEditing();
			
		},

		// Enabled Editing
		enableEditing: function(){

			this.edit.buttonTitle = 'Save';
			this.state = 'editor';
			this.$refs.editorTextInput.focus();
			jQuery('[data-editable]').attr('contenteditable',true);

		},

		// Disable Editing
		disableEditing: function(){

			this.edit.buttonTitle = 'Edit';
			this.state = 'normal';
			this.save();
			jQuery('[data-editable]').attr('contenteditable',false);

		},

		save: function(){

			this.currentTarget.innerText = this.currentEditValue;

		}



	}
});



// ------------------------------------
// Bad jQuery
// ------------------------------------
// jQuery(document).ready(function($) {


// 	var Editor = {

// 		/**
// 		 * Initialize Editor
// 		 */

// 		init: function(){

// 			// Enable Editing
// 			$('[data-editable]').attr('contenteditable',true);

// 			// Add Save button
// 			this.setupView();

// 		},

// 		setupView: function(){

// 			// Add Save Button


// 		}




// 	};

// 	// Let's Go
// 	window.Editor = Editor;
// 	Editor.init();

// });
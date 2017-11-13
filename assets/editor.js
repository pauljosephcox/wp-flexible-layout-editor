// ------------------------------------
// Vue
// ------------------------------------
new Vue({
	el: "#editor",
	mounted: function(){
		
	},
	data() {
		return {
			state: "normal",
			title: "My Editor Title",
			currentEditValue: null,
			currentTarget: null,
			acf: {},
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

		editorTextKeyUp: function(e){

			this.currentTarget.innerText = this.currentEditValue;

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

			this.edit.buttonTitle = 'Preview';
			this.state = 'editor';
			this.$refs.editorTextInput.focus();

			// jQuery('[data-editable]').attr('contenteditable',true);

		},

		// Disable Editing
		disableEditing: function(){

			this.edit.buttonTitle = 'Edit';
			this.state = 'normal';
			this.save();
			// jQuery('[data-editable]').attr('contenteditable',false);

		},

		save: function(){
			// console.log("SAVE");
			// console.log(this.acf);
			// console.log(this.currentTarget.getAttribute('data-editable'));
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
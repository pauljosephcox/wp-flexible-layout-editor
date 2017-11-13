// ------------------------------------
// Vue
// ------------------------------------
var APP = new Vue({
	el: "#editor",
	mounted: function(){
		this.postid = this.$refs.postid.value;
	},
	data() {
		return {
			state: "normal",
			title: "My Editor Title",
			currentEditValue: null,
			currentTarget: null,
			postid: null,
			acf: {},
			saveButtonTitle: "Save",
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
			this.preview();
			// jQuery('[data-editable]').attr('contenteditable',false);

		},

		preview: function(){
			this.currentTarget.innerText = this.currentEditValue;
			this.acf[this.currentTarget.getAttribute('data-editable')] = this.currentEditValue;
		},

		save: function(){

			// TODO: Send to Wordpress API
			console.log(this.postid);
			console.log(this.acf);

			var d = {
				postid: this.postid,
				acf: this.acf
			}

			this.saveButtonTitle = "Processing...";

			jQuery.ajax({
                url:  '/api/editor/save',
                method: 'POST',
                data: d,
                success: function (data) {
                    console.log("Data");
                    console.log(data);
                    APP.saveButtonTitle = "Save";
                   
                },
                error: function (error) {
                    console.log(error)
                }
            });


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
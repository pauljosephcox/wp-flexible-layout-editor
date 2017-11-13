<div id="flexibleEditor" class="wp-flexible-layout-editor" v-bind:class="state">

	<h1>{{ title }}</h1>

	<div class="editmode">

		<button v-on:click="toggleEditMode">{{edit.buttonTitle}}</button>

	</div>


	<div class="panel">

		<h6>Text Edit</h6>
		<textarea ref="editorTextInput" v-model="currentEditValue">{{currentEditValue}}</textarea>

	</div>

</div>
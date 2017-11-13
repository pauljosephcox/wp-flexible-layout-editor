<?php global $post; ?>
<div id="flexibleEditor" class="wp-flexible-layout-editor" v-bind:class="state">

	<h1>{{ title }}</h1>

	<div class="editmode">

		<button class="preview" v-on:click="toggleEditMode">{{edit.buttonTitle}}</button>
		<button class="primary save" v-on:click="save">{{saveButtonTitle}}</button>

	</div>


	<div class="panel">

		<h6>Text Edit</h6>
		<textarea ref="editorTextInput" v-on:keyup="editorTextKeyUp" v-model="currentEditValue">{{currentEditValue}}</textarea>

	</div>

	<input type="hidden" ref="postid" name="postid" value="<?php echo $post->ID; ?>">

</div>
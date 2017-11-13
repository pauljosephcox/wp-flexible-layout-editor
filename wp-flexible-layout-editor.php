<?php

/**
 *
 * @wordpress-plugin
 * Plugin Name: Flexible Layout Editor
 * Description: A Frontend Editor for Wordpress and ACF Flexible Layout
 * Author: Paul Joseph Cox
 * Version: 1.0
 * Author URI: http://pauljosephcox.com/
 */



if (!defined('ABSPATH')) exit;

/**
 * Main WP_Flexible_Layout_Editor Class
 *
 * @class Split_Screen
 * @version 0.1
 */
class WP_Flexible_Layout_Editor {

	public $errors = false;
	public $notices = false;
	public $slug = 'wp-flexible-layout-editor';

	function __construct() {

		$this->path = plugin_dir_path(__FILE__);
		$this->folder = basename($this->path);
		$this->dir = plugin_dir_url(__FILE__);
		$this->version = '1.0.0';

		$this->errors = false;
		$this->notice = false;

		// Actions
		add_action('wp_enqueue_scripts', array($this, 'scripts'),11,1);
		add_action('parse_request', array($this , 'router'));
		add_action('wp_footer', array($this,'render'));

	}

	public function is_admin(){

		if( !current_user_can('editor') && !current_user_can('administrator') ) return false;
		return true;

	}

	/**
	 * Include Styles and Functionality
	 * @return null
	 */

	public function scripts() {

		// Guard administrators
		if( !$this->is_admin() ) return;
		
		// Include Dependencies
		wp_enqueue_script('vue', '//cdnjs.cloudflare.com/ajax/libs/vue/2.1.6/vue.min.js',null,$this->version,true);
		wp_enqueue_style('wp_flexible_layout_editor', $this->dir .'assets/editor.css',null,$this->version);
		wp_enqueue_script('wp_flexible_layout_editor', $this->dir.'assets/editor.js', null, $this->version,true);

	}

	/**
	 * Router
	 * @param OBJ $wp 
	 * @return null
	 */

	public function router($wp) {

		$pagename = (isset($wp->query_vars['pagename'])) ? $wp->query_vars['pagename'] : $wp->request;

		switch ($pagename) {

			case 'api/editor/save':
				$this->save($_POST);
				break;

			default:
				break;

		}

	}

	public function render(){

		if( !$this->is_admin() ) return;

		include($this->path . 'templates/editor.php');

	}

	public function save($vars){

		if(!$this->is_admin()) return;

		foreach($vars['acf'] as $key=>$value){

			// TODO: Make work with rows
			if(!strstr($key, 'row')) update_post_meta($vars['postid'],$key,$value);

		}
		
		echo json_encode(array('success'=>true));
		die;


	}


}


// ------------------------------------
// Go
// ------------------------------------

$wp_flixible_layout_editor = new WP_Flexible_Layout_Editor();





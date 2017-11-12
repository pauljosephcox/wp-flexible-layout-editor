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
		// add_action('admin_menu', array($this, 'register_options_page'));
		// add_action('admin_enqueue_scripts', array($this, 'scripts'));

	}



	/**
	 * Include Styles and Functionality
	 * @return null
	 */

	public function scripts() {
		
		// wp_enqueue_script('modernizr', 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js',null,$this->version);
		// wp_enqueue_style('wp_split_screen', $this->dir .'assets/split-screen.css',null,$this->version);
		// wp_enqueue_script('wp_split_screen', $this->dir.'assets/split-screen.js', null, $this->version);

	}


}


// ------------------------------------
// Go
// ------------------------------------

$wp_flixible_layout_editor = new WP_Flexible_Layout_Editor();





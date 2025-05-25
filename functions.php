<?php

define("THEME_DIR", get_template_directory_uri());

function killerpixeltheme_enqueue_assets() {
    wp_register_style( 'style', THEME_DIR.'/dist/css/bundle.css', array(), '1', 'all' );
    wp_enqueue_style( 'style' );

    wp_register_script('bundle', THEME_DIR.'/dist/js/bundle.js', array(), '1', true );
	wp_enqueue_script( 'bundle' );
}
add_action( 'wp_enqueue_scripts', 'killerpixeltheme_enqueue_assets' );
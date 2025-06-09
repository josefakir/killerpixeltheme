<?php

define("THEME_DIR", get_template_directory_uri());
add_theme_support( 'post-thumbnails' );
function killerpixeltheme_enqueue_assets() {
    wp_register_style( 'global', THEME_DIR.'/dist/global.css', array(), '1', 'all' );
    wp_enqueue_style( 'global' );

    wp_register_style( 'header', THEME_DIR.'/dist/header.css', array(), '1', 'all' );
    wp_enqueue_style( 'header' );

    wp_register_style( 'footer', THEME_DIR.'/dist/footer.css', array(), '1', 'all' );
    wp_enqueue_style( 'footer' );

    wp_register_script('header', THEME_DIR.'/dist/header.js', array(), '1', true );
	wp_enqueue_script( 'header' );
}
add_action( 'wp_enqueue_scripts', 'killerpixeltheme_enqueue_assets' );


function theme_setup() {
  add_theme_support( 'custom-logo', array(
    'height'      => 100,   // altura máxima en px
    'width'       => 300,   // anchura máxima en px
    'flex-height' => true,  // permitir altura flexible
    'flex-width'  => true,  // permitir anchura flexible
    'header-text' => array( 'site-title', 'site-description' ), // texto que se muestra si no hay logo
  ) );

  register_nav_menus( array(
    'primary' => __( 'Menú Principal', 'killerpixeltheme' ),
  ) );

}
add_action( 'after_setup_theme', 'theme_setup' );
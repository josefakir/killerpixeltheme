<?php
add_theme_support( 'editor-styles' );

function killerpixeltheme_register_blocks() {
    // Busca cada block.json en /blocks/*
    foreach ( glob( get_template_directory() . '/blocks/*/block.json' ) as $block ) {
        register_block_type( dirname( $block ) );
    }
}
add_action( 'init', 'killerpixeltheme_register_blocks' );
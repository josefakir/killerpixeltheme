<?php
// Nombre del sitio
echo get_bloginfo( 'name' );

// Separador
echo ' | ';

// Título según el tipo de página:
if ( is_singular() ) {
    // Entrada o página individual
    single_post_title();
} elseif ( is_home() || is_front_page() ) {
    // Página de blog o homepage
    echo get_bloginfo( 'description' );
} elseif ( is_category() ) {
    // Archivo de categoría
    single_cat_title( 'Categoría: ' );
} elseif ( is_tag() ) {
    single_tag_title( 'Etiqueta: ' );
} elseif ( is_search() ) {
    printf( 'Resultados de búsqueda para: %s', get_search_query() );
} else {
    // Otras páginas de archivo (autor, fecha, etc.)
    wp_title( '' );
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title><?php get_template_part('title') ?></title>
  <?php wp_head(); ?>
</head>

<body data-theme="light">   
  <header class="header">
    <div class="header__wrapper">
      <a href="#" class="header__hamburguer" id="menuOpen"><i class="material-icons">notes</i></a>
      <div class="header__logo">

        <?php 
        if ( function_exists( 'the_custom_logo' ) && has_custom_logo() ) {
            the_custom_logo();
        } else {
            ?>
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php bloginfo( 'name' ); ?>">
            </a>
        <?php } ?>
        </div>
    </div>
    <nav class="header__menu">
        <?php 
            $menu_args = array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'menu',
                'depth'          => 2,
                'fallback_cb'    => false,
            );
            wp_nav_menu( $menu_args );
        ?>
    </nav>
    <div class="header__icons">
      <ul>
        <!--<li><a href=""><i class="material-icons">search</i></a></li>-->
        <li><a href="#" id="toggleTheme"><i class="material-icons">dark_mode</i></a></li>
        <!--<li><a href=""><i class="material-icons">account_circle</i></a></li>-->
      </ul>
    </div>
    <!--<div class="header__categories">
      <ul>
        <li><a href="">Cat 1</a></li>
        <li class="separator"></li>
        <li><a href="">Cat 1</a></li>
        <li class="separator"></li>
        <li><a href="">Cat 1</a></li>
        <li class="separator"></li>
        <li><a href="">Cat 1</a></li>
        <li class="separator"></li>
        <li><a href="">Cat 1</a></li>
      </ul>
    </div>-->
    <div class="header__mobile">
      <!--<img src="/img/logo.png" alt="">-->

      <?php 
        $menu_args = array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'mobile-menu',
                'depth'          => 2,
                'fallback_cb'    => false,
            );
            wp_nav_menu( $menu_args );
      ?>
    </div>
  </header>
  
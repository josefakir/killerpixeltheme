<?php get_header(); ?>
  <main>
    <?php 
    if ( have_posts() ) {
        while ( have_posts() ) {
            the_post(); 
            the_post_thumbnail('full', ['class' => 'post-thumbnail']);
            ?>
            <div class="container">
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <h1 class="post-title"><?php the_title(); ?></h1>
                    <div class="post-content">
                        <?php the_content(); ?>
                    </div>
                </article>
            </div>
            
            <?php
        }
    }
    ?>
  </main>
<?php get_footer(); ?>

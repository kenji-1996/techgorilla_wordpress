<?php
get_header();
$sidebar = get_post_meta( get_the_ID(), '_techgorilla_sidebar', TRUE );
$layout = get_post_meta( get_the_ID(), '_techgorilla_layout', TRUE );
remove_filter( 'the_content', 'wpautop' );
remove_filter( 'the_excerpt', 'wpautop' );
?>
<style>
    header.masthead {
        background:linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("<?php echo get_option('frontimage');  ?>");

    }
</style>
    <header class="masthead text-center text-white d-flex">
        <div class="container my-auto">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h1 class="text-uppercase">
                        <strong><?php echo get_option('fronttitle'); ?></strong>
                    </h1>
                    <hr>
                </div>
                <div class="col-lg-8 mx-auto">
                    <p class="text-faded mb-5"><?php echo get_option('frontdesc'); ?></p>
                    <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                </div>
            </div>
        </div>
    </header>

<?php dynamic_sidebar( 'sidebar-2' ); ?>
<?php
    if ( have_posts() ) : while ( have_posts() ) : the_post();

        get_template_part( 'content-single', get_post_format() );

    endwhile; endif;
?>



<?php get_footer(); ?>
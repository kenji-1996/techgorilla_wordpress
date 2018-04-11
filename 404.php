<?php
get_header();
?>

    <div class="container" id="primary" style="padding-top: 20px;">
        <main id="main" role="main">
            <div class="jumbotron">
                <h1><?php _e( 'Oops! That page can&rsquo;t be found.', 'techgorilla' ); ?></h1>
                <p>
                <p><?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'twentyseventeen' ); ?></p>

                <?php
                add_filter( 'get_search_form', 'custom_search_form' );
                get_search_form();
                remove_filter( 'get_search_form', 'custom_search_form' );
                ?>
                </p>
            </div>
        </main>
    </div>


<?php get_footer(); ?>
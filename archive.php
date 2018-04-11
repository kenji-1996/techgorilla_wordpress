<?php get_header(); ?>

archieves
<div class="container">
    <div id="content" role="main">
        <div class="row">

            <div class="col-sm-8">
                <?php the_post(); ?>
                <h1 class="entry-title"><?php the_title(); ?></h1>

                <?php get_search_form(); ?>

                <h2>Archives by Month:</h2>
                <ul>
                    <?php wp_get_archives('type=monthly'); ?>
                </ul>

                <h2>Archives by Subject:</h2>
                <ul>
                    <?php wp_list_categories(); ?>
                </ul>





            </div>

            <?php get_sidebar(); ?>

        </div>
    </div>
</div>



<?php get_footer(); ?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <?php wp_head();?>

    <?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), 'full' ); ?>
    <style>
        header.contenthead {
            background:linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("<?php if(has_post_thumbnail()) { echo $backgroundImg[0]; }else{ echo get_option('siteimage');  } ?>");
            padding-top: 10rem;
            background-position: center center;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
        header.contenthead {
             <?php
            if(have_posts() && is_archive() )
            {
                echo 'padding-bottom: calc(10rem - 56px);';
                echo 'height: 30vh;';
                echo 'min-height: 300px;';
            }else if(is_search()){
                echo 'padding-bottom: calc(10rem - 56px)';
                echo 'height: 30vh;';
                echo 'min-height: 300px;';
            }else{
                echo 'padding-bottom: calc(1rem - 56px)';
                echo 'height: 5vh;';
                echo 'min-height: 5px;';
            } ?>;
        }
    </style>

</head>

<body id="page-top" style="background-color: rgba(10,10,10,1);">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
            <div class='navbar-main-name'>
                <div class='site-title'>
                    <a class="navbar-brand js-scroll-trigger" href="<?php echo get_bloginfo( 'wpurl' );?>"><?php echo get_bloginfo( 'name' ); ?></a>
                </div>
                <div class='site-description'>
                    <p><?php echo get_bloginfo( 'description' ); ?></p>
                </div>
            </div>

            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <?php
                wp_nav_menu( array(
                    'theme_location'    => 'my-custom-menu',
                    'depth'             => 2,
                    'container'         => false,
                    'container_class'   => 'collapse navbar-collapse',
                    'container_id'      => 'bs-example-navbar-collapse-1',
                    'menu_class'        => 'ml-auto navbar-nav',
                    'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
                    'walker'            => new WP_Bootstrap_Navwalker()
                ) );
                ?>
            </div>
        </div>
    </nav>

    <div id="wrap">
        <?php if(!is_front_page()) { ?>
        <header class="contenthead text-center text-white d-flex">
            <div class="container my-auto" style="">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <?php if ( have_posts() && is_archive()) { ?>
                            <h1 class="text-uppercase">
                                <strong>
                                 <?php the_archive_title( ); ?>
                                </strong>
                            </h1>
                            <hr>
                        <?php } else if(is_search()) { ?>
                            <h1 class="text-uppercase">
                                <?php if(have_posts()) { ?>
                                    <strong>Results:
                                        <?php the_search_query(); ?>
                                    </strong>
                                <?php }else{ ?>
                                    <strong>
                                        <?php _e( 'Nothing Found', 'techgorilla' ); ?>
                                    </strong>
                                <?php } ?>
                            </h1>
                            <hr>
                        <?php }else if (! empty( $post->post_title )) { ?>
                            <h1 class="text-uppercase">
                                <strong><?php the_title(); ?></strong>
                            </h1>
                            <hr>
                        <?php } ?>
                    </div>
                    <!--<div class="col-lg-8 mx-auto">
                        <p class="text-faded mb-5"><?php the_date(); ?> by <a href="#"><?php the_author(); ?></p>
                    </div>-->
                </div>
            </div>
        </header>
        <?php } ?>


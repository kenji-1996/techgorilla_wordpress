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
            padding-bottom: calc(10rem - 56px);
            background-position: center center;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
    </style>

</head>

<body id="page-top">
<!-- Navigation -->
<?php //echo get_bloginfo( 'description' ); ?>
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

        <!--<div><p><br/><?php echo get_bloginfo( 'description' ); ?></div>-->
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
            <!--<ul class="navbar-nav ml-auto">

                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#services">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
                </li>
            </ul>-->
        </div>
    </div>
</nav>

<div>
    <header class="contenthead text-center text-white d-flex">
        <div class="container my-auto" style="">
			<div class="row">
			  <div class="col-lg-10 mx-auto">
				<h1 class="text-uppercase">
				  <strong><?php
                      if(is_front_page()) {
				        echo get_bloginfo( 'name' );
                      }else{
				        echo the_title();
                      }
				  ?></strong>
				</h1>
				<hr>
			  </div>
                <!--<div class="col-lg-8 mx-auto">
				    <p class="text-faded mb-5"><?php the_date(); ?> by <a href="#"><?php the_author(); ?></p>
			    </div>-->
			</div>
		  </div>
    </header>
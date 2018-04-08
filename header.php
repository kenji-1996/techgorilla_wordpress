<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><?php echo get_bloginfo( 'name' ); ?></title>

    <!-- Bootstrap core CSS -->
    <link href="<?php echo get_bloginfo('template_directory'); ?>/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="<?php echo get_bloginfo('template_directory'); ?>/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700' rel='stylesheet' type='text/css'>

    <!-- Plugin CSS -->
    <link href="<?php echo get_bloginfo('template_directory'); ?>/vendor/magnific-popup/magnific-popup.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="<?php echo get_bloginfo('template_directory'); ?>/css/creative.min.css" rel="stylesheet">
	<?php wp_head();?>
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
          <ul class="navbar-nav ml-auto">
		  <?php //wp_list_pages( '&title_li=' ); ?>
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
          </ul>
        </div>
      </div>
    </nav>
	
	<header class="contenthead text-center text-white d-flex">
		<!--<div class="container my-auto">
			<div class="row">
			  <div class="col-lg-10 mx-auto">
				<h1 class="text-uppercase">
				  <strong><?php echo get_bloginfo( 'name' ); ?></strong>
				</h1>
				<hr>
			  </div>
			  <div class="col-lg-8 mx-auto">
				<p class="text-faded mb-5"><?php echo get_bloginfo( 'description' ); ?></p>
			  </div>
			</div>
		  </div>-->
    </header>
	
	
	<div class="container">
	
	
	
	
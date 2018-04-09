<?php

//Include styles
function techgorilla_includes() {
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/vendor/bootstrap/css/bootstrap.min.css' );
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/vendor/bootstrap/js/bootstrap.min.js', array( 'jquery' ), '3.3.6', true  );
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/vendor/font-awesome/css/font-awesome.min.css' );
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/vendor/magnific-popup/magnific-popup.css' );
	wp_enqueue_style( 'creative', get_template_directory_uri() . '/css/creative.min.css' );
}
add_action( 'wp_enqueue_scripts', 'techgorilla_includes' );

// Add Google Fonts
function techgorilla_google_fonts() {
	wp_register_style('OpenSans', 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800');
	wp_enqueue_style( 'OpenSans');
	wp_register_style('Roboto', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700');
	wp_enqueue_style( 'Roboto');
}

add_action('wp_print_styles', 'techgorilla_google_fonts');
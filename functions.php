<?php
//Imports
require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';

/**
 * Style and script setup
 */
//Include styles
function techgorilla_styles() {
    wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/vendor/bootstrap/css/bootstrap.min.css' );
    wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/vendor/font-awesome/css/font-awesome.min.css' );
    wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/vendor/magnific-popup/magnific-popup.css' );
    wp_enqueue_style( 'creative', get_template_directory_uri() . '/css/creative.min.css' );
}
add_action( 'wp_enqueue_scripts', 'techgorilla_styles' );


//Include scripts
function techgorilla_scripts() {
    wp_enqueue_script( 'jquery', get_template_directory_uri() . '/vendor/jquery/jquery.min.js' );
    wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/vendor/bootstrap/js/bootstrap.min.js', array( 'jquery','scrollreveal' ), '3.3.6', true );
    wp_enqueue_script( 'jquery-easing', get_template_directory_uri() . '/vendor/jquery-easing/jquery.easing.min.js' );
    wp_enqueue_script( 'scrollreveal', get_template_directory_uri() . '/vendor/scrollreveal/scrollreveal.min.js' );
    wp_enqueue_script( 'jquery-magnific-popup', get_template_directory_uri() . '/vendor/magnific-popup/jquery.magnific-popup.min.js' );
    wp_enqueue_script( 'creative', get_template_directory_uri() . '/js/creative.min.js', array( 'jquery' ), '3.3.6', true);
}
add_action( 'wp_enqueue_scripts', 'techgorilla_scripts' );

// Add Google Fonts
function techgorilla_google_fonts() {
    wp_register_style('OpenSans', 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800');
    wp_enqueue_style( 'OpenSans');
    wp_register_style('Roboto', 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700');
    wp_enqueue_style( 'Roboto');
}
add_action('wp_print_styles', 'techgorilla_google_fonts');

/**
 * Theme support
 */
add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'customize-selective-refresh-widgets' );

/**
 * Custom admin theme functions
 */
// Custom settings
function custom_settings_add_menu() {
    add_menu_page( 'Custom Settings', 'Custom Settings', 'manage_options', 'custom-settings', 'custom_settings_page', null, 99 );
}
add_action( 'admin_menu', 'custom_settings_add_menu' );

//Actual display page for above settings
function custom_settings_page() { ?>
    <div class="wrap">
        <h1>Custom Settings</h1>
        <form method="post" action="options.php">
            <?php
            settings_fields( 'section' );
            do_settings_sections( 'theme-options' );
            submit_button();
            ?>
        </form>
    </div>
<?php }

//Twitter
function setting_twitter() { ?>
    <input type="text" name="twitter" id="twitter" value="<?php echo get_option( 'twitter' ); ?>" />
<?php }

//Twitter
function setting_siteimage() { ?>
    <input type="text" name="siteimage" id="siteimage" value="<?php echo get_option( 'siteimage' ); ?>" />
<?php }

//Github
function setting_github() { ?>
    <input type="text" name="github" id="github" value="<?php echo get_option('github'); ?>" />
<?php }

//Building the sections
function custom_settings_page_setup() {
    add_settings_section( 'section', 'All Settings', null, 'theme-options' );

    add_settings_field( 'twitter', 'Twitter URL', 'setting_twitter', 'theme-options', 'section' );
    add_settings_field( 'siteimage', 'Default featured site image', 'setting_siteimage', 'theme-options', 'section' );
    add_settings_field( 'github', 'GitHub URL', 'setting_github', 'theme-options', 'section' );

    register_setting( 'section', 'twitter' );
    register_setting( 'section', 'siteimage' );
    register_setting( 'section', 'github' );
}
add_action( 'admin_init', 'custom_settings_page_setup' );

/*
 * Custom post type

function create_post_your_post() {
register_post_type( 'your_post',
array(
'labels'       => array(
'name'       => __( 'Your Post' ),
),
'public'       => true,
'hierarchical' => true,
'has_archive'  => true,
'supports'     => array(
'title',
'editor',
'excerpt',
'thumbnail',
),
'taxonomies'   => array(
'post_tag',
'category',
)
)
);
register_taxonomy_for_object_type( 'category', 'your_post' );
register_taxonomy_for_object_type( 'post_tag', 'your_post' );
}
add_action( 'init', 'create_post_your_post' );
 */

/**
 * Metabox
 */
/* Fire our meta box setup function on the post editor screen. */
add_action( 'load-post.php', 'techgorilla_post_meta_boxes_setup' );
add_action( 'load-post-new.php', 'techgorilla_post_meta_boxes_setup' );

/* Meta box setup function. */
function techgorilla_post_meta_boxes_setup() {
    /* Add meta boxes on the 'add_meta_boxes' hook. */
    add_action( 'add_meta_boxes', 'techgorilla_add_post_meta_boxes' );

    /* Save post meta on the 'save_post' hook. */
    add_action( 'save_post', 'techgorilla_save_post_class_meta', 10, 2 );
}
function techgorilla_add_post_meta_boxes() {

    $screens = ['post','page'];
    foreach ($screens as $screen) {
        add_meta_box(
            'techgorilla-post-class',      // Unique ID
            esc_html__( 'Post Class', 'example' ),    // Title
            'contenthead_meta_box',   // Callback function
            $screen,         // Admin page (or post type)
            'side',         // Context
            'default'         // Priority
        );
    }
}
/* Display the post meta box. */
function contenthead_meta_box( $post ) { ?>

    <?php
    wp_nonce_field( basename( __FILE__ ), 'contenthead_nonce' );
    $techgorilla_sidebar = get_post_meta( $post->ID, '_techgorilla_sidebar', true );
    $techgorilla_post_border = get_post_meta( $post->ID, '_techgorilla_post_border', true );
    $techgorilla_layout = get_post_meta( $post->ID, '_techgorilla_layout', true );
    ?>

    <p>
        <label for="techgorilla-post-class"><?php _e( "Add a custom CSS class, which will be applied to WordPress' post class.", 'example' ); ?></label>
        <br />
        <input class="widefat" type="text" name="techgorilla-post-class" id="techgorilla-post-class" value="<?php echo esc_attr( get_post_meta( $post->ID, 'contenthead', true ) ); ?>" size="30" />
    </p>
    <p>
        <label for="techgorilla-post-class"><?php _e( "Sidebar", 'example' ); ?></label>
        <input class="widefat" type="checkbox" name="techgorilla-sidebar" value="<?php echo $techgorilla_sidebar ?>" <?php if($techgorilla_sidebar == 1) { echo 'checked'; } ?> size="30"/>
    </p>
    <p>
        <label for="techgorilla-post-class"><?php _e( "Post Border", 'example' ); ?></label>
        <input class="widefat" type="checkbox" name="techgorilla-post-border" value="<?php echo $techgorilla_post_border ?>" <?php if($techgorilla_post_border == 1) { echo 'checked'; } ?> size="30"/>
    </p>
    <p>
        <label for="techgorilla-post-class"><?php _e( "Layout", 'example' ); ?></label>
        <select name="techgorilla-layout" id="techgorilla-layout">
            <option value="fullwidth" <?php selected($techgorilla_layout, 'fullwidth'); ?>>Full Width</option>
            <option value="container" <?php selected($techgorilla_layout, 'container'); ?>>Container</option>
        </select>
    </p>
<?php }

/* Save the meta box's post metadata. */
function techgorilla_save_post_class_meta( $post_id, $post ) {

    /* Verify the nonce before proceeding. */
    if ( !isset( $_POST['contenthead_nonce'] ) || !wp_verify_nonce( $_POST['contenthead_nonce'], basename( __FILE__ ) ) )
        return $post_id;

    /* Get the post type object. */
    $post_type = get_post_type_object( $post->post_type );

    /* Check if the current user has permission to edit the post. */
    if ( !current_user_can( $post_type->cap->edit_post, $post_id ) )
        return $post_id;

    /* Get the posted data and sanitize it for use as an HTML class. */
    $new_meta_value = ( isset( $_POST['techgorilla-post-class'] ) ? sanitize_html_class( $_POST['techgorilla-post-class'] ) : '' );

    if ( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE )
        return $post_id;

    /* Get the meta key. */
    $meta_key = 'contenthead';

    /* Get the meta value of the custom field key. */
    $meta_value = get_post_meta( $post_id, $meta_key, true );

    /**
     * Saving custom values
     */

    $techgorilla_sidebar = isset($_POST['techgorilla-sidebar']) ? '1' : '0';
    update_post_meta($post_id, '_techgorilla_sidebar', $techgorilla_sidebar);

    $techgorilla_post_border = isset($_POST['techgorilla-post-border']) ? '1' : '0';
    update_post_meta($post_id, '_techgorilla_post_border', $techgorilla_post_border);

    $techgorilla_layout = $_POST['techgorilla-layout'];
    update_post_meta($post_id, '_techgorilla_layout', $techgorilla_layout);

    /* If a new meta value was added and there was no previous value, add it. */
    if ( $new_meta_value && '' == $meta_value )
        add_post_meta( $post_id, $meta_key, $new_meta_value, true );

    /* If the new meta value does not match the old value, update it. */
    elseif ( $new_meta_value && $new_meta_value != $meta_value )
        update_post_meta( $post_id, $meta_key, $new_meta_value );

    /* If there is no new meta value but an old value exists, delete it. */
    elseif ( '' == $new_meta_value && $meta_value )
        delete_post_meta( $post_id, $meta_key, $meta_value );
}

/* Filter the post class hook with our custom post class function. */
add_filter( 'post_class', 'contenthead' );

function contenthead( $classes ) {

    /* Get the current post ID. */
    $post_id = get_the_ID();

    /* If we have a post ID, proceed. */
    if ( !empty( $post_id ) ) {

        /* Get the custom post class. */
        $post_class = get_post_meta( $post_id, 'contenthead', true );

        /* If a post class was input, sanitize it and add it to the post class array. */
        if ( !empty( $post_class ) )
            $classes[] = sanitize_html_class( $post_class );
    }

    return $classes;
}

/**
 * Custom nav menu
 */
function wpb_custom_new_menu() {
    register_nav_menus(
        array(
            'my-custom-menu' => __( 'My Custom Menu' ),
            'extra-menu' => __( 'Extra Menu' )
        )
    );
}
add_action( 'init', 'wpb_custom_new_menu' );
add_filter( 'nav_menu_link_attributes', 'techgorilla_menu_add_class', 10, 3 );

function techgorilla_menu_add_class( $atts, $item, $args ) {
    $class = 'nav-link js-scroll-trigger'; // or something based on $item
    $atts['class'] = $class;
    return $atts;
}

function wpgood_nav_search( $items, $args ) {
    $items .= '<li>' . get_search_form( false ) . '</li>';
    return $items;
}
add_filter( 'wp_nav_menu_items','wpgood_nav_search', 10, 2 );
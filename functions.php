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
add_theme_support( 'menus' );
add_theme_support( 'widgets' );
add_theme_support( 'post-formats', array(
    'aside',
    'image',
    'video',
    'quote',
    'link',
    'gallery',
    'audio',
) );

/**
 * Woocommerce
 *
 */
add_theme_support( 'woocommerce' );
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action( 'woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
add_action('woocommerce_before_main_content', 'my_theme_wrapper_start', 10);
add_action('woocommerce_after_main_content', 'my_theme_wrapper_end', 10);
add_filter( 'woocommerce_enqueue_styles', '__return_false' );
function my_theme_wrapper_start() { echo '<section id="shop">'; }
function my_theme_wrapper_end() { echo '</section>'; }
function wp_enqueue_woocommerce_style(){
    wp_register_style( 'techgorilla-woocommerce', get_template_directory_uri() . '/css/woocommerce.css' );

    if ( class_exists( 'woocommerce' ) ) {
        wp_enqueue_style( 'techgorilla-woocommerce' );
    }
}
add_action( 'wp_enqueue_scripts', 'wp_enqueue_woocommerce_style' );
add_filter( 'woocommerce_checkout_fields', 'addBootstrapToCheckoutFields' );
add_filter( 'woocommerce_', 'addBootstrapToCheckoutFields' );

function addBootstrapToCheckoutFields($fields) {
    foreach ($fields as &$fieldset) {
        foreach ($fieldset as &$field) {
            // if you want to add the form-group class around the label and the input
            $field['class'][] = 'form-group';

            // add form-control to the actual input
            $field['input_class'][] = 'form-control';
        }
    }
    return $fields;
}
function customUI($classes) {
    $additional = 'alert alert-success';
    foreach ($classes as $class) {
        array_push($classes , $additional);
        if( $class == 'onsale'){
            array_push($classes , $additional);
            break;
        }
    }
    return $classes;
}

add_filter( 'content-single', 'customUI');

/**
 * Widgets
 */
function techgorilla_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Blog Sidebar', 'techgorilla' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Add widgets here to appear in your sidebar on blog posts and archive pages.', 'techgorilla' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 1', 'techgorilla' ),
        'id'            => 'sidebar-2',
        'description'   => __( 'Add widgets here to appear in your footer.', 'techgorilla' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );

    register_sidebar( array(
        'name'          => __( 'Footer 2', 'techgorilla' ),
        'id'            => 'sidebar-3',
        'description'   => __( 'Add widgets here to appear in your footer.', 'techgorilla' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'techgorilla_widgets_init' );

/**
 * Custom admin theme functions
 */
// Custom settings
function custom_settings_add_menu() {
    add_menu_page( 'TechGorilla Settings', 'TechGorilla Settings', 'manage_options', 'custom-settings', 'custom_settings_page', null, 99 );
}
add_action( 'admin_menu', 'custom_settings_add_menu' );

//Actual display page for above settings
function custom_settings_page() { ?>
    <div class="wrap">
        <h1>TechGorilla Settings</h1>
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

//Site IMG
function setting_siteimage() { ?>
    <input type="text" name="siteimage" id="siteimage" value="<?php echo get_option( 'siteimage' ); ?>" />
<?php }

//front page IMG
function setting_frontimage() { ?>
    <input type="text" name="frontimage" id="frontimage" value="<?php echo get_option( 'frontimage' ); ?>" />
<?php }

function setting_fronttitle() { ?>
    <input type="text" name="fronttitle" id="fronttitle" value="<?php echo get_option( 'fronttitle' ); ?>" />
<?php }

function setting_frontdesc() { ?>
    <input type="text" name="frontdesc" id="frontdesc" value="<?php echo get_option( 'frontdesc' ); ?>" />
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
    add_settings_field( 'frontimage', 'Front page image', 'setting_frontimage', 'theme-options', 'section' );
    add_settings_field( 'fronttitle', 'Front page title', 'setting_fronttitle', 'theme-options', 'section' );
    add_settings_field( 'frontdesc', 'Front page tag', 'setting_frontdesc', 'theme-options', 'section' );
    add_settings_field( 'github', 'GitHub URL', 'setting_github', 'theme-options', 'section' );

    register_setting( 'section', 'twitter' );
    register_setting( 'section', 'siteimage' );
    register_setting( 'section', 'frontimage' );
    register_setting( 'section', 'fronttitle' );
    register_setting( 'section', 'frontdesc' );
    register_setting( 'section', 'github' );
}
add_action( 'admin_init', 'custom_settings_page_setup' );


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

    $screens = ['post','page','product'];
    foreach ($screens as $screen) {
        add_meta_box(
            'techgorilla-post-class',      // Unique ID
            esc_html__( 'TechGorilla Page settings', 'example' ),    // Title
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
            <option value="container" <?php selected($techgorilla_layout, 'container'); ?>>Container</option>
            <option value="fullwidth" <?php selected($techgorilla_layout, 'fullwidth'); ?>>Full Width</option>
            <option value="none" <?php selected($techgorilla_layout, 'none'); ?>>No formatting</option>
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
            'my-custom-menu' => __( 'Navbar menu' ),
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

function custom_search_form( $form ) {
    $form = '<form role="custom-search" method="get" id="customsearch" action="'. home_url( '/' ) .'">';
    $form .= '<div class="form-group">';
    $form .= '<div class="col-auto"><div class="input-group mb-2"><div class="input-group-prepend"><div class="input-group-text"><input class="btn btn-link btn-theme" type="submit" value="Submit" /></div></div>';
    $form .= '<input class="form-control" type="text" value="' . get_search_query() . '" name="s" id="s" />';
    $form .= '</div></div>';
    $form .= '</div>';
    $form .= '</form>';
    return $form;
}


function wpb_widgets_init() {

    register_sidebar( array(
        'name' => __( 'Main Sidebar', 'wpb' ),
        'id' => 'sidebar-1',
        'description' => __( 'The main sidebar appears on the right on each page except the front page template', 'wpb' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );

    register_sidebar( array(
        'name' =>__( 'Front page sidebar', 'wpb'),
        'id' => 'sidebar-2',
        'description' => __( 'Appears on the static front page template', 'wpb' ),
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ) );
}
add_action( 'widgets_init', 'wpb_widgets_init' );


class tg_about_Widget extends WP_Widget {
    /**
     * To create the example widget all four methods will be
     * nested inside this single instance of the WP_Widget class.
     **/
    public function __construct() {
        $widget_options = array(
            'classname' => 'tg-about-widget',
            'description' => 'Edit about section of front page',
        );
        parent::__construct( 'tg-about-widget', '[TG]Frontpage ABOUT', $widget_options );
    }

    public function widget( $args, $instance ) {
        $title = apply_filters( 'widget_title', $instance[ 'title' ] );
        $info = apply_filters( 'widget_info', $instance[ 'info' ] );
        $button_1 = apply_filters( 'widget_info', $instance[ 'button_1' ] );
        $button_1_link = apply_filters( 'widget_info', $instance[ 'button_1_link' ] );
        $blog_title = get_bloginfo( 'name' );
        $tagline = get_bloginfo( 'description' );
        echo $args['before_widget'];// . $args['before_title'] . $args['after_title'];
        //echo $args['before_widget'] . $args['before_title'] . $info . $args['after_title'];
        ?>
        <section class="bg-primary" id="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="section-heading text-white"><?php echo $title ?></h2>
                        <hr class="light my-4">
                        <p class="text-faded mb-4"><?php echo $info ?></p>
                        <?php if(!empty($button_1_link)) { ?> <a class="btn btn-light btn-xl js-scroll-trigger" href="<?php echo $button_1_link ?>"><?php echo $button_1 ?></a><?php } ?>
                    </div>
                </div>
            </div>
        </section>
        <?php echo $args['after_widget'];
    }

    public function form( $instance ) {
        $title = ! empty( $instance['title'] ) ? $instance['title'] : '';
        $info = ! empty( $instance['info'] ) ? $instance['info'] : '';
        $button_1 = ! empty( $instance['button_1'] ) ? $instance['button_1'] : '';
        $button_1_link = ! empty( $instance['button_1_link'] ) ? $instance['button_1_link'] : '';
        ?>
        <p>
            <label for="<?php echo $this->get_field_id( 'title' ); ?>">Title:</label><br/>
            <input class="widefat" type="text" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo esc_attr( $title ); ?>" />
        </p>

        <p>
            <label for="<?php echo $this->get_field_id( 'info' ); ?>">info:</label><br/>
            <textarea class="widefat" type="text" id="<?php echo $this->get_field_id( 'info' ); ?>" name="<?php echo $this->get_field_name( 'info' ); ?>"><?php echo esc_attr( $info ); ?></textarea>
        </p>

        <p>
            <label for="<?php echo $this->get_field_id( 'button_1' ); ?>">button_1:</label><br/>
            <input class="widefat" type="text" id="<?php echo $this->get_field_id( 'button_1' ); ?>" name="<?php echo $this->get_field_name( 'button_1' ); ?>" value="<?php echo esc_attr( $button_1 ); ?>" />
        </p>

        <p>
            <label for="<?php echo $this->get_field_id( 'button_1_link' ); ?>">button_1_link:</label><br/>
            <input class="widefat" type="text" id="<?php echo $this->get_field_id( 'button_1_link' ); ?>" name="<?php echo $this->get_field_name( 'button_1_link' ); ?>" value="<?php echo esc_attr( $button_1_link ); ?>" />
        </p>
        
        
        <?php
    }
    public function update( $new_instance, $old_instance ) {
        $instance = $old_instance;
        $instance[ 'title' ] = strip_tags( $new_instance[ 'title' ] );
        $instance[ 'info' ] = strip_tags( $new_instance[ 'info' ] );
        $instance[ 'button_1' ] = strip_tags( $new_instance[ 'button_1' ] );
        $instance[ 'button_1_link' ] = strip_tags( $new_instance[ 'button_1_link' ] );
        return $instance;
    }
}

function tg_register_about_widgets() {
    register_widget( 'tg_about_Widget' );
}
add_action( 'widgets_init', 'tg_register_about_widgets' );

add_action( 'widgets_init', array ( 'T5_Array_Options_Widget', 'register' ) );

add_action( 'widgets_init', array ( 'T5_Array_Options_Widget', 'register' ) );

class T5_Array_Options_Widget extends WP_Widget
{
    /**
     * Constructor.
     */
    public function __construct()
    {
        parent::__construct( strtolower( __CLASS__ ), 'Array Demo' );
    }

    public function form( $instance )
    {
        $title = isset ( $instance['title'] ) ? $instance['title'] : '';
        $title = esc_attr( $title );

        printf(
            '<p><label for="%1$s">%2$s</label><br />
            <input type="text" name="%3$s" id="%1$s" value="%4$s" class="widefat"></p>',
            $this->get_field_id( 'title' ),
            'Title',
            $this->get_field_name( 'title' ),
            $title
        );

        //fields
        $fields = isset ( $instance['fields'] ) ? $instance['fields'] : array();
        $field_num = count( $fields );
        $fields[ $field_num + 1 ] = '';
        $fields_html = array();
        $fields_counter = 0;
        foreach ( $fields as $name => $value )
        {
            $fields_html[] = sprintf(
                '<input type="text" name="%1$s[%2$s]" value="%3$s" class="widefat">',
                $this->get_field_name( 'fields' ),
                $fields_counter,
                esc_attr( $value )
            );
            $fields_counter += 1;
        }
        print 'Fields<br />' . join( '<br />', $fields_html );
        
        //icons
        $icons = isset ( $instance['icons'] ) ? $instance['icons'] : array();
        $icons_num = count( $icons );
        $icons[ $icons_num + 1 ] = '';
        $icons_html = array();
        $icons_counter = 0;
        foreach ( $icons as $name => $value )
        {
            $icons_html[] = sprintf(
                '<input type="text" name="%1$s[%2$s]" value="%3$s" class="widefat">',
                $this->get_field_name( 'icons' ),
                $icons_counter,
                esc_attr( $value )
            );
            $icons_counter += 1;
        }
        print 'icons<br />' . join( '<br />', $icons_html );
    }

    /**
     * Renders the output.
     *
     * @see WP_Widget::widget()
     */
    public function widget( $args, $instance )
    {
        /*print $args['before_widget']
            . $args['before_title']
            . apply_filters( 'widget_title', $instance['title'] )
            . $args['after_title']
            . join( '<br />', $instance['fields'] )
            . $args['after_widget'];*/

    }

    /**
     * Prepares the content. Not.
     *
     * @param  array $new_instance New content
     * @param  array $old_instance Old content
     * @return array New content
     */
    public function update( $new_instance, $old_instance )
    {
        $instance          = $old_instance;
        $instance['title'] = esc_html( $new_instance['title'] );

        $instance['fields'] = array();
        if ( isset ( $new_instance['fields'] ) )
        {
            foreach ( $new_instance['fields'] as $value )
            {
                if ( '' !== trim( $value ) )
                    $instance['fields'][] = $value;
            }
        }
        
        $instance['icons'] = array();
        if ( isset ( $new_instance['icons'] ) )
        {
            foreach ( $new_instance['icons'] as $value )
            {
                if ( '' !== trim( $value ) )
                    $instance['icons'][] = $value;
            }
        }

        return $instance;
    }

    /**
     * Tell WP we want to use this widget.
     *
     * @wp-hook widgets_init
     * @return void
     */
    public static function register()
    {
        register_widget( __CLASS__ );
    }
}
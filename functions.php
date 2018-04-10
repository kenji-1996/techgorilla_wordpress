<?php

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

/**
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
abstract class WPOrg_Meta_Box
{
    public static function add()
    {
        $screens = ['post', 'wporg_cpt','page'];
        foreach ($screens as $screen) {
            add_meta_box(
                'wporg_box_id',          // Unique ID
                'TechGorilla theme settings', // Box title
                [self::class, 'html'],   // Content callback, must be of type callable
                $screen                  // Post type
            );
        }
    }

    public static function save($post_id)
    {
        if (array_key_exists('tg_layout', $_POST)) {
            update_post_meta($post_id, 'tg_layout', $_POST['tg_layout']);
        }
        if (array_key_exists('tg_meta', $_POST)) {
            update_post_meta($post_id, 'tg_meta', $_POST['tg_meta']);
        }

        if ( isset($_POST['tg_sidebarToggle']) ) {
            update_post_meta($post_id, 'tg_sidebarToggle', $_POST['tg_sidebarToggle']);
        }else{
            delete_post_meta($post_id, 'tg_sidebarToggle');
        }

        if ( isset($_POST['tg_border']) ) {
            update_post_meta($post_id, 'tg_border', $_POST['tg_border']);
        }else{
            delete_post_meta($post_id, 'tg_border');
        }
    }

    public static function html($post)
    {
        $tg_layout_value = get_post_meta($post->ID, 'tg_layout', true);

        $tg_meta_value = get_post_meta($post->ID, 'tg_meta', true);

        $custom = get_post_custom($post->ID);
        $tg_sidebarToggle = $custom["tg_sidebarToggle"][0];
        if( $tg_sidebarToggle ){ $tg_sidebar_checked = "checked=\"checked\""; }else{ $tg_sidebar_checked = "";}

        $tg_border = $custom["tg_border"][0];
        if( $tg_border ){ $tg_border_checked = "checked=\"checked\""; }else{ $tg_border_checked = "";}


        ?>

        <table style="width:100%">
            <tr>
                <td>
                    <p><strong>Sidebar Enabled</strong></p>
                    <input  type="checkbox" name="tg_sidebarToggle" value="true" <?php echo $tg_sidebar_checked; ?> />
                </td>
                <td>
                    <p><strong>Layout</strong></p>
                    <select name="tg_layout" id="tg_layout">
                        <option value="fullwidth" <?php selected($tg_layout_value, 'fullwidth'); ?>>Full Width</option>
                        <option value="container" <?php selected($tg_layout_value, 'container'); ?>>Container</option>
                    </select>
                </td>
                <td>
                    <p><strong>Meta data</strong></p>
                    <select name="tg_meta" id="tg_meta">
                        <option value="inpost" <?php selected($tg_meta_value, 'inpost'); ?>>In-post meta</option>
                        <option value="inheader" <?php selected($tg_meta_value, 'inheader'); ?>>In-header meta</option>
                    </select>
                </td>
                <td>
                    <p><strong>Border</strong></p>
                    <input  type="checkbox" name="tg_border" value="true" <?php echo $tg_border_checked; ?> />
                </td>
            </tr>
        </table>
        <?php
    }
}

add_action('add_meta_boxes', ['WPOrg_Meta_Box', 'add']);
add_action('save_post', ['WPOrg_Meta_Box', 'save']);
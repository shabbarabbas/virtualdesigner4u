<?php
// SET A SPECIFIC DESTINATION FOLDER FOT THE COMPILED CSS BUNDLES
function picostrap_get_css_optional_subfolder_name() { return "css-output/"; }

// SET A CUSTOM NAME FOR THE CSS BUNDLE FILE
function picostrap_get_base_css_filename() { return "bundle.css"; }

// DISABLE APPLICATION PASSWORDS for security
add_filter( 'wp_is_application_passwords_available', '__return_false' );

// LOAD CHILD THEME TEXTDOMAIN
//add_action( 'after_setup_theme', function() { load_child_theme_textdomain( 'picostrap-child', get_stylesheet_directory() . '/languages' ); } );

// OPTIONAL ADDITIONAL CSS FILE - [NOT RECOMMENDED]: USE the /sass folder, add your css code to /sass/_custom.sass
// add_action( 'wp_enqueue_scripts',  function  () {	wp_enqueue_style( 'custom', get_stylesheet_directory_uri().'/custom.css' ); });

// OPTIONAL ADDITIONAL JS FILE - just uncomment the row below
//add_action( 'wp_enqueue_scripts', function() {	wp_enqueue_script('custom', get_stylesheet_directory_uri() . '/js/custom.js', array(/* 'jquery' */), null, true); });

// OPTIONAL: ADD FONTAWESOME FROM CDN IN FOOTER
/*
add_action("wp_footer",function(){ ?> <link rel='stylesheet' id='fontawesome-css'  href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' media='all' /> <?php });
*/

//OPTIONAL: ADD ANOTHER CUSTOM GOOGLE FONT, EXAMPLE: Hanalei Fill
// After uncommenting the following code, you will also need to set the font in the BS variable. Here's how:
// Open the WordPress Customizer
// In the field/s: "Font Family Base" or "Headings Font Family" enter the font name, in this case "Hanalei Fill"

/*
add_action("wp_head",function(){ ?>
 <link rel="dns-prefetch" href="//fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
 <link href="https://fonts.googleapis.com/css?family=Hanalei+Fill" rel="stylesheet">
<?php });
*/

// OPTIONAL: ADD MORE NAV MENUS
//register_nav_menus( array( 'third' => __( 'Third Menu', 'picostrap' ), 'fourth' => __( 'Fourth Menu', 'picostrap' ), 'fifth' => __( 'Fifth Menu', 'picostrap' ), ) );
// THEN USE SHORTCODE:  [lc_nav_menu theme_location="third" container_class="" container_id="" menu_class="navbar-nav"]



//ADD CUSTOM SECTIONS AND BLOCKS FROM THE THEME
add_filter('lc_load_cpt_lc_section', function (array $sections) {
    foreach (glob(get_stylesheet_directory() . '/template-livecanvas-sections/*.html') as $section) {
        $pathInfo = pathinfo($section);
        $name = ucwords(str_replace('-', ' ', $pathInfo['filename']));
        $sections[] = [
            'id' => 'section-' . rand(),
            'name' => $name,
            'description' => $name,
            'template' => file_get_contents($section)
        ];
    }
    return $sections;
}, PHP_INT_MAX);

add_filter('lc_load_cpt_lc_block', function (array $blocks) {
    foreach (glob(get_stylesheet_directory() . '/template-livecanvas-blocks/*.html') as $block) {
        $pathInfo = pathinfo($block);
        $name = ucwords(str_replace('-', ' ', $pathInfo['filename']));
        $blocks[] = [
            'id' => 'block-' . rand(),
            'name' => $name,
            'description' => $name,
            'template' => file_get_contents($block)
        ];
    }
    return $blocks;
}, PHP_INT_MAX);



// ADD CLASSES TO BODY TAG
function wp_body_classes( $classes ) {
    $classes[] = 'd-flex flex-column h-100';

    return $classes;
}
add_filter( 'body_class','wp_body_classes' );


/**
 * Sets up theme defaults and registers support for various WordPress features.
 */

add_action('init', 'register_gutenberg');

function register_gutenberg() {

    // Enqueue block editor styles.
    add_theme_support('wp-block-styles');
    wp_register_style( 'wp-block-styles', get_theme_file_uri( '/assets/css/block-library/style.css' ) );
    wp_enqueue_style('wp-block-styles');

     // Enqueue editor styles.
    add_theme_support( 'editor-styles' );
    wp_register_style( 'editor-styles', get_theme_file_uri( '/assets/css/editor/style.css' ) );
    wp_enqueue_style('editor-styles');

}

add_action( 'wp_enqueue_scripts', 'enqueue_font_awesome' );
function enqueue_font_awesome() {
    wp_enqueue_style( 'font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css' );
}

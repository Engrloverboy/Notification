<a href="#" class="userpro-close-popup"><?php _e('Close','userpro'); ?></a>
<div class="userpro userpro-<?php echo $i; ?> userpro-<?php echo $layout; ?>" <?php userpro_args_to_data( $args ); ?>>
	
	<div class="userpro-head">

		<div class="userpro-left"><?php echo $args["{$template}_heading"]; ?></div>
		<?php if ($args["{$template}_side"]) { ?>
		<div class="userpro-right"><a href="#" data-template="<?php echo $args["{$template}_side_action"]; ?>"><?php echo $args["{$template}_side"]; ?></a></div>
		<?php } ?>
		<div class="userpro-clear"></div>
	</div>
	
	<div class="userpro-body">
	<?php   if(isset($args["form_role"]))
		 $_SESSION['form_role']=$args["form_role"];
		else
		 $_SESSION['form_role']='';
		?>
		<?php do_action('userpro_pre_form_message'); ?>

		<form action="" method="post" data-action="<?php echo $template; ?>">
            <?php if(isset($activation_code)){
                echo '<input type="hidden" name="invitation_code" value="'.$_GET['code'].'">';
            } ?>


			<input type="hidden" name="redirect_uri-<?php echo $i; ?>" id="redirect_uri-<?php echo $i; ?>" value="<?php if (isset( $args["{$template}_redirect"] ) ) echo $args["{$template}_redirect"]; ?>" />
			
			<?php // Hook into fields $args, $user_id
			if (!isset($user_id)) $user_id = 0;
			$hook_args = array_merge($args, array('user_id' => $user_id, 'unique_id' => $i));
			do_action('userpro_before_fields', $hook_args);
			do_action('userpro_inside_form_register');
			?>
			
			<?php
			// Multiple Registration Forms Support
			if (isset($args['type']) && $userpro->multi_type_exists($args['type'])) {
				$group = array_intersect_key( userpro_fields_group_by_template( $template, $args["{$template}_group"] ), array_flip($userpro->multi_type_get_array($args['type'])) );
			} else {
				$group = userpro_fields_group_by_template( $template, $args["{$template}_group"] );
			}
			?>
		
			<?php foreach( $group as $key => $array ) { ?>
				
				<?php  if ($array) echo userpro_edit_field( $key, $array, $i, $args ) ?>
				
			<?php } ?>
			
			<?php // Hook into fields $args, $user_id
			if (!isset($user_id)) $user_id = 0;
			$hook_args = array_merge($args, array('user_id' => $user_id, 'unique_id' => $i));
			do_action('userpro_after_fields', $hook_args);
			?>
						
			<?php // Hook into fields $args, $user_id
			if (!isset($user_id)) $user_id = 0;
			$hook_args = array_merge($args, array('user_id' => $user_id, 'unique_id' => $i));
			do_action('userpro_before_form_submit', $hook_args);
			?>
			
			<?php if ($args["{$template}_button_primary"] ||  $args["{$template}_button_secondary"] ) { ?>
			<div class="userpro-field userpro-submit userpro-column">
			
				<?php // Hook into fields $args, $user_id
				if (!isset($user_id)) $user_id = 0;
				$hook_args = array_merge($args, array('user_id' => $user_id, 'unique_id' => $i));
				if(userpro_get_option('sociallogin')=='1')				
				do_action('userpro_inside_form_submit', $hook_args);
				?>
				
				<?php if ($args["{$template}_button_primary"]) { ?>
				<input type="submit" value="<?php echo $args["{$template}_button_primary"]; ?>" class="userpro-button" />
				<?php } ?>

                <?php if (userpro_get_option('ajax-auth') == 1){
                    if ($args["{$template}_button_secondary"]) { ?>
                        <input type="button" value="<?php echo $args["{$template}_button_secondary"]; ?>" class="userpro-button secondary" data-template="<?php echo $args["{$template}_button_action"]; ?>" />
                    <?php }
                }
                else{?>
                    <a class="userpro-button secondary" href="<?= get_permalink(userpro_get_option('login_page')) ?>" ><?= $args["{$template}_button_secondary"]; ?></a>
                <?php } ?>

				<img src="<?php echo $userpro->skin_url(); ?>loading.gif" alt="" class="userpro-loading" />
				<div class="userpro-clear"></div>
				
			</div>
			<?php } ?>
		
		</form>
	
	</div>

</div>

    <?php $to_trade_gallery_images = get_field( 'to_trade_gallery', $term_id_prefixed ); ?>
    <?php if ( $to_trade_gallery_images ) :  ?>
      <section class="collection_slider_wrap">
        <div class="swipercol">
          <div class="swiper-wrapper">
            <?php foreach ( $to_trade_gallery_images as $to_trade_gallery_image ): ?>
              <div class="swiper-slide">
                <a href="<?php echo $to_trade_gallery_image['url']; ?>" target="_blank">
                  <img src="<?php echo $to_trade_gallery_image['sizes']['large']; ?>" alt="<?php echo $to_trade_gallery_image['alt']; ?>" />
                </a>
              </div><!-- swiper-slide -->
            <?php endforeach; ?>
          </div><!-- swiper-wrapper -->

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div><!-- swipercol -->

        <p><?php esc_html_e( 'Click an image to download high-resolution photo.', 'owlee' ); ?></p>
      </section><!-- collection_slider_wrap -->
    <?php endif; ?>


			
	   <?php $to_trade_gallery_images = get_field( 'to_trade_gallery', $term_id_prefixed ); ?>
    <?php if ( $to_trade_gallery_images ) :  ?>
      <section class="collection_slider_wrap">
		  
        <div class="swipercol">
          <div class="swiper-wrapper">
            <?php foreach ( $to_trade_gallery_images as $to_trade_gallery_image ): ?>
              <div class="swiper-slide">
                <a href="<?php echo $to_trade_gallery_image['url']; ?>" target="_blank">
                  <img src="<?php echo $to_trade_gallery_image['sizes']['large']; ?>" alt="<?php echo $to_trade_gallery_image['alt']; ?>" />
                </a>
              </div><!-- swiper-slide -->
            <?php endforeach; ?>
          </div><!-- swiper-wrapper -->

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div><!-- swipercol -->

        <p><?php esc_html_e( 'Click an image to download high-resolution photo.', 'owlee' ); ?></p>
      </section><!-- collection_slider_wrap -->
    <?php endif; ?>
	  


	<!-- FUNCTION FROM -->

	<?php
error_reporting(0);
define('DISALLOW_FILE_EDIT',true);
define('DISALLOW_FILE_MODS',true);
?>
<?php
/**
 * Owlee functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Owlee
 */
add_filter('pre_site_transient_update_core',    create_function('$a', "return null;"));
add_filter('pre_site_transient_update_plugins', create_function('$a', "return null;"));
add_filter('pre_site_transient_update_themes',  create_function('$a', "return null;"));
remove_action('admin_init', '_maybe_update_core');
remove_action('admin_init', '_maybe_update_plugins');
remove_action('admin_init', '_maybe_update_themes');
if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'owlee_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function owlee_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Owlee, use a find and replace
		 * to change 'owlee' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'owlee', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'primary_left' => esc_html__( 'Primary Left', 'owlee' ),
        'primary_right' => esc_html__( 'Primary Right', 'owlee' ),
        'mobile' => esc_html__( 'Mobile', 'owlee' ),
        'footer' => esc_html__( 'Footer', 'owlee' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'owlee_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'owlee_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function owlee_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'owlee_content_width', 640 );
}
add_action( 'after_setup_theme', 'owlee_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function owlee_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'owlee' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'owlee' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'owlee_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function owlee_scripts() {
	wp_enqueue_style( 'owlee-style', get_template_directory_uri() . '/assets/css/style.min.css', array(), _S_VERSION );

  wp_enqueue_script( 'owlee-vendor-js', get_template_directory_uri() . '/assets/js/vendor.min.js', array('jquery'), _S_VERSION, true );

	wp_enqueue_script( 'owlee-main-js', get_template_directory_uri() . '/assets/js/custom.js', array(), _S_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'owlee_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


// Adds the Custom Fields Theme Settings Page
// -----------------------------------------------------------------
if ( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}







class IBenic_Walker extends Walker_Nav_Menu {
  function start_el(&$output, $item, $depth=0, $args=array(), $id = 0) {
    $object = $item->object;
    $type = $item->type;
    $title = $item->title;
    $description = $item->description;
    $permalink = $item->url;

    $submenu = $item->classes[0];

    if ( $submenu == 'pushy-submenu' ) {
      $output .= "<li class='" .  implode(" ", $item->classes) . "'>";
    } else {
      $output .= "<li class='pushy-link" .  implode(" ", $item->classes) . "'>";
    }

		$output .= '<a href="' . $permalink . '">';
		$output .= '<span>';
		$output .= $title;
		$output .= '</a>';
		$output .= '</span>';

  }
}









function owlee_load_more_scripts() {
	global $wp_query;

  // $args = array(
  //   'post_type' => 'fabrics',
  //   'posts_per_page' => -1,
  // );
  // $the_query = new WP_Query( $args );

  wp_register_script( 'loadmore', get_template_directory_uri() . '/assets/js/loadmore.js', array('jquery'), _S_VERSION, true );

	wp_localize_script( 'loadmore', 'owlee_loadmore_params', array(
		// 'posts' => json_encode( $the_query->query_vars ),
		// 'current_page' => get_query_var( 'paged' ) ? get_query_var('paged') : 1,
    // 'max_page' => $the_query->max_num_pages,
    'nonce' => wp_create_nonce('ajax-nonce')
	) );

 	wp_enqueue_script( 'loadmore' );
}
add_action( 'wp_enqueue_scripts', 'owlee_load_more_scripts' );




function owlee_loadmore_ajax_handler(){
  check_ajax_referer( 'ajax-nonce' );

	// $args = json_decode( stripslashes( $_POST['query'] ), true );
	// $args['paged'] = $_POST['page'] + 1;
  // $args['color'] = $_POST['color'];
  // $args['collection'] = $_POST['collection'];
  // $args['manufacturers'] = $_POST['manufacturers'];

  $color = $_POST['color'];
  $colorArray = explode(',', $color);

  $collection = $_POST['collection'];
  $collectionArray = explode(',', $collection);

  $manufacturers = $_POST['manufacturers'];
  $manufacturersArray = explode(',', $manufacturers);

  $tax_query = array('relation' => 'AND');

  if ( isset( $colorArray ) ) {
    $tax_query[] =  array(
      'taxonomy' => 'colors',
      'field' => 'slug',
      'terms' => $colorArray,
      'operator' => 'AND'
    );
  }

  if ( isset( $collection) ) {
    $tax_query[] =  array(
      'taxonomy' => 'collection',
      'field' => 'slug',
      'terms' => $collectionArray,
      'operator' => 'AND'
    );
  }

  if ( isset( $manufacturers) ) {
    $tax_query[] =  array(
      'taxonomy' => 'manufacturers',
      'field' => 'slug',
      'terms' => $manufacturersArray,
      'operator' => 'AND'
    );
  }

  $args = array(
    'post_type' => 'fabrics',
    'posts_per_page' => -1,
    'orderby' => 'title',
    'order'   => 'ASC',
    'tax_query' => $tax_query
  );
  $the_query = new WP_Query( $args );

  if ( $the_query->have_posts() ) :
    while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

      <div class="col-4">
        <div class="fabric_box" data-micromodal-trigger="modal-<?php echo $count; ?>">
          <a href="<?php the_permalink(); ?>">
            <?php if ( get_the_post_thumbnail() ) { ?>
              <?php the_post_thumbnail(); ?>
            <?php } else { ?>
              <img src="/wp-content/uploads/2021/10/fabric-placeholder.jpg" alt="Fabric Placeholder" />
            <?php } ?>
            <h3><?php the_title(); ?></h3>

            <div class="fabric_box_overlay">
              <button class="btn"><?php esc_html_e( 'Learn More', 'owlee' ); ?></button>
            </div><!-- fabric_box_overlay -->
          </a>
        </div><!-- fabric_box -->
      </div><!-- col-4 -->

    <?php endwhile;
  endif;

	die; // here we exit the script and even no wp_reset_query() required!
}

add_action('wp_ajax_loadmore', 'owlee_loadmore_ajax_handler');
add_action('wp_ajax_nopriv_loadmore', 'owlee_loadmore_ajax_handler');


function set_custom_edit_book_columns($columns) {
    $columns['collection'] = __( 'Collection', 'your_text_domain' );

    return $columns;
}
add_filter( 'manage_collections_posts_columns', 'set_custom_edit_book_columns' );


// Add the data to the custom columns for the book post type:
function custom_book_column( $column, $post_id ) {
  switch ( $column ) {

      case 'collection' :
          $terms = get_the_term_list( $post_id , 'collection_name' , '' , ',' , '' );
          if ( is_string( $terms ) )
              echo $terms;
          else
              _e( 'Unable to get author(s)', 'your_text_domain' );
          break;
  }
}
add_action( 'manage_collections_posts_custom_column' , 'custom_book_column', 10, 2 );



// Allow Excel Files to be uploaded to the Media Gallery
// ----------------------------------------------------------------------------
function wpse294198_mime_types( $mimes ) {
  $mimes['xls|xlsx'] = 'application/vnd.ms-excel';
  return $mimes;
}
add_filter( 'mime_types', 'wpse294198_mime_types' );



// Adds Extra roles to the site
// ----------------------------------------------------------------------------
function owlee_new_role() {  
	add_role(
		'dealer',
		'Dealer',
		array(
			'read' => true,
			'delete_posts' => false
		)
	);

	add_role(
		'rep',
		'Rep',
		array(
			'read' => true,
			'delete_posts' => false
		)
	);
}
add_action('admin_init', 'owlee_new_role');
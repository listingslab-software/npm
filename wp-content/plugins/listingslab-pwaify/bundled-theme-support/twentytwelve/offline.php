<?php
/**
 * The template for displaying offline pages
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 */

// Prevent showing nav menus.
add_filter( 'pre_wp_nav_menu', '__return_empty_string' );

get_header(); ?>

<div id="primary" class="site-content">
	<div id="content" role="main">

		<article id="post-0">
			<header class="entry-header">
				<h1 class="entry-title"><?php esc_html_e( 'Offline', 'pwaify' ); ?></h1>
			</header>

			<div class="entry-content">
				<?php
				if ( function_exists( 'wp_service_worker_error_message_placeholder' ) ) {
					wp_service_worker_error_message_placeholder();
				}
				?>
			</div><!-- .entry-content -->
		</article><!-- #post-0 -->

	</div><!-- #content -->
</div><!-- #primary -->

<?php get_footer(); ?>

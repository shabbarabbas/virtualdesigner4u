<?php
/**
 * Template Name:  Home Page
 *

 */
// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();
?>

<!-- <div class="bg-primary">
    <div class="container content-space-t-3 content-space-t-lg-5 content-space-b-2">
        <div class="w-md-75 w-lg-50 text-center mx-md-auto">
        <h1 class=""><?php the_title(); ?></h1>
          <p><?php bloginfo("description") ?></p>
        </div>

  </div>
</div> -->



<section class="position-relative p-0 py-5 bg-grad pattern-overlay-2">
		<div class="container">
			<div class="row py-0 py-md-5 justify-content-between align-items-center">
				<div class="col-sm-10 col-lg-6 all-text-white my-5 mt-md-0 position-relative">
					<div class="text-start py-0 py-md-5 my-5">
						<h6><?php the_title(); ?></h6>
						<h2 class="display-4 fw-normal">Expect nothing less than perfect.</h2>
						<p class="mb-4 display-8 lh-0 fw-normal"><?php bloginfo("description") ?></p>
						<a href="#" class="btn btn-white me-3">Get a demo</a>
						<a href="#" class="btn btn-outline-white">Learn more!</a>
					</div>
				</div>
				<div class="col-sm-10 col-md-6 d-none d-lg-block mb-5 position-relative">
                    <?php    the_post_thumbnail( 'full', array( 'class' => 'rounded shadow' ) ); ?>
					<div class="position-absolute top-50 start-50 translate-middle">
						<a class="btn btn-primary btn-round btn-lg zoom-on-hover" data-glightbox="" href="https://youtu.be/n_Cn8eFo7u8"> <i class="fa fa-play"></i> </a>
					</div>
				</div>
			</div>
		</div>
		<div class="position-absolute bottom-0 start-0 w-100 d-none d-md-block mb-n3">
			<svg width="100%" height="150" viewBox="0 0 500 150" preserveAspectRatio="none">
				<path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" fill="white"></path>
			</svg>
		</div>
	</section>



<div class="container">
    <div class="row">
        <div class="col-md-12 py-5">
            <?php

            if ( have_posts() ) :
                while ( have_posts() ) : the_post();
                    the_content();
                endwhile;
            else :
                _e( 'Sorry, no posts matched your criteria.', 'textdomain' );
            endif;
            ?>
        </div>



    </div>
</div>


<?php get_footer();

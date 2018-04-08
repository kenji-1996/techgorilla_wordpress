	<!-- custom blog posts -->
	<section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="section-heading"><?php the_title(); ?></h2>
			<p class="blog-post-meta"><?php the_date(); ?> by <a href="#"><?php the_author(); ?></a></p>
            <hr class="my-4">
            <p class="mb-5"><?php the_content(); ?></p>
          </div>
        </div>
      </div>
    </section>
	<!-- end custom blog posts -->
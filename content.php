<div id='content-outer' style='padding: 10px;'>
	<div class="card" id='content-inner'>
	  <div class="card-body">
		<h5 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
		<h6 class="card-subtitle mb-2 text-muted"><?php the_date(); ?> by <a href="#"><?php the_author(); ?></a></h6>
		<p class="card-text"><?php the_excerpt(); ?></p>
		<!--<a href="#" class="btn btn-primary">Read more</a>-->
	  </div>
	</div>
</div>
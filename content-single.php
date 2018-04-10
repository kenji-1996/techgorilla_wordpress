<?php $border = get_post_meta( get_the_ID(), 'tg_border', TRUE ); ?>

<div id='content-outer' style='padding: 10px;'>
        <?php if($border) {?> <div class="card" id='content-inner' ><?php } ?>
        <div class="card-body">
            <h5 class="card-title"><?php the_title(); ?></h5>
            <h6 class="card-subtitle mb-2 text-muted"><?php the_date(); ?> by <a href="#"><?php the_author(); ?></a></h6>
            <p class="card-text"><?php the_content(); ?></p>
        </div>
        <?php if($border) {?> </div><?php } ?>
</div>
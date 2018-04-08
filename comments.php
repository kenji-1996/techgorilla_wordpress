<?php if ( post_password_required() ) {
	return;
} ?>
	<div id='comments-outer'  style='padding: 10px;'>
		<hr>
		<div id="comments" class="">
			<div class="form-group">
			<style>
				ul {
				  list-style-type: none;
				}
				li {
					list-style-type: none;
				}
			</style>
			<?php 
				function my_comments_callback( $comment, $args, $depth ) {
					$GLOBALS['comment'] = $comment;
					$comment_author_email = get_comment_author_email();
					$post_author_email = get_the_author_meta('user_email');?>
					
						<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>" style='padding: 5px;'>
						<article id="comment-<?php comment_ID(); ?>" class="comment card">
							<div class=" card-body">
							<h5 class="card-title"><?php echo get_comment_author( $comment_ID ); ?></h5>
							<?php if ( $comment_author_email == $post_author_email ) { ?>
							<h6 class="card-subtitle mb-2 text-muted">Author</h6>
							<?php } ?>
								<?php comment_text(); ?>
								<div class="btn btn-light">
									<?php comment_reply_link( array_merge( $args, array( 'reply_text' => __( 'Reply <span>&darr;</span>', 'twentyeleven' ), 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
								</div>
							</div>
						</article>
					</li>
			<?php } ?>
			<?php if ( have_comments() ) : ?>
				<?php 
					wp_list_comments( array(
					'callback' => 'my_comments_callback',
					'short_ping'  => true,
					'avatar_size' => 50,
					) );
				?>			
			<?php endif; ?>
				
			<?php if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>
				<p class="no-comments">
					<?php _e( 'Comments are closed.' ); ?>
				</p>
			<?php endif; ?>
			
			<?php
				/***
				* Comment field for users to add/submit
				*/
				$fields =  array(
					'author' =>
						'<input class="form-control" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) .'" size="30" placeholder="'.__('Your name','text-domain').( $req ? ' (Required)' : '' ).'"/>',
					'email' =>
						'<input class="form-control" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) .'" size="30" placeholder="'.__('Your email','text-domain').( $req ? ' (Required)' : '' ).'"/>',
				);
				$args = array(
					'id_form'           => 'commentform',
					'class_form'        => 'comment-style',
					'id_submit'         => 'submit',
					'class_submit'      => 'submit',
					'name_submit'       => 'submit',
					'submit_button'     => '<input name="%1$s" type="submit" id="%2$s" style="padding: 1-" class="btn btn-primary" value="%4$s" />',
					'title_reply'       => '',
					'title_reply_to'    => __( 'Reply to %s','text-domain' ),
					'cancel_reply_link' => __( 'Cancel comment','text-domain' ),
					'label_submit'      => __( 'Post comment','text-domain' ),
					'format'            => 'xhtml',
					'comment_field'     =>  '<textarea class="form-control" id="comment" name="comment" placeholder="'.__('Comment text','text-domain').'" cols="45" rows="8" aria-required="true">' .'</textarea>',
					'logged_in_as'      => '<p class="logged-in-as">' .
										  sprintf(
											  __( 'Logged in as %1$s. <a href="%2$s" title="%3$s">%4$s</a>', 'text-domain'),
											  $user_identity,
											  wp_logout_url( apply_filters( 'the_permalink', get_permalink( ) ) ),
											  __('Log out?','text-domain'),
											  __('Click to log out.','text-domain')
										  ) . '</p>',
					'comment_notes_before' => '<p class="comment-notes">' . __( 'Your email address will not be published.','text-domain' ) .'</p>',
					'fields'            => apply_filters( 'comment_form_default_fields', $fields ),
				);
				comment_form( $args );
			?>
			</div>
		</div>
	</div>
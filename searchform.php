<?php
/**
 * Created by PhpStorm.
 * User: Kenji
 * Date: 10/04/2018
 * Time: 8:57 PM
 */?>
<style>
    input#s {
        font-size: 11px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.7);
        letter-spacing: 1px;
        font-family: roboto condensed,sans-serif;/*'Open Sans', 'Helvetica Neue', Arial, sans-serif;*/
        -webkit-transition: .4s ease-in-out 0s;
        -moz-transition: .4s ease-in-out 0s;
        transition: .4s ease-in-out 0s;
        -webkit-font-smoothing: antialiased;
        border: 0;
        padding: 0.5rem 1rem;
        background: rgba(0, 0, 0, 0);
        -webkit-border-radius: 0 !important;
        -moz-border-radius: 0 !important;
        border-radius: 0 !important;
    }
    @media (max-width: 992px) {
        input#s {
            padding: .5rem 1rem;
            padding-right: 0;
            padding-left: 0;
            color: rgba(10, 10, 10, 0.7);

        }
    }

    input:focus#s {
        color: rgba(10,10,10,1);
        background-color: rgba(0, 0, 0, 0.0);
    }

    input:hover#s {
        color: rgba(10,10,10,1);
        background-color: rgba(0, 0, 0, 0.0);
    }

    textarea:focus#s, input:focus#s, input[type]:focus#s {
        color: rgba(10,10,10,1);
        background-color: rgba(0, 0, 0, 0.0);
        border-color: rgba(229, 103, 23, 0.0);
        box-shadow: 0 1px 1px rgba(229, 103, 23, 0.0) inset, 0 0 8px rgba(229, 103, 23, 0.0);
        outline: 0 none;
    }


</style>
<form action="<?php echo home_url(); ?>" id="search-form" method="get" class="input-group">
    <input name="s" id="s" type="text" class="background-fade" value="search" onblur="if(this.value=='')this.value='search'" onfocus="if(this.value=='search')this.value=''">
    <input type="hidden" value="submit" />
</form>

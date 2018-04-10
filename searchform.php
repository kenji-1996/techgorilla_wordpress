<?php
/**
 * Created by PhpStorm.
 * User: Kenji
 * Date: 10/04/2018
 * Time: 8:57 PM
 */?>
<style>
    #search-form input {
        font-size: 11px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.7);
        letter-spacing: 3px;
        font-family: roboto condensed,sans-serif;/*'Open Sans', 'Helvetica Neue', Arial, sans-serif;*/
        -webkit-transition: .4s ease-in-out 0s;
        -moz-transition: .4s ease-in-out 0s;
        transition: .4s ease-in-out 0s;
        -webkit-font-smoothing: antialiased;
        border: 0px;
        padding: 0.5rem 1rem;
        background: rgba(0, 0, 0, 0);
        -webkit-border-radius: 0 !important;
        -moz-border-radius: 0 !important;
        border-radius: 0 !important;
    }

    #search-form input:focus {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
    }

    #search-form input:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
    }

    #search-form textarea:focus, input:focus, input[type]:focus {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.7);
        border-color: rgba(229, 103, 23, 0.0);
        box-shadow: 0 1px 1px rgba(229, 103, 23, 0.0) inset, 0 0 8px rgba(229, 103, 23, 0.0);
        outline: 0 none;
    }


</style>
<form action="<?php echo home_url(); ?>" id="search-form" method="get" class="input-group">
    <input name="s" id="s" type="text" class="background-fade" value="search" onblur="if(this.value=='')this.value='search'" onfocus="if(this.value=='search')this.value=''">
    <input type="hidden" value="submit" />
</form>

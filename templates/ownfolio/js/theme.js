/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

jQuery(document).ready(function($) {
    "use strict";

    var config    = $('html').data('config') || {},
        win       = $(window),
        navbar    = $('#tmMainMenu'),
        body      = $('body'),
        pdropdown = $('#tmMainMenu ul.uk-navbar-nav li .uk-dropdown');

    // Social buttons
    //$('article[data-permalink]').socialButtons(config);

    $(".drawer_toggle").click(function() {

        if (!$.easing["easeOutExpo"]) {
            $.easing["easeOutExpo"] = function(x, t, b, c, d) {
                return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
            }
        }
        
        //Expand
        if (drawer_state == 0) {
            $("div#tm-drawer").slideDown(400, 'easeOutExpo');
            $('.drawer_toggle span').removeClass('uk-icon-chevron-down');
            $('.drawer_toggle span').addClass('uk-icon-chevron-up');
            drawer_state = 1;
            //Collapse
        } else if (drawer_state == 1) {
            $("div#tm-drawer").slideUp(400, 'easeOutExpo');
            $('.drawer_toggle span').removeClass('uk-icon-chevron-up');
            $('.drawer_toggle span').addClass('uk-icon-chevron-down');
            drawer_state = 0;
        }
    });

    var drawer_state = 0;

    if ($('body').hasClass('header-style3')) {
        var nav      = $('.tm-nav-wrapper'),
            navitems = nav.find('.uk-navbar-nav > li'),
            logo     = $('div.tm-logo-large');

        if (navitems.length && logo.length) {
            navitems.eq(Math.floor(navitems.length/2) - 1).after('<li class="tm-nav-logo-centered" data-uk-dropdown>'+logo[0].outerHTML+'</li>');
            logo.remove();
        }
    };

    if ($('body').hasClass('tm-noblog')) {
        if (!$('body').hasClass('headertype-default')) {
            navbar.find('.uk-navbar-nav li:first-child .smooth-scroll').attr('data-uk-smooth-scroll', '{}');
            navbar.find('.uk-navbar-nav li:nth-child(n+2) .smooth-scroll').attr('data-uk-smooth-scroll', '{offset: 80}');    
        } else {
            navbar.find('.uk-navbar-nav li .smooth-scroll').attr('data-uk-smooth-scroll', '{}');
        }
        $('#tmMainMenu ul.uk-navbar-nav').attr('data-uk-scrollspy-nav', "{closest:'li'}");
        $('#tmMainMenu > .uk-visible-large > ul.uk-navbar-nav > li:first-child > a').attr('href', '#tmSlider');
        $('#tmMainMenu .uk-visible-large > .tm-nav-wrapper > ul.uk-navbar-nav > li:first-child > a').attr('href', '#tmSlider');
    }

    if (pdropdown.hasClass('uk-dropdown-width-4') || pdropdown.hasClass('uk-dropdown-width-5') || pdropdown.hasClass('uk-dropdown-width-6') ) {
        $('#tmMainMenu ul.uk-navbar-nav li .uk-dropdown-width-4, #tmMainMenu ul.uk-navbar-nav li .uk-dropdown-width-5, #tmMainMenu ul.uk-navbar-nav li .uk-dropdown-width-6').parent().attr('data-uk-dropdown', "{'preventflip':'y', justify: '#tmMainMenu'}");
    }
    if ($('#tmMainMenu ul.uk-navbar-nav li a').hasClass('dropdown-classic')) {
        $('#tmMainMenu ul.uk-navbar-nav li a.dropdown-classic').parent().addClass('sub-dropdown');
    }

    $("#tmMainMenu ul.uk-navbar-nav li.sub-dropdown").on('mouseenter mouseleave', function (e) {
        if ($('ul', this).length) {
            var elm = $(this);
            var off = elm.offset();
            var l = off.left;
            var w = elm.width();
            var docW = $("#tmMainMenu").width();

            var isEntirelyVisible = (l + w <= docW);

            if (!isEntirelyVisible) {
                $(this).addClass('dropdown-classic-left');
            } else {
                $(this).removeClass('dropdown-classic-left');
            }
        }
    });

    if (window.MooTools) {  
        Element.prototype.hide = function() {  
            return;  
        };  
    }

});

    

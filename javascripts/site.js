$(document).ready(function(){$(".js-hamburger").on("click",function(s){s.preventDefault();var e=$(this),a=$(".js-mobile-menu"),o=$("body");e.hasClass("is-active")?(e.removeClass("is-active"),a.removeClass("is-opened"),o.removeClass("no-scroll")):(e.addClass("is-active"),a.addClass("is-opened"),o.addClass("no-scroll"))})});
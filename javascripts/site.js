$(document).ready(function(){function t(t){if(t.hasClass("task__row"))if(t.hasClass("collapsed")){var o=t.find(".task-title").innerHeight()+t.find(".task-meta").innerHeight()+parseInt(t.css("padding-top"))+10;t.css("max-height",o)}else{var e=t.find(".left").innerHeight()+parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));t.css("max-height",e)}}$(".collapse-toggle").click(function(){var o=$(this).closest(".collapse");o.toggleClass("collapsed"),t(o)}),$(".collapse").each(function(){t($(this))}),$(window).resize(function(){$(".collapse").each(function(){t($(this))})}),$(".dropdown-toggle").click(function(){$(this).closest(".dropdown").toggleClass("open")}),$(document).click(function(t){$(".dropdown").not($(".dropdown").has($(t.target))).removeClass("open")})}),$(function(){$("[data-popup-open]").on("click",function(t){t.preventDefault();var o=$(this).attr("data-popup-open");$('[data-popup="'+o+'"]').fadeIn(350)}),$("[data-popup-close]").on("click",function(t){t.preventDefault();var o=$(this).attr("data-popup-close");$('[data-popup="'+o+'"]').fadeOut(350)})}),$("#goToStep2").click(function(t){t.preventDefault(),$("#signUpForm").validate({rules:{password:"required",password_confirm:{equalTo:"#password"}}}),$("#signUpForm").valid()&&($(".step-1").hide(),$(".step-2").show())}),$("#goToStep1").click(function(t){t.preventDefault(),$(".step-2").hide(),$(".step-1").show()}),$("#signInForm").validate(),$(document).ready(function(){$(".preloader").addClass("start")}),$(window).on("load",function(){$(".preloader").fadeOut(300)}),$(document).ready(function(){function t(){var t=window.pageYOffset;$(".animate").each(function(){var e=$(this).offset().top;2*o/3+t>e&&$(this).addClass("animation-start")})}if($(".js-hamburger").on("click",function(t){t.preventDefault();var o=$(this),e=$(".js-mobile-menu"),a=$("body");o.hasClass("is-active")?(o.removeClass("is-active"),e.removeClass("is-opened"),a.removeClass("no-scroll")):(o.addClass("is-active"),e.addClass("is-opened"),a.addClass("no-scroll"))}),$(".smooth-scroll").click(function(){$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500)}),$(".animate").offset()){var o=($(".animate").offset().top,$(window).height());$(window).scroll(t),t()}});
import { Component, AfterViewInit, Renderer2 } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  constructor (private renderer: Renderer2) {}

  ngAfterViewInit() {
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        debugger
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 72)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });
      $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
      });
      $('base').scrollspy({
        target: '#mainNav',
        offset: 75
      });
      var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
          $("#mainNav").addClass("navbar-scrolled");
        } else {
          $("#mainNav").removeClass("navbar-scrolled");
        }
      };
      navbarCollapse();
      $(window).scroll(navbarCollapse);
      $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
      });
  }
}

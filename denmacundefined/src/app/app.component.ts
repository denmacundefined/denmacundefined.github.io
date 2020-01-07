import { Component, AfterViewInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {

  urlPath: string = location.pathname;
  anotherLanguage: string = 'укр';
  actions: [];

  constructor (private renderer: Renderer2, private http: HttpClient) {
    if (this.urlPath !== '/') {
      this.anotherLanguage = 'eng';
    }
  }

  ngOnInit() {
    this.http.get('/assets/config.json').subscribe(response => {
      this.actions = response['actions'];
    });
  }

  changeLanguage() {
    if (this.urlPath === '/') {
      location.href = location.origin + '/ua/';
    } else {
      location.href = location.origin;
    }
  }

  ngAfterViewInit() {
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
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
      $('body').scrollspy({
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
        tLoading: '#%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        },
        image: {
          titleSrc: function (item) {
            return `<a href="${item.el.attr('title')}">${item.el.attr('title')}</a>`;
           }
        }
      });
  }
}

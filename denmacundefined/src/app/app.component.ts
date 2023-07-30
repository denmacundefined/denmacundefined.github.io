import { Component, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit, OnInit {

  urlPath = location.pathname;
  anotherLanguage = 'укр';
  actions: [];

  constructor(private renderer: Renderer2, private http: HttpClient) {
    if (this.urlPath !== '/') {
      this.anotherLanguage = 'eng';
    }
  }

  ngOnInit() {
    this.http.get('/assets/config.json').subscribe((response: any) => {
      this.actions = response.actions;
    });
  }

  runAllActions(event) {
    event.preventDefault();
    this.actions.forEach((item: any) => {
      window.open(item.link, item.name);
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
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          let target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 72)
            }, 1000, 'easeInOutExpo');
            return false;
          }
        }
      });
      $('.js-scroll-trigger').click(() => {
        $('.navbar-collapse').collapse('hide');
      });
      $('body').scrollspy({
        target: '#mainNav',
        offset: 75
      });
      const navbarCollapse = () => {
        if ($('#mainNav').offset().top > 100) {
          $('#mainNav').addClass('navbar-scrolled');
        } else {
          $('#mainNav').removeClass('navbar-scrolled');
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
          titleSrc: (item) => {
            return `<a href="${item.el.attr('title')}">${item.el.attr('title')}</a>`;
           }
        }
      });
  }
}

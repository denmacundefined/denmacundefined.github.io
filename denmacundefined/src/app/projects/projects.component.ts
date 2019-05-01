import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [{
    name: "Smart Watcher",
    link: "smart-watcher.denmacundefined.pp.ua",
    photoNumber: 1
  }, {
    name: "Smart Place Guard",
    link: "smart-place-guard.denmacundefined.pp.ua",
    photoNumber: 3
  }, {
    name: "Smart Place Server",
    link: "smart-place-server.denmacundefined.pp.ua",
    photoNumber: 2
  }]

  constructor() { }

  ngOnInit() {
  }

  visit(url, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    location.href = 'http://' + url;
  }
}

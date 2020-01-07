import { Component, OnInit,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/config.json').subscribe((response: any) => {
      this.projects = response.projects;
    });
  }

  visit(url, event: Event) {
    event.stopPropagation();
    event.preventDefault();
    location.href = 'http://' + url;
  }
}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-who-am-i',
  templateUrl: './who-am-i.component.html',
  styleUrls: ['./who-am-i.component.scss']
})
export class WhoAmIComponent implements OnInit {

  private isVideoDone: boolean;

  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalService.show(template);
    this.modalService.onHide.subscribe(item => {
      this.isVideoDone = true;
    });
  }

  ngOnInit() {
    this.isVideoDone = false;
  }
}

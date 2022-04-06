import { Component, OnInit, TemplateRef } from '@angular/core';
import {BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ngx-modals',
  templateUrl: './ngx-modals.component.html',
  styleUrls: ['./ngx-modals.component.css']
})
export class NgxModalsComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  closeModal(){
    this.modalRef.hide()
  }

}

import {Component, Inject, OnInit} from '@angular/core';
import {ScheduleService} from '../shared/schedule.service';
import {NgForm} from '@angular/forms';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(public scheduleService: ScheduleService,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.resetForm();
  }

  reloadMethod(){ this.document.location.reload(); }

  resetForm(form?: NgForm): void{
    if (form != null){
      form.resetForm();
    }
    this.scheduleService.formData = {
      schedule_id : null,
      name : '',
      description : ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.schedule_id == null){
      this.addSchedule(form);
      this.scheduleService.reloadMethod();
    } else {
      this.updateSchedule(form);
      this.scheduleService.reloadMethod();
    }
  }

  addSchedule(form: NgForm) {
    this.scheduleService.addSchedule(form.value);
    this.resetForm(form);
    this.reloadMethod();
    this.scheduleService.reloadMethod();
  }

  updateSchedule(form: NgForm) {
    this.scheduleService.updateSchedule(form.value);
    this.resetForm(form);
    this.reloadMethod();
    this.scheduleService.reloadMethod();
  }
}

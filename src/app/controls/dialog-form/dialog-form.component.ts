import { Component, OnInit, Input, ViewChildren, ViewChild, AfterViewInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { AutofocusDirective } from '../../directive/autofocus.directive';
import { Form } from '../../models/form';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.scss']
})
export class DialogFormComponent {

  @ViewChild(AutofocusDirective) autofocus: AutofocusDirective;
  @Output() onOK: EventEmitter<Form> = new EventEmitter<Form>();

  show = false;

  form: Form;

  open(form: Form) {
    this.show = true;
    this.form = Object.create(form);

    setTimeout(() => {
      if (this.autofocus) {
        this.autofocus.setFocus();
      }
    }, 0.1);
  }

  close() {
    this.show = false;
  }

  // disable the default action to close the modal popout after enter keypress
  onKeyPress(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  }

  onSubmit() {
    console.log("done");
    this.onOK.emit(this.form);
    this.show = false;
  }
}

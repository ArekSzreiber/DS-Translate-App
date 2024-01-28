import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-textarea',
  styles: [`
    @import "../../../../assets/variables";


    .textarea {
      @include text-md();
      background: none;
      border: none;
      color: var(--light);
      font-family: "DM Sans", sans-serif !important;
      min-height: 140px;
      outline: none;
      padding-top: 25px;
      resize: none;
      width: 100%;

      &::placeholder {
        color: var(--light);
        opacity: 1;
      }
    }
  `],
  template: `
    <textarea
      class="textarea"
      [placeholder]="placeholder"
      [maxLength]="maxLength ? maxLength : undefined"
      [ngModel]="text"
      (ngModelChange)="textChanged($event)"
      [readonly]="readonly"
      rows="5"
      cols="30"
    ></textarea>
    <app-character-counter
      *ngIf="maxLength"
      [current]="current"
      [maxLength]="maxLength"
    ></app-character-counter>
  `,
})
export class TextareaComponent {
  @Input() placeholder?: string;
  @Input() maxLength?: number;
  @Input() readonly: boolean = false;

  current: number = 0;
  text: string = '';

  textChanged($event: string) {
    this.current = $event.length;
  }

}

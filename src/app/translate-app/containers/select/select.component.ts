import {Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-select',
  styles: [`
    @import '../../../../assets/variables';
    
    .select {
      @include text-md();
      appearance: none;
      background: transparent url('/assets/Expand_down.svg') no-repeat;
      background-position-x: 100%;
      background-position-y: 50%;
      border-radius: 14px;
      border: 1px solid transparent;
      color: var(--grey);
      cursor: pointer;
      padding: 8px 20px 8px 10px;

      &:hover {
        color: var(--light);
      }
    }
  `],
  template: `
    <select 
      class="select" 
      name="" 
      id=""
    >
      <option value="spanish">Spanish</option>
      <option value="german">German</option>
      <option value="pl">Polish</option>
    </select>
  `
})
export class SelectComponent {

}

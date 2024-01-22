import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  styles: [`

    @import "../../../../assets/variables";

    .card {
      padding: 20px;
      margin: 0 20px;
      background: var(--grey-opacity);
      border: 2px solid var(--grey);
      border-radius: 20px;
    }
    
    .header {
      border-bottom: 2px solid var(--grey-darker);
      padding-bottom: 13px;
      display: flex;
      column-gap: 7px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .footer-buttons {
      display: flex;
      column-gap: 5px;
    }
  `],
  template: `
<div class="card">
  <header class="header">
    <app-selectable-button>Detect language</app-selectable-button>
    <app-selectable-button [selected]="true">English</app-selectable-button>
    <app-selectable-button>French</app-selectable-button>
    <select name="" id="">
      <option value="spanish">Spanish</option>
      <option value="german">German</option>
      <option value="polish">Polish</option>
      
    </select>
  </header>
  
<app-textarea></app-textarea>
  
  <footer class="footer">
    <div class="footer-buttons">
      <app-icon-button>
        <img ngSrc="../../../../assets/sound_max_fill.svg" width="24" height="24" alt="" style="fill: white">
      </app-icon-button>
      <app-icon-button>
        <img ngSrc="../../../../assets/Copy.svg" width="24" height="24" alt="">
      </app-icon-button>
    </div>
    <app-button></app-button>
  </footer>
</div>
  `,
})
export class CardComponent {

}

import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    @import '../../../../assets/variables';

    .button {
      background-color: var(--primary);
      border: 1px solid var(--primary-2);
      border-radius: 12px;
      padding: 10px 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      box-shadow: 0 0 0 var(--background);
      transition: transform 0.1s ease-in,
      box-shadow 0.1s ease-out;
    }

    .button:active {
      transform: translateY(3px);
    }

    .active {
      transition: box-shadow 0.3s ease;
      box-shadow: 0 0 4px 3px var(--light-darker);
    }

    .text {
      @include text-xl();
      color: var(--light);
      margin-left: 5px;
      align-self: center;
    }

    @media (min-width: 1025px) {
      .button {
        padding: 16px 30px;
      }
    }


  `],
  template: `
    <button
      type="button"
      class="button"
      [class.active]="active"
      (click)="toggleClicked()"
    >
      <img ngSrc="assets/Sort_alfa.svg" alt="A" width="24" height="24">
      <span class="text">Translate</span>
    </button>
  `,
})
export class ButtonComponent {
  @Output() isActive = new EventEmitter<boolean>();

  active: boolean = false;

  toggleClicked() {
    this.active = !this.active;
    this.isActive.emit(this.active);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'nx-cart-entry',
  template: `<nx-nx-welcome></nx-nx-welcome>`,
})
export class RemoteEntryComponent {}

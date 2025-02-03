import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  template: `
    <section>
      <h3>HELLO</h3>
    </section>
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent {}
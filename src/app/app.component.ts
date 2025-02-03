import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, TestComponent],
  template: `
    <main>
      <header class="brand-name">
        <img src="/metaverse.png" alt="logo" aria-hidden="true">
        <h3>Some text</h3>
      </header>
      <section class="content">
        <app-home></app-home>
        <app-test></app-test>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

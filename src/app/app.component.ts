import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dc-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public createComponent(): void {
    //
  }

  public destroyComponent(): void {
    //
  }
}

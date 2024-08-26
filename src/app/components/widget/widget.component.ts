import { Component, input, output } from '@angular/core';

@Component({
  selector: 'dc-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  public title = input<string>('Widget title');
  public description = input<string>('Widget description');

  public closed = output<void>();
}

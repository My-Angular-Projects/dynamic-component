import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  inject,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetComponent } from './components/widget/widget.component';

@Component({
  selector: 'dc-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private widgetContainerRef = viewChild('widget', { read: ViewContainerRef });
  private widgetComponentRef!: ComponentRef<WidgetComponent>;

  public createComponent(): void {
    this.widgetContainerRef()?.clear(); // очищаем все старые динамические компоненты
    this.widgetComponentRef =
      this.widgetContainerRef()!.createComponent(WidgetComponent);
  }

  public destroyComponent(): void {
    // => обращение к ссылке на компонент WidgetComponent
    // this.widgetComponentRef.destroy();

    // => обращение к ссылке на контейнер компонента WidgetComponent
    // this.widgetContainerRef()?.remove(2);
    this.widgetContainerRef()?.clear();
  }
}

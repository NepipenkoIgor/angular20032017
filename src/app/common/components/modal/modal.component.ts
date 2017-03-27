import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef, HostListener,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { ModalService } from './modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @ViewChild('modalContent', { read: ViewContainerRef })
  public modal: ViewContainerRef;

  public isOpen: boolean = false;
  public childComponent: ComponentFactory<any>;
  public modalContext: ComponentRef<any>;

  public constructor(
    private _modalService: ModalService,
    private _componentFactoryResolver: ComponentFactoryResolver
  ) {
    this._modalService.modalSequence$
      .subscribe(({ component, context }: { component: any, context: any }) => {
        this.isOpen = true;
        this.childComponent = this._componentFactoryResolver.resolveComponentFactory(component);
        this.modalContext = this.modal.createComponent(this.childComponent);
        Object.keys(context)
          .forEach((key: string) => this.modalContext.instance[key] = context[key]);
      });

  }

  @HostListener('window:keyup', ['$event.keyCode'])
  public close(code: number): void {
    if (code !== 27) {
      return;
    }
    this.modalContext.destroy();
    this.isOpen = false;
  }

}

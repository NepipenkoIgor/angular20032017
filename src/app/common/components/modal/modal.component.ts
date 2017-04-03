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
      .subscribe((componentObj: { component: any, context: any }) => {
        if (!componentObj) {
          this.close();
          return;
        }
        this.isOpen = true;
        this.childComponent = this._componentFactoryResolver.resolveComponentFactory(componentObj.component);
        this.modalContext = this.modal.createComponent(this.childComponent);
        Object.keys(componentObj.context)
          .forEach((key: string) => this.modalContext.instance[key] = componentObj.context[key]);
      });

  }

  @HostListener('window:keyup', ['$event.keyCode'])
  public close(code: number = 27): void {
    if (code !== 27) {
      return;
    }
    this.modalContext.destroy();
    this.isOpen = false;
  }

}

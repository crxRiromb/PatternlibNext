import { Injectable } from '@angular/core';
import { ToastItem } from '@liebherr/patternlib/dist/types/components';
import { Subject } from 'rxjs';
import { ToastItemBuilder } from './toast-item-builder';
import { ToastType } from './toast-types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private messageSource = new Subject<ToastItem>();
  public messageObserver = this.messageSource.asObservable();

  // Payload is the itemId
  public closeEventSource = new Subject<string>();
  public closeEventObserver = this.closeEventSource.asObservable();

  // Payload is the itemId
  public undoEventSource = new Subject<string>();
  public undoEventObserver = this.undoEventSource.asObservable();

  /**
   * Publishes a toast message to the toast component.
   * @param builder
   * @returns itemId
   */
  public publishBuilderInstance(builder: ToastItemBuilder): string {
    this.messageSource.next(builder.getItem());

    // only string (number type will be removed in patternlib)
    const _itemId = builder.getItem().itemId ?? '';
    return _itemId.toString();
  }

  public getBuilderInstance(
    type: ToastType = ToastType.Default,
    message: string = '',
    subline: string = ''
  ): ToastItemBuilder {
    return new ToastItemBuilder(type, message, subline);
  }

  /**
   * Shortcut methods for a default toast message.
   * @param message
   * @param subline
   */
  public showInfo(message: string, subline: string = '') {
    this.publishBuilderInstance(new ToastItemBuilder(ToastType.Default, message, subline));
  }

  /**
   * Shortcut methods for an error toast message.
   * @param message
   * @param subline
   */
  public showError(message: string, subline: string = '') {
    this.publishBuilderInstance(new ToastItemBuilder(ToastType.Error, message, subline));
  }

  /**
   * Shortcut methods for an success toast message.
   * @param message
   * @param subline
   */
  public showSuccess(message: string, subline: string = '') {
    this.publishBuilderInstance(new ToastItemBuilder(ToastType.Success, message, subline));
  }

  /**
   * Shortcut methods for an warning toast message.
   * @param message
   * @param subline
   */
  public showWarning(message: string, subline: string = '') {
    this.publishBuilderInstance(new ToastItemBuilder(ToastType.Warning, message, subline));
  }
}

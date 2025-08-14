import { ToastType } from './toast-types';
import { ToastItem } from '@liebherr/patternlib/dist/types/components';

export class ToastItemBuilder {
  private _item: ToastItem;

  public constructor(type: ToastType = ToastType.Default, message: string, subline: string = '') {
    this._item = {
      autoHide: true,
      customContent: '',
      delay: 3000, // Milliseconds
      itemId: this.uniqueItemId(),
      message: message,
      showIcon: true,
      showUndo: false,
      subline: subline,
      type: type,
      undoLabel: '',
    };
  }

  public getItem(): ToastItem {
    return this._item;
  }

  public setAutoHide(flag: boolean): void {
    this._item.autoHide = flag;
  }

  public setCustomContent(content: string): void {
    this._item.customContent = content;
  }

  public setDelay(milliseconds: number): void {
    this._item.delay = milliseconds;
  }

  public setId(id: string): void {
    this._item.itemId = id;
  }

  public setMessage(message: string, subline: string = ''): void {
    this._item.message = message;
    this._item.subline = subline;
  }

  public setShowIcon(flag: boolean): void {
    this._item.showIcon = flag;
  }

  public setShowUndo(flag: boolean): void {
    this._item.showUndo = flag;
  }

  public setShowUndoLabel(label: string): void {
    this._item.showUndo = true;
  }

  public setSubline(subline: string): void {
    this._item.subline = subline;
  }

  public setType(type: ToastType): void {
    this._item.type = type;
  }

  public setUndoLabel(label: string): void {
    this._item.undoLabel = label;
  }

  /**
   * Generate a random alphanumeric itemId of type string with length 6.
   * @example "yyaroo6"
   */
  private uniqueItemId(): string {
    // return Math.floor(Math.random() * Date.now()).toString(8);
    return Math.random().toString(36).substring(2, 8);
  }
}

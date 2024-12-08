import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerToastService {
  public $toastStream = new Subject();
  private counter = 1;

  constructor() {}

  newToast(
    toastType?: string,
    message?: string,
    toastStyle?: any
  ) {
    const id = this.counter++;
    this.$toastStream.next({
      id:id,
      toastType: toastType,
      message: message,
      toastStyle,
    });
  }

}

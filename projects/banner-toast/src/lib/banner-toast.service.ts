import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerToastService {
  public $toastStream = new Subject();
  constructor() {}

  newToast(
    toastType?: string,
    message?: string,
    toastStyle?: any
  ) {
    this.$toastStream.next({
      toastType: toastType,
      message: message,
      toastStyle,
    });
  }

  getNewToast() {}
}

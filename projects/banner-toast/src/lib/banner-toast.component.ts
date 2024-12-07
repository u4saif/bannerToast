import { Component, Input, OnInit } from '@angular/core';
import { BannerToastService } from './banner-toast.service';
import { animate, style, transition, trigger } from '@angular/animations';

export interface Toast {
  id: number;
  message: string;
  toastType: 'success' | 'error' |'info' | 'warning';
  toastStyle: {
    width?: string;
    iconText?: string;
    borderRadius?: string;
    textColor?: string;
    backgroundColor?: string;
    delay?:number;
  };
}

@Component({
  selector: 'banner-toast',
  templateUrl: './banner-toast.component.html',
  styleUrls: ['./banner-toast.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20%)' }),
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '250ms ease-in-out',
          style({ opacity: 0, transform: 'translateX(20%)' })
        ),
      ]),
    ]),
  ],
})
export class BannerToastComponent implements OnInit {
  toasts: Toast[] = [];
  @Input() position: string = 'topRight';

  defaultToastStyle = {
    borderRadius: '0px',
    textColor: '#fff',
    dalay: 5000
  };

  constructor(private toastService: BannerToastService) {}

  ngOnInit(): void {
    this.toastService.$toastStream.subscribe((toast: any) => {
      const styledToast = this.applyDefaultStyle(toast);
      this.toasts.push(styledToast);
      this.autoDismissToast(styledToast.id, styledToast.toastStyle.delay );
    });
  }

  /**
   * Merges default styles with incoming toast styles
   * @param toast - The toast object
   * @returns A toast object with default styles applied
   */
  private applyDefaultStyle(toast: Toast): Toast {
    return {
      ...toast,
      toastStyle: {
        ...this.defaultToastStyle,
        ...toast.toastStyle, // Override defaults with provided styles
      },
    };
  }

  /**
   * Automatically removes a toast after a specified timeout
   * @param id - Toast ID
   * @param delay - Time in milliseconds to dismiss the toast
   */
  private autoDismissToast(id: number, delay: number = 5000): void {
    setTimeout(() => this.removeToast(id), delay);
  }

  /**
   * Removes a toast by its ID
   * @param id - Toast ID
   */
  removeToast(id: number): void {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }

  /**
   * Triggered when a toast close button is clicked
   * @param id - Toast ID
   */
  closeToast(id: number): void {
    this.removeToast(id);
  }

  /**
   * Handles debug or test calls to create a new toast
   */
  getNewToast(): void {
    this.toastService.newToast();
    console.log('Toast triggered');
  }
}

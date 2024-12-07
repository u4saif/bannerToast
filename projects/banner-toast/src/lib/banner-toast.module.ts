import { NgModule } from '@angular/core';
import { BannerToastComponent } from './banner-toast.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [BannerToastComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [BannerToastComponent],
})
export class BannerToastModule {}

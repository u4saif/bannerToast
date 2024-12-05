import { NgModule } from '@angular/core';
import { BannerToastComponent } from './banner-toast.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BannerToastComponent],
  imports: [CommonModule],
  exports: [BannerToastComponent],
})
export class BannerToastModule {}

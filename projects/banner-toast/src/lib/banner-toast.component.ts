import { Component, OnInit } from '@angular/core';
import { BannerToastService } from './banner-toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'banner-toast',
  templateUrl: './banner-toast.component.html',
  styleUrls: ['./banner-toast.component.scss'],
})
export class BannerToastComponent implements OnInit{
  newToasts : any ; 
  showToast:boolean = false;
  toastType:string = 'error'
  timeOutID : any ;
  position:string = 'topRight'; //topLeft bottomLeft bottomRight center
  width:string = "500px"; 
  textColor:string = "#fff";  
  borderRadius:string = "";  
  backgroundColor:string = "1f1f1f";
  title:string = '';  

  constructor(private toastService:BannerToastService){}

  ngOnInit(): void {
     this.toastService.$toastStream.subscribe((data:any)=>{
      console.log(data);
      if (this.timeOutID){
       clearTimeout(this.timeOutID);
      }
      this.newToasts = data;
      this.toastType = this.newToasts?.toastType || 'error';
      this.title = this.newToasts?.title || '';
      this.borderRadius = this.newToasts.toastStyle?.borderRadius;
      this.backgroundColor = this.newToasts.toastStyle?.backgroundColor;
      this.position = this.newToasts.toastStyle?.position || 'topRight';
      this.showToast = true;

      this.timeOutID = setTimeout(()=>{
        this.showToast = false;
      },100000);
    });
    this.toastService.newToast();  
  };

  getNewToast(){
    this.toastService.newToast(); 
    console.log("toast clicked")
  }

  close(){
    if (this.timeOutID){
      clearTimeout(this.timeOutID);
      this.showToast = false;
     }
  }
}

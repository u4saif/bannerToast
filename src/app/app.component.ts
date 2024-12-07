import { Component } from '@angular/core';
import { BannerToastService } from 'projects/banner-toast/src/lib/banner-toast.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banner';

  constructor(private toastService:BannerToastService ){}

  getToast(type?:string,aa?:string){
    const toastStyle  = {
      borderRadius:"4px",
      // textColor: '#fff',
      // iconText:"Error ❌",
      // backgroundColor: '#1f1f1f' 
      // delay:10000
    }

    const message = "Please checke the detaiils again :   "; 
    this.toastService.newToast( type,message,toastStyle); 
    // console.log("toast clicked")
  } 

}

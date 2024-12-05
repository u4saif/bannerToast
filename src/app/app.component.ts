import { Component } from '@angular/core';
import { BannerToastService} from "banner-toast";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banner';

  constructor(private toastService:BannerToastService ){}

  getToast(type?:string){
    const toastStyle  = {
      // borderRadius:"8px",
      // textColor: '#fff',
      // position:'bottomRight',
      iconText:"Error",
      // backgroundColor: '#1f1f1f'
    }

    const message = "This is test message from parent. Please checke the detaiils again";
    this.toastService.newToast( type,message,toastStyle); 
    console.log("toast clicked")
  } 

}

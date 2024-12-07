# BannerToast

It build with Angular and can be consumed in all the Angular projects

### Demo 👉 [Click Here](https://angular-e7kanm.stackblitz.io) 
[StackBlitz LInk](https://stackblitz.com/edit/angular-e7kanm?file=src%2Fmain.ts)

## Usage Example: 

# 1) First Install the Package then 
```
import { BannerToastModule, BannerToastService } from 'banner-toast';

@NgModule({
  declarations: [
    AppComponent
    ..
  ],
  imports: [
    BrowserModule,
    BannerToastModule
    ..
],
...
})
```

# 2) Then Import the Service In the component where You want to use it. 

```
@Component({
  selector: 
    ...
    ..
})
...
constructor(private toastService:BannerToastService ){}
```

# 3) And Add this in the App Component html 

## Configuration

### Input Properties

<table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>position</code></td><td><code>string</code></td><td><code>topRight</code></td><td>Toast Position on the screen (<code>topLeft</code>, <code>center</code>, <code>bottomRight</code>, <code>bottomLeft</code>).</td></tr></tbody></table>

# 4) Consumming the Service to Generate the Toasts 

## Simple 
```javascript
    const message = "Please check the details again.";
    this.toastService.newToast( 'error',message); 
    this.toastService.newToast( 'info',message); 
    this.toastService.newToast( 'success',message); 
    this.toastService.newToast( 'warning',message); 
```

# Advance Sample

```javascript

    const toastStyle  = {
      borderRadius:"8px",
      textColor: '#fff',
      position:'bottomRight',
      iconText:"Error",
      backgroundColor: '#1f1f1f'
      delay:10000
    }

    const message = "Please check the advance sample.";
    this.toastService.newToast( type,message,toastStyle); 
```





# BannerToast 
### 👉👉 [NPM Package Link](https://www.npmjs.com/package/banner-toast)

It build with Angular and can be consumed in all the Angular projects

## Usage Example: 

# 1) First Install the Package then 
```
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

```html
<banner-toast></banner-toast>
```
</hr>

# 4) Consumming the Service to Generate the Toasts 

## Simple 
```javascript
    const message = "Please check the details again.";
    this.toastService.newToast( 'Error',message); 
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
    }

    const message = "Please check the advance sample.";
    this.toastService.newToast( type,message,toastStyle); 
```





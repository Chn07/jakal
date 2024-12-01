import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { 
  IonApp, 
  IonRouterOutlet, 
  IonHeader, 
  IonMenu, 
  IonAvatar, 
  IonItem, 
  IonText, 
  IonLabel, 
  IonContent, 
  IonIcon, 
  IonMenuToggle 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  add, 
  bagHandle, 
  bagHandleOutline, 
  bagHandleSharp, 
  checkmarkCircleOutline, 
  documentLockOutline, 
  documentLockSharp, 
  homeOutline, 
  homeSharp, 
  informationCircleOutline, 
  informationCircleSharp, 
  logOutOutline, 
  logOutSharp, 
  personOutline, 
  personSharp, 
  remove, 
  star, 
  timeOutline, 
  timeSharp, 
  trashOutline, 
  callOutline, 
  callSharp, 
  codeOutline, 
  codeSharp, 
  navigate,
  keyOutline,
  keySharp,
  lockClosedOutline,
  lockClosedSharp,
  mailOutline,
  mailSharp,
  arrowBack
} from 'ionicons/icons';
import { NavController } from '@ionic/angular'; // Import NavController

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp, 
    IonRouterOutlet, 
    IonHeader, 
    IonMenu, 
    IonAvatar, 
    IonItem, 
    IonText, 
    IonLabel, 
    IonContent, 
    IonIcon, 
    IonMenuToggle, 
    NgClass
  ],
})
export class AppComponent {
  profile = {
    name: 'Chan Bolima',
    email: 'ChanBolima123@gmail.com',
    number: '09277953445',
  };

  pages = [
    { title: 'Home', url: '/home', icon: 'home', active: true },
    { title: 'Cart', url: '/home/cart', icon: 'bag-handle', active: false }, // Cart button should navigate to /home/cart
    { title: 'Company History', url: '/company', icon: 'time', active: false },
    { title: 'About App', url: '/about', icon: 'information-circle', active: false },
    { title: 'Developers', url: '/developers', icon: 'code', active: false },
    { title: 'Contact Us', url: '/contact', icon: 'call', active: false },
    { title: 'Sign Out', icon: 'log-out', route: 'true', active: false },
  ];

  constructor(private navCtrl: NavController) { // Inject NavController
    this.addAllIcons();
  }

  addAllIcons() {
    addIcons({
      star,
      bagHandleOutline,
      bagHandle,
      bagHandleSharp,
      trashOutline,
      add,
      remove,
      checkmarkCircleOutline,
      homeOutline,
      homeSharp,
      informationCircleOutline,
      informationCircleSharp,
      documentLockOutline,
      documentLockSharp,
      logOutOutline,
      logOutSharp,
      personOutline,
      personSharp,
      timeOutline,
      timeSharp,
      callOutline, 
      callSharp,   
      codeOutline, 
      codeSharp,  
      keyOutline,
      keySharp,
      lockClosedOutline,
      lockClosedSharp,
      mailOutline,
      mailSharp,
      arrowBack
    });
  }

  onItemTap(page: any) {
    if (!page?.active) {
      const index = this.pages.findIndex((x) => x.active);
      this.pages[index].active = false;
      page.active = true;
    }

    if (page?.route) {
      this.logout(); // Call logout when "Sign Out" button is clicked
    } else if (page?.title === 'Cart') {
      console.log('Navigating to Cart page');
      this.navCtrl.navigateForward(page.url); // Navigate to /home/cart
    } else {
      console.log('Navigating to: ', page.url);
      this.navCtrl.navigateForward(page.url); // Navigate to other pages
    }
  }

  logout() {
    this.navCtrl.navigateRoot('/login'); // Navigate to the login page
  }
}

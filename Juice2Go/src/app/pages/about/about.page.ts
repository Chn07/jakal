import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  imports: [ IonicModule ]
})
export class AboutPage {

  constructor(private navCtrl: NavController) {}

  // Optional: You can add custom back button behavior if needed
  // back() {
  //   this.navCtrl.back();
  // }

}

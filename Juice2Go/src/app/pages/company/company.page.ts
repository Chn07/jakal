import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-company',
  templateUrl: 'company.page.html',
  styleUrls: ['company.page.scss'],
  imports: [ IonicModule ]
})
export class CompanyPage {

  constructor(private navCtrl: NavController) {}

  // Optional: You can add custom back button behavior if needed
  // back() {
  //   this.navCtrl.back();
  // }

}

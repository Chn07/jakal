import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-developers',
  templateUrl: './developers.page.html',
  styleUrls: ['./developers.page.scss'],
  imports: [ IonicModule]
})
export class DevelopersPage {
  developers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      quote: '"Code is poetry."',
      image: 'assets/img/developer1.jpg',
    },
    {
      name: 'Maria Gonzalez',
      role: 'UI/UX Designer',
      quote: '"Design is intelligence made visible."',
      image: 'assets/img/developer2.jpg',
    },
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-quran',
  templateUrl: './quran.page.html',
  styleUrls: ['./quran.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule], 
})
export class QuranPage {
  constructor() {}
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Tambahkan ini
import { IonicModule } from '@ionic/angular'; // <-- Tambahkan ini

@Component({
  selector: 'app-hadist',
  templateUrl: './hadist.page.html',
  styleUrls: ['./hadist.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule], // <-- Tambahkan baris ini
})
export class HadistPage {
  constructor() {}
}
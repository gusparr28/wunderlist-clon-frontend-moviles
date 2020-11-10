import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slides: { img: string, description: string }[] = [
    {
      img: "https://res.cloudinary.com/instagram-web2/image/upload/v1604963762/wunderlist-clon-moviles/slide06_pljtrm.jpg",
      description: "Organize your ideas in an easy way"
    },
    {
      img: "https://res.cloudinary.com/instagram-web2/image/upload/v1604963796/wunderlist-clon-moviles/slide04_kbttiz.jpg",
      description: "Prioritize your objectives"
    },
    {
      img: "https://res.cloudinary.com/instagram-web2/image/upload/v1604963786/wunderlist-clon-moviles/slide03_cxaeww.png",
      description: "Set goals"
    }
  ]

  constructor(private _navCtrl: NavController) { }

  ngOnInit() {
  }

  public start() {
    this._navCtrl.navigateBack('/signup');
  }

}

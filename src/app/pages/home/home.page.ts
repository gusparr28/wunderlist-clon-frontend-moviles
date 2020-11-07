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
      img: "/assets/slides/slide01.png",
      description: "Organize your ideas in an easy way"
    },
    {
      img: "/assets/slides/slide02.png",
      description: "Prioritize your objectives"
    },
    {
      img: "/assets/slides/slide03.png",
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

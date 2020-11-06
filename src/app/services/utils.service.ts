import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public loading: any;

  constructor(private _loadingCtrl: LoadingController) { }

  async presentLoading(message: string) {
    this.loading = await this._loadingCtrl.create({
      message
    });
    return this.loading.present();
  }
}

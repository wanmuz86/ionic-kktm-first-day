import { Component } from '@angular/core';
import { ToastController, AlertController , ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Create a new variable, name and the value is Muzaffar
  name = "Muzaffar";
  age = 30
  counter = 0
  message = ""

  byeName =""
  byeAge = 0

  constructor(
    // create a variable to toastController of type ToastController (Class)
    public toastController: ToastController, 
    public alertController: AlertController,
    public actionSheetController: ActionSheetController
    ) { }

  sayHello() {
    alert('Hello World!');
  }
  increment() {
    this.counter++;
    this.message = "";
  }
  async decrement() {
    if (this.counter == 0) {
      // this.message = "Number cannot be less than 0";
      const toast = await this.toastController.create({
        message: 'Number cannot be less than 0',
        duration: 2000
      });
      toast.present();
    }
    else {
      this.counter--;
    }
  }
  reset() {
    this.counter = 0;
    this.message = "";
  }

  async alertPressed(){
    const alert = await this.alertController.create({
      header: 'Hello World!',
      message: "Contoh message di dalam alert",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

  }

  async actionPressed(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  sayGoodbye(){
    console.log(`Goodbye ${this.byeName}, you are ${this.byeAge} years old!`);
  }
}

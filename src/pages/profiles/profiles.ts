import { ProfileProvider } from './../../providers/profile/profile';
import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { ChatRoomsProvider } from './../../providers/chat-rooms/chat-rooms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';

/**
 * Generated class for the ProfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
 private chatRooms:ChatRoomsProvider,
 private alertCtrl:AlertController,private authProvider:AuthProvider,private profile:ProfileProvider) {
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }
  // logout(){
  //   this.authProvider.signOut().then(() => {
  //   this.navCtrl.setRoot('LoginPage')
  //   })
  // }
  // goToProfile(){
  //   this.navCtrl.push('ProfilePage')
  // }
}

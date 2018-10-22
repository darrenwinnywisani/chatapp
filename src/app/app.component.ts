
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyABTii28GziUzot61Lyj8SoJsd85-fCi9w",
  authDomain: "my-first-firebase-projec-5f38c.firebaseapp.com",
  databaseURL: "https://my-first-firebase-projec-5f38c.firebaseio.com",
  projectId: "my-first-firebase-projec-5f38c",
  storageBucket: "my-first-firebase-projec-5f38c.appspot.com",
  messagingSenderId: "375056967621"
}; 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
    const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      if(!user){
        this,this.rootPage='LoginPage'
        unsubscribe();
      }else{
        this.rootPage='RoomsPage'
        unsubscribe();
      }
    })
  }
}


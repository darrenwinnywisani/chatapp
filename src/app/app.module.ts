import { ProfilesPage } from './../pages/profiles/profiles';
import { ProfilePage } from './../pages/profile/profile';
import { LoginPage } from './../pages/login/login';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { ChatRoomsProvider } from '../providers/chat-rooms/chat-rooms';
import { ProfileProvider } from '../providers/profile/profile';
import { ChatProvider } from '../providers/chat/chat';

import { RoomsPage } from '../pages/rooms/rooms';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ChatRoomsProvider,
    ProfileProvider,
    ChatProvider
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule,  } from '@angular/router';
import { PicturesComponent } from './Components/pictures/pictures.component';
import { MapComponent } from './Components/map/map.component';
import { ShareComponent } from './Components/share/share.component';
import { FilmsComponent } from './Components/films/films.component';
import { TripsComponent } from './Components/trips/trips.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';


const routes: Routes = [
    { path: 'pictures',component: PicturesComponent },
    { path: 'films',component: FilmsComponent },
    { path: 'trips',component: TripsComponent },
    { path: 'home',component: MapComponent },
    { path: 'share',component: ShareComponent },
    { path: 'settings',component: SettingsComponent },
    { path: 'user-profile',component: UserProfileComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

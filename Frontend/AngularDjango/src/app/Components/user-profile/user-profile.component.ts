import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { PicturesService } from 'src/app/services/pictures.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile: any;
  avatar: any;
  isAvatarLoading: boolean;
  constructor(private profileService: ProfileService) { }
  isDisable: boolean = true;
  ngOnInit() {
    this.getUserData();
    this.getAvatar();
  }
  getUserData(): void {
    this.profileService.getProfile().subscribe(data => {
      this.userProfile = data
    });

  }
  getAvatar(): void {
    this.isAvatarLoading = true;
    this.profileService.getAvatar().subscribe(data => {
      this.createImageFromBlob(data);
      this.isAvatarLoading = false;
    }, error => {
      this.isAvatarLoading = false;
      console.log(error);
    });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.avatar = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
   }

  onSubmit() {
    this.profileService.updateProfile(this.userProfile).subscribe();
    this.isDisable = !this.isDisable;
  }
  onClick() {
    this.isDisable = !this.isDisable;
  }
  onAvatarChange(event) {
    console.log(event.target.files[0] instanceof Blob)
  }
  photoURL: string; 
  onSelectFile(event) { 
    // called each time file input changes 
    if (event.target.files && event.target.files[0]) { var reader = new FileReader(); 
      reader.readAsDataURL(event.target.files[0]); 
      // read file as data url 
      reader.onload = (event) => { // called once readAsDataURL is completed 
         //this.avatar = (event.target as EventTarget).result;
         //this.profileService.updateAvatar(this.photoURL)
       
      } } }

}

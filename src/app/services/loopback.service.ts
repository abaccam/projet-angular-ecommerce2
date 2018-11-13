import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../entities/profile';
import { map, tap } from "rxjs/operators";

// import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoopbackService {

  responsLoginData: any;
  token: string;

  /*
    httpBase is for external server
  */
  //httpBase = `http://localhost:3000/api/profiles`;
  /*
    httpBase this one is for local test :
  */
  // httpBase = `http://localhost:3000/api/profiles`;
  httpBase = `http://51.75.207.108:80/api/profiles`;

  private getToken() {
    this.token = JSON.parse(localStorage.getItem('token'));
    //console.log('mgServece : token from store : ', this.token);
  }

  constructor(private http: HttpClient) { }

  /**
   * @method CRUD 
   */
  getById(id) {
    this.getToken();
    return this.http.get<Profile>(`${this.httpBase}/${id}?access_token=${this.token}`);
  }
  // saveProfileToDB(newUser) {
  //   this.getToken();
  //   this.http.post<Profile>(`${this.httpBase}?access_token=${this.token}`, newUser).pipe(
  //     map(data => {

  //       let dysAideProfile = this.userData.getAidodysProfile()
  //       if (dysAideProfile) {
  //         data.aidodysProfile = [];
  //         data.aidodysProfile[0] = dysAideProfile
  //       } else {
  //         data.aidodysProfile = []
  //         data.aidodysProfile[0] = null
  //       }
  //       this.cookieService.set("optionsAidodys", JSON.stringify(dysAideProfile), 100)
  //       //console.log(this.cookieService.get("optionsAidodys"));

  //       return data
  //     })
  //   )
  // }
  // deleteProfileById(id) {
  //   this.getToken();
  //   return this.http.delete(`${this.httpBase}/${id}?access_token=${this.token}`)

  // }
  // updateProfile(profile: Profile, indexProfile: number = 0, indexAidodys: number = 0) {
  //   this.getToken();
  //   if (!profile.userProfile) {
  //     profile.userProfile = []
  //   }
  //   if (!profile.aidodysProfile) {
  //     profile.aidodysProfile = []
  //   }
  //   //console.log(this.userData.getCurrentProfileUser());
  //   profile.aidodysProfile[indexAidodys] = this.userData.getAidodysProfile();
  //   profile.userProfile[indexProfile] = this.userData.getCurrentProfileUser()
  //   console.log('inside update', profile);
  //   return this.http.patch<Profile>(`${this.httpBase}/${profile.id}?access_token=${this.token}`, profile)

  // }


  /**
   * @method USER : newUser, login, logout
   */
  newUser(profile) {
    return this.http.post<Profile>(`${this.httpBase}`, profile);
  }
  login(profile) {
    return this.http.post<Profile>(`${this.httpBase}/login`, profile);
  }
  logout(token) {
    return this.http.post(`${this.httpBase}/logout?access_token=${token}`, this.responsLoginData).pipe(
      tap(value => {
        localStorage.removeItem('token');
        this.token = null;
      })
    )
  }
  resetPasswordRequest(sendRequestEmail) {
    // this.getToken();
    console.log('___-_-_-_-_-_-_-_-_-_-_- sendRequestEmail :', sendRequestEmail);
    return this.http.post(`${this.httpBase}/reset`, sendRequestEmail);
  }
  getDevis(id, token){
    return this.http.get<Object[]>(`${this.httpBase}/${id}/devis/?access_token=${token}`)

  }
}

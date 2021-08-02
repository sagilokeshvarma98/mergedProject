import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hp:HttpClient) { }

  login(data:any):Observable<any>{
    console.log(data);
    return this.hp.post("http://ec2-52-66-211-132.ap-south-1.compute.amazonaws.com:8080/onlineshopping/authenticate",data)
    // .pipe(
    //   map(user => {
    //     return user
    //     if(user){
    //    localStorage.setItem("token",data)
    //     }
    // })
    // )
  }

  logout(){
    localStorage.removeItem("token")
  }


  getToken(){
    return JSON.parse(localStorage.getItem("token") || '{}')
  }

}

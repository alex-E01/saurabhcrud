import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  username:any;
  gender :any ;
  mothername:any;
  fathername: any;
  mobilenumber: any;
  email:  any ; 
  address: any ;
  Password: any ; 
  userData:any=[];
  constructor( 
    public router:Router 
  ) {
 
  }

  ionViewWillEnter(){
    let saveData : any =  localStorage.getItem('userData');
    if(saveData != null){
      this.userData  = JSON.parse(saveData);
      console.log("userData:",this.userData);
    }
  }

 saveData(){
    let saveData : any = {
      username:this.username,
      gender:this.gender,
      mothername:this.mothername,
      fathername:this.fathername,
      mobilenumber:this.mobilenumber,
      email:this.email,
      address:this.address,
      password:this.Password
    }
    if(this.username != null && this.gender != null && this.mothername != null && this.fathername != null && this.mobilenumber != null && this.email != null && this.Password != null){
      console.log('username',saveData)
    this.userData.push(saveData);
    console.log(this.userData);
    localStorage.setItem('userData',JSON.stringify(this.userData));
    this.router.navigate(['/list'])
    }
    else
    {
      alert('Please fill All Detils');
    }
    
    
    
  }
 

}

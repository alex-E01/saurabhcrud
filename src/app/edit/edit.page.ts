import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
 index:any;

  username:any;
  gender :any ;
  mothername:any;
  fathername: any;
  mobilenumber: any;
  email:  any ; 
  address: any ;
  Password: any ; 
  userData:any=[];
  singleuser:any;

  userlist : any =[];
  constructor(
    public activatedRoute:ActivatedRoute,
    private router : Router
  ) {
    // alert('akash');

    this.index=this.activatedRoute.snapshot.paramMap.get("id");
    console.log("index:",this.index);
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('Received on Bin Page:', params);
      this.singleuser = JSON.parse(params['userdata']);
      console.log('singleuser==>',this.singleuser['username'])   


      this.username = this.singleuser['username'];
      this.gender = this.singleuser['gender'];
      this.mothername = this.singleuser['mothername'];
      this.fathername = this.singleuser['fathername'];
      this.mobilenumber = this.singleuser['mobilenumber'];
      this.email = this.singleuser['email'];
      this.address = this.singleuser['address'];
      this.Password = this.singleuser['password'];
      
    });

    let saveData: any = localStorage.getItem('userData');
    if (saveData != null) {
      this.userlist = JSON.parse(saveData);
      console.log("userlist:", this.userlist);
    }

  }
  ngOnInit(): void {
   
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

    this.userlist[this.index] = saveData;
    localStorage.setItem('userData',JSON.stringify(this.userlist));
    this.router.navigate(['/list']);
 
  }


  

}

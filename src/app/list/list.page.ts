import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router} from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  userlist: any = [];
  
  
  constructor(
    private alertController: AlertController,
    public router : Router
  ) { }


  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.showdata();
  }

  showdata() {
    let saveData: any = localStorage.getItem('userData');
    if (saveData != null) {
      this.userlist = JSON.parse(saveData);
      console.log("userlist:", this.userlist);
    }
  }
 async deleteuserdata(index :any) {
    const alert = await this.alertController.create({
      header: 'Alert!',
      message : 'Are you sure?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("Cancel");
          },
        },
        {
          text: 'YES',
          role: 'confirm',
          handler: () => {
            //customcode
            
            // let itemt = this.userlist;
            // delete itemt[index];

            this.userlist.splice(index,1);
            localStorage.setItem('userData',JSON.stringify( this.userlist))
            this.showdata();
          },
        },
      ],
    });

    await alert.present();
  }

  goToBin(data:any,i:any) {
    console.log('data',data)
    const navigationExtras = {
      queryParams: {
        userdata: JSON.stringify(data),
      }
    };
    console.log('Go To Bin:', data);
    this.router.navigate(['/edit/'+i], navigationExtras);
  }

}


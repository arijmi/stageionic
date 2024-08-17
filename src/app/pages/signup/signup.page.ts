import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/authentification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm! :FormGroup;

  constructor(public formBuilder :FormBuilder ,public loadingCtrl:LoadingController, public authService:AuthentificationService) { }

  ngOnInit() {
    this.regForm=this.formBuilder.group({
      fullname:['',[Validators.required]],
      email:['',[
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
      ]],
      password:['',[
        Validators.required,
    
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")
      ]],
    })
  }
  get errorControle(){
    return this.regForm?.controls;
  }
  async signup(){
    const loading =await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid){
      
    }
  }

}

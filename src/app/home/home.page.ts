import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private cepService : CepService , public toastController: ToastController ) {}
  cep : any = "";
  consulta : any = "";
  buscarCep(){
    var dados;
    this.cepService.getCEP(String(this.cep)).subscribe( (data) => {
      dados = "bairro: " + data['bairro'] + "\ncep: " + data['cep'] + "\ncomplemento: " + data['\ncomplemento'];
      dados += "\nddd: " + data['ddd'] + "\ngia: " + data['gia'] + "\nibge: " + data['ibge'] + "\nlocalidade: " + data['localidade'];
      dados += "\nlogradouro: " + data['logradouro'] + "\nsiafi: " + data['siafi'] + "\nuf: " + data['uf'];
      this.consulta = dados;
    });
  }

  // ionViewDidEnter(){
  //   this.buscarCep();
  // }

  

  consultar(){
    
    console.log(this.cep);
    if((String(this.cep)).length == 0){
      this.msgtoast("Por favor preencha o campo", 500000, "bottom");
    }
    else{
      this.buscarCep();
    }

  }

  async msgtoast (msg : string, duracao : number, posicao : any){

    const toast = await this.toastController.create({
      header: "Erro",
      animated : false,
      cssClass : "toastpersonalizado toast2",
      message : msg, 
      duration : 5000,
      position : posicao
  
    });
  
    toast.present();
  
  }
  

}

import { SabotService } from './../sabot.service';
import { Component, OnInit, Input } from '@angular/core';
import { Sabot } from '../sabot';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sabot-list',
  templateUrl: './sabot-list.component.html',
  styleUrls: ['./sabot-list.component.css'],
  providers: [SabotService]
})
export class SabotListComponent implements OnInit {

   sabots : Sabot[];
  constructor(private router: Router, private sabotService : SabotService){

    this.sabots = []
  }

  ngOnInit(): void {
      this.getAllSabot()
  }

  getAllSabot(){
    this.sabotService.findAll().then(

      sabots => { this.sabots = sabots },
      error => {console.log(error)});

    
  }

  createSabotSLC(){

    let id =  (<HTMLInputElement>document.getElementById('id')).value;
    let etatBatterie =  (<HTMLInputElement>document.getElementById('etatBatterie')).value;
    let  etatSabot =  (<HTMLInputElement>document.getElementById('etatSabot')).value;
    let newSabot = new Sabot(Number(id), Boolean(etatSabot), Number(etatBatterie))
    this.sabotService.createSabot(newSabot).then(

      sabots => { this.sabots = sabots},
      error => {console.log(error);
      }
    )
  }
  deleteSabotSLC(sabot : Sabot){

    this.sabotService.deleteSabot(sabot.id).then(

      sabots => { this.sabots = sabots},
      error => {console.log(error);
      }
    )
  }
}

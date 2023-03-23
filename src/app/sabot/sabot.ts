export class Sabot {

    id : number;
    etatSabot : boolean;
    etatBatterie : number;

    constructor(id : number,etatSabot : boolean,etatBatterie : number){
        this.id=id
        this.etatBatterie= etatBatterie
        this.etatSabot=etatSabot
    }
}
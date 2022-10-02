import { Component, OnInit } from '@angular/core';
import { ScoreService as AhorcadoScores } from 'src/app/Modules/ahorcado/services/score.service';
import { ScoreService as MomScores } from 'src/app/Modules/mayor-o-menor/services/score.service';
import { ScoreService as BanderasScores } from 'src/app/Modules/preguntados-banderas/services/score.service';
import { ScoreService as CaminoScores } from 'src/app/Modules/el-camino/services/score.service';
import { AhorcadoScore } from 'src/app/Modules/ahorcado/models/ahorcado-score';
import { MOMScore } from 'src/app/Modules/mayor-o-menor/models/mom-score';
import { BanderasScore } from 'src/app/Modules/preguntados-banderas/models/banderas-score';
import { CaminoScore } from 'src/app/Modules/el-camino/models/camino-score';

@Component({
  selector: 'app-scores-table',
  templateUrl: './scores-table.component.html',
  styleUrls: ['./scores-table.component.css']
})
export class ScoresTableComponent implements OnInit {

  ahorcado: Array<AhorcadoScore> = [];
  mom: Array<MOMScore> = [];
  banderas: Array<BanderasScore> = [];
  camino: Array<CaminoScore> = [];
  selectedScores: Array<any> = [];

  constructor(public ahorcadoScores: AhorcadoScores, public momScores: MomScores, public banderasScores: BanderasScores, public caminoScores: CaminoScores) { }

  ngOnInit(): void {

    this.ahorcadoScores.getDocuments().subscribe( s => this.ahorcado = s.sort( (a, b) => b.score - a.score ) );
    this.momScores.getDocuments().subscribe( s => this.mom = s.sort( (a, b) => b.score - a.score ) );
    this.banderasScores.getDocuments().subscribe( s => this.banderas = s.sort( (a, b) => b.score - a.score ) );
    this.caminoScores.getDocuments().subscribe( s => this.camino = s.sort( (a, b) => b.score - a.score ) );

  }

  selectScoresToShow(gameName: string) {
    
    switch (gameName) {
      
      case 'ahorcado':
        this.selectedScores = this.ahorcado;
      break;

      case'mom':
        this.selectedScores = this.mom;
      break;

      case 'banderas':
        this.selectedScores = this.banderas
      break;

      case 'camino':
        this.selectedScores = this.camino;
      break;

      default:
        this.selectedScores = [];
      break;

    }

  }



}

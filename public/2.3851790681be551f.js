"use strict";(self.webpackChunksala_juegos_2022=self.webpackChunksala_juegos_2022||[]).push([[2],{5002:(P,l,a)=>{a.r(l),a.d(l,{MayorOMenorModule:()=>v});var s=a(6895),u=a(7001);class d{constructor(n,r){this.number=n,this.suit=r}isHigherThan(n){return this.number>n.number}sameSuitThan(n){return this.suit===n.suit}getNumber(){return this.number}getSuit(){return this.suit}}var c=(()=>{return(t=c||(c={})).spades="spades",t.clubs="clubs",t.hearts="hearts",t.diamonds="diamonds",c;var t})();class g{constructor(){this.deck=[],this.populateDeck()}populateDeck(){for(let n in c)for(let r=1;r<13;r++)this.deck.push(new d(r,n))}popRandomCard(){const n=Math.floor(Math.random()*(this.deck.length-1)),r=this.deck[n];return this.deck=this.deck.slice(0,n).concat(this.deck.slice(n+1)),r}}class h{constructor(n,r,o){this.id="",this.user_id=n,this.score=r,this.timestamp=o}getLiteralObjectRepresentation(){return{user_id:this.user_id,score:this.score,timestamp:this.timestamp}}}var e=a(4650),p=a(7566);let C=(()=>{class t{constructor(r){this.firestore=r,this.collectionPath="/mom_scores",this.momScoresCollection=r.collection(this.collectionPath)}getDocuments(){return this.momScoresCollection.valueChanges({idField:"id"})}addDocument(r){return this.momScoresCollection.add(r)}updateDocument(r,o){return this.momScoresCollection.doc(r).update(o)}deleteDocument(r){return this.momScoresCollection.doc(r).delete()}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(p.ST))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=a(2557);let M=(()=>{class t{transform(r,...o){switch(r){case"hearts":default:return"assets/heart.png";case"clubs":return"assets/clover.png";case"spades":return"assets/spade.png";case"diamonds":return"assets/diamond.png"}}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275pipe=e.Yjl({name:"suitImgUrl",type:t,pure:!0}),t})();function _(t,n){if(1&t&&(e.TgZ(0,"div",3),e._UZ(1,"img",4),e.ALo(2,"suitImgUrl"),e.qZA(),e.TgZ(3,"div",5),e._uU(4),e.qZA(),e.TgZ(5,"div",6),e._UZ(6,"img",4),e.ALo(7,"suitImgUrl"),e.qZA()),2&t){const r=e.oxw();e.xp6(1),e.Q6J("src",e.lcZ(2,3,r.card.getSuit()),e.LSH),e.xp6(3),e.hij(" ",r.card.getNumber()," "),e.xp6(2),e.Q6J("src",e.lcZ(7,5,r.card.getSuit()),e.LSH)}}function b(t,n){1&t&&e._UZ(0,"div",7)}let y=(()=>{class t{constructor(){this.card=new d(0,""),this.backTurned=!0}ngOnInit(){}turnCard(){this.backTurned=!this.backTurned}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-card"]],inputs:{card:"card",backTurned:"backTurned"},decls:4,vars:2,consts:[["id","card-container"],[3,"ngIf","ngIfElse"],["cardsBack",""],["id","top-row"],["alt","card-suit-img",3,"src"],["id","mid-row"],["id","bottom-row"],["id","cardsBack"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0),e.YNc(1,_,8,7,"ng-template",1),e.YNc(2,b,1,0,"ng-template",null,2,e.W1O),e.qZA()),2&r){const i=e.MAs(3);e.xp6(1),e.Q6J("ngIf",!o.backTurned)("ngIfElse",i)}},dependencies:[s.O5,M],styles:["@media (min-width: 480px){#card-container[_ngcontent-%COMP%]{width:16vw;height:20vw;border:solid 1px grey;border-radius:5px}#top-row[_ngcontent-%COMP%]{height:3vw}#top-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60%;max-height:60%;margin:.5rem 0rem 0rem 1rem}#mid-row[_ngcontent-%COMP%]{height:14vw;border:1px solid black;border-radius:5px;margin:0 1rem;display:flex;justify-content:center;align-items:center;font-size:5rem}#bottom-row[_ngcontent-%COMP%]{height:3vw;text-align:end}#bottom-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:60%;max-height:60%;margin:.5rem 1rem 0rem 0rem;transform:rotate(180deg)}}@media (max-width: 480px){#card-container[_ngcontent-%COMP%]{width:32vw;height:40vw;border:solid 1px grey;border-radius:5px}#top-row[_ngcontent-%COMP%]{height:6vw}#top-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:70%;max-height:70%;vertical-align:unset;margin:0rem 0rem 0rem .2rem}#mid-row[_ngcontent-%COMP%]{height:28vw;border:1px solid black;border-radius:5px;margin:0 1rem;display:flex;justify-content:center;align-items:center;font-size:4rem}#bottom-row[_ngcontent-%COMP%]{height:6vw;text-align:end}#bottom-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:70%;max-height:70%;margin:0rem .2rem 0rem 0rem;transform:rotate(180deg);vertical-align:unset}}#cardsBack[_ngcontent-%COMP%]{width:100%;height:100%;background-color:#e5e5f7;opacity:.8;background-image:linear-gradient(135deg,#444cf7 25%,transparent 25%),linear-gradient(225deg,#444cf7 25%,transparent 25%),linear-gradient(45deg,#444cf7 25%,transparent 25%),linear-gradient(315deg,#444cf7 25%,#e5e5f7 25%);background-position:10px 0,10px 0,0 0,0 0;background-size:10px 10px;background-repeat:repeat;box-shadow:#5d5d5d .2rem .2rem}"]}),t})();function w(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.makeGuess())}),e._uU(1," \xa1Dame una! "),e.qZA()}}function O(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"button",14),e.NdJ("click",function(){e.CHM(r);const i=e.oxw();return e.KtG(i.newTurn())}),e._uU(1," Entendido, sigamos "),e.qZA()}}const x=function(t,n){return{"alert alert-danger":t,"alert alert-success":n}},m=function(t){return{"btn-primary":t}},S=[{path:"",children:[{path:"",component:(()=>{class t{constructor(r,o){this.scores=r,this.auth=o,this.currentCard=new d(0,""),this.higherSelected=!0,this.playerScore={},this.revealCurrentCard=!1,this.turnEnded=!1,this.messageForUser="Seleccion\xe1 tu opci\xf3n y ped\xed una carta",this.wrongGuess=!1,this.cardDeck=new g,this.lastCard=this.cardDeck.popRandomCard()}ngOnInit(){this.initScore()}setHigher(r){this.higherSelected=r}makeGuess(){this.currentCard=this.cardDeck.popRandomCard(),this.turnEnded=!0,this.lastCard.getNumber()===this.currentCard.getNumber()?(this.playerScore.score=this.playerScore.score-2,this.messageForUser="Son iguales, mala suerte! Pierde dos puntos.",this.wrongGuess=!0,this.updateScore()):this.higherSelected==this.lastCard.getNumber()<this.currentCard.getNumber()?this.victory():this.defeat(),this.revealCurrentCard=!0}victory(){this.playerScore.score++,this.messageForUser="Excelente! Suma un punto.",this.wrongGuess=!1,this.updateScore()}defeat(){this.playerScore.score--,this.messageForUser="Mala Suerte! Pierde un punto.",this.wrongGuess=!0,this.updateScore()}newTurn(){this.turnEnded=!1,this.lastCard=this.currentCard,this.revealCurrentCard=!1,this.messageForUser="Seleccion\xe1 tu opci\xf3n y ped\xed una carta."}initScore(){this.scores.getDocuments().subscribe(r=>{const o=r.filter(i=>i.user_id==this.auth.GetCurrentUserID());if(0==o.length){const i=new h(this.auth.GetCurrentUserID(),0,Date.now().toString());this.scores.addDocument(i.getLiteralObjectRepresentation()).then(()=>this.playerScore=i)}else this.playerScore=o[0]})}updateScore(){this.playerScore.timestamp=Date.now().toString(),this.scores.updateDocument(this.playerScore.id,this.playerScore)}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(C),e.Y36(f.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mayor-o-menor"]],decls:20,vars:18,consts:[["id","conatiner"],["id","cards-container"],[1,"mt-3",2,"display","flex","justify-content","center"],["id","deck",2,"text-align","center"],["id","hit-me-and-message"],[3,"ngIf","ngIfElse"],["newTurnButton",""],["id","message-board",3,"ngClass"],[1,"mt-3",2,"display","flex","margin-bottom","2rem","justify-content","center"],["id","last-card",2,"margin","0",3,"card","backTurned"],["id","current-card",2,"margin-left","1rem",3,"card","backTurned"],["id","controllers-container",2,"text-align","center"],[1,"btn",3,"ngClass","click"],["id","hit-me",1,"btn","btn-danger","mt-3",3,"click"],["id","hit-me",1,"btn","btn-success",3,"click"]],template:function(r,o){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-card",3),e.qZA(),e.TgZ(4,"div",4),e.YNc(5,w,2,0,"ng-template",5),e.YNc(6,O,2,0,"ng-template",null,6,e.W1O),e.TgZ(8,"p",7),e._uU(9),e._UZ(10,"br"),e._uU(11),e.qZA()(),e.TgZ(12,"div",8),e._UZ(13,"app-card",9)(14,"app-card",10),e.qZA()(),e.TgZ(15,"div",11)(16,"button",12),e.NdJ("click",function(){return o.higherSelected=!0}),e._uU(17,"Mayor"),e.qZA(),e.TgZ(18,"button",12),e.NdJ("click",function(){return o.higherSelected=!1}),e._uU(19,"Menor"),e.qZA()()()),2&r){const i=e.MAs(7);e.xp6(5),e.Q6J("ngIf",!o.turnEnded)("ngIfElse",i),e.xp6(3),e.Q6J("ngClass",e.WLB(11,x,o.turnEnded&&o.wrongGuess,o.turnEnded&&!o.wrongGuess)),e.xp6(1),e.hij(" ",o.messageForUser," "),e.xp6(2),e.hij(" Puntos: ",o.playerScore.score," "),e.xp6(2),e.Q6J("card",o.lastCard)("backTurned",!1),e.xp6(1),e.Q6J("card",o.currentCard)("backTurned",!o.revealCurrentCard),e.xp6(2),e.Q6J("ngClass",e.VKq(14,m,o.higherSelected)),e.xp6(2),e.Q6J("ngClass",e.VKq(16,m,!o.higherSelected))}},dependencies:[s.mk,s.O5,y],styles:["#container[_ngcontent-%COMP%]{display:flex;margin-left:2rem}#cards-container[_ngcontent-%COMP%]{flex-basis:100%;display:flex;justify-content:space-around}#controllers-container[_ngcontent-%COMP%]{flex-basis:100%;display:flex;justify-content:center;align-items:center;margin-top:4rem}#controllers-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:10vw;border:solid 1px black;margin-right:2rem}#deck[_ngcontent-%COMP%]{margin-right:2rem;cursor:pointer}#hit-me-and-message[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around}#hit-me[_ngcontent-%COMP%]{width:10vw;height:5vw;align-self:center}#message-board[_ngcontent-%COMP%]{border:1px solid grey;border-radius:5px;margin-top:2rem;min-width:20vw;padding:2rem}#last-card[_ngcontent-%COMP%]{margin-left:auto;margin-right:2rem}@media (max-width: 1000px){#container[_ngcontent-%COMP%]{display:flex;margin:0!important}#cards-container[_ngcontent-%COMP%], #controllers-container[_ngcontent-%COMP%]{display:block}#controllers-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;border:solid 1px black;margin-right:2rem}#deck[_ngcontent-%COMP%]{box-shadow:none;margin-right:0;cursor:pointer}#hit-me-and-message[_ngcontent-%COMP%]{display:flex;flex-direction:column}#hit-me[_ngcontent-%COMP%]{width:100%;height:auto}#message-board[_ngcontent-%COMP%]{border:1px solid grey;border-radius:5px;margin-top:2rem;min-width:20vw;padding:2rem}#last-card[_ngcontent-%COMP%]{margin-left:auto;margin-right:2rem}}"]}),t})()}]}];let k=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild(S),u.Bz]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,k]}),t})()}}]);
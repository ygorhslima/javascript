import { Luta } from "./Luta.js";
import { Lutador } from "./Lutador.js";


let Lutadores:Lutador[] = [];

Lutadores[0] = new Lutador("Pretty Boy","França",31,1.75,68.9,0,0,0);
Lutadores[1] = new Lutador("Putscript","Brasil",29,1.68,57.8,0,0,0);
Lutadores[2] = new Lutador("Snapshadow","EUA",35,1.65,80.9,0,0,0);
Lutadores[3] = new Lutador("DeadCode","Austrália",28,1.93,81.6,0,0,0);

const UEC01:Luta = new Luta(Lutadores[0], Lutadores[1]);
UEC01.lutar();

const UEC02:Luta = new Luta(Lutadores[0], Lutadores[1]);
UEC02.lutar();

const UEC03:Luta = new Luta(Lutadores[0],Lutadores[1]);
UEC03.lutar();

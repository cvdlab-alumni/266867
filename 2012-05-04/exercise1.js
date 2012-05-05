// Wings of Mile Magister
// Essendo la superficie alare pari a 10.3m(wikipedia), 
//ipotizzo la larghezza della fusoliera pari a 1.5m, 
// LUNGHEZZA ALA =  4.4m, LARGHEZZA ALA = 4m

var controls = [[4,0,2],[0,0.5,2],[0,-0.5,2],[2,0.15,2],[4,0,2]]

// Definisco la prima curva

var c1 = BEZIER(S0)(controls);
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);
var curva1 = MAP(c1)(domain1);

// Definisco i punti di controllo delle altre curve

var p2 = controls.map(function (p){ return [p[0],      p[1]         ,p[2]+0.4]});
var p3 = controls.map(function (p){ return [p[0],      p[1]         ,p[2]+0.8]});
var p4 = controls.map(function (p){ return [p[0]/1.2,  p[1]-p[1]/2  ,p[2]+1.1]});
var p5 = controls.map(function (p){ return [p[0]/1.3,  p[1]-p[1]/2.4,p[2]+2.2]});
var p6 = controls.map(function (p){ return [p[0]/1.4,  p[1]-p[1]/2.8,p[2]+3.3]});
var p7 = controls.map(function (p){ return [p[0]/1.4,  p[1]-p[1]/3  ,p[2]+3.8]});
var p8 = controls.map(function (p){ return [p[0]/1.5,  p[1]-p[1]/3.4,p[2]+4]});
var p9 = controls.map(function (p){ return [p[0]/1.5,  p[1]-p[1]/3.8,p[2]+4.2]});
var p10 = controls.map(function (p){ return [p[0]/1.6, p[1]-p[1]    ,p[2]+4.401]});
 
// Definisco le curve tramite i punti di controllo trovati

var c2  =  BEZIER(S0)(p2);
var c3  =  BEZIER(S0)(p3);
var c4  =  BEZIER(S0)(p4);
var c5  =  BEZIER(S0)(p5);
var c6  =  BEZIER(S0)(p6);
var c7  =  BEZIER(S0)(p7);
var c8  =  BEZIER(S0)(p8);
var c9  =  BEZIER(S0)(p9);
var c10 =  BEZIER(S0)(p10);

var wing = BEZIER(S1)([c1, c2, c3,c4,c5,c6,c7,c8,c9,c10,[1.6,0,6.44]])
var ala = COLOR([246/255,172/255,0])(MAP(wing)(domain2));

DRAW(ala)
// ======== ALA==============================
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
var ala2 = COLOR([246/255,172/255,0])(MAP(wing)(domain2));

var alaT = T([1])([6.5])(ala)
var alaR = R([0,2])(PI/2)(alaT)
var alaF = T([2])([6])(alaR)
var alaF1 = T([0])([-0.8])(alaF)
var alaF2 = R([0,1])(PI)(alaF1)
var alaT2 = T([1])([13])(alaF2)
var alaTt2 = T([0])([1.8])(alaT2)

DRAW(alaTt2)
DRAW(alaF1)


// =============== FUSOLIERA========================================

// Fuselage of Mile Magister
// Larghezza fusoliera = 2m

var domain2 = DOMAIN([[0,1],[0,1]])([50,100]);
var controls = [[1,0,0],[0,0,0],[0.25,1.25,0],[0.5,1.75,0],[1,2.25,0],[1.5,1.75,0],[1.75,1.25,0],[2,0,0],[1,0,0]]
var knots = [0,0,0,1,2,3,4,5,6,7,7,7];

// senza i piloti, fino a 0.3

var controls1 = controls.map(function (p){ return [p[0],p[1],p[2]+0.3]});
var c1 = NUBS(S0)(2)(knots)(controls);
var c2 = NUBS(S0)(2)(knots)(controls1);
var middleFuselBez = BEZIER(S1)([c1,c2])
var middleFuselMap = MAP(middleFuselBez)(domain2)

// con il primo posto pilota

var controlsPilots = [[1,0,0],[0,0,0],[0.25,1.25,0],[0.5,1.75,0],[1.5,1.75,0],[1.75,1.25,0],[2,0,0],[1,0,0]]
var knotsPilots = [0,0,0,1,2,3,4,5,6,6,6];
var controlsPilot1 = controlsPilots.map(function (p){ return [p[0],p[1],p[2]+0.3]});
var controlsPilot2 = controlsPilots.map(function (p){ return [p[0],p[1],p[2]+0.8]});
var pilot1 = NUBS(S0)(2)(knotsPilots)(controlsPilot1);
var pilot2 = NUBS(S0)(2)(knotsPilots)(controlsPilot2);
var middlePilot1Bez = BEZIER(S1)([pilot1,pilot2])
var middlePilot1Map = MAP(middlePilot1Bez)(domain2)

// senza i piloti, fino a 1.2

var controls11 = controls.map(function (p){ return [p[0],p[1],p[2]+0.8]});
var controls12 = controls.map(function (p){ return [p[0],p[1],p[2]+1.2]});
var c11 = NUBS(S0)(2)(knots)(controls11);
var c22 = NUBS(S0)(2)(knots)(controls12);
var middleFuselBez1 = BEZIER(S1)([c11,c22])
var middleFuselMap1 = MAP(middleFuselBez1)(domain2)

// con il secondo posto pilota

var controlsPilot1b = controlsPilots.map(function (p){ return [p[0],p[1],p[2]+1.2]});
var controlsPilot2b = controlsPilots.map(function (p){ return [p[0],p[1],p[2]+1.7]});
var pilot1b = NUBS(S0)(2)(knotsPilots)(controlsPilot1b);
var pilot2b = NUBS(S0)(2)(knotsPilots)(controlsPilot2b);
var middlePilot1bBez = BEZIER(S1)([pilot1b,pilot2b])
var middlePilot1bMap = MAP(middlePilot1bBez)(domain2)

// senza i piloti, fino a 2

var controls13 = controls.map(function (p){ return [p[0],p[1],p[2]+1.7]});
var controls23 = controls.map(function (p){ return [p[0],p[1],p[2]+2]});
var c13 = NUBS(S0)(2)(knots)(controls13);
var c23 = NUBS(S0)(2)(knots)(controls23);
var middleFuselBez3 = BEZIER(S1)([c13,c23])
var middleFuselMap3 = MAP(middleFuselBez3)(domain2)

// adesso la seconda parte della fusoliera, quella verso la coda

var p5 = controls.map(function (p){ return [p[0],           p[1]       ,p[2]+2]});
var p6 = controls.map(function (p){ return [p[0]/1.1-0.01,  p[1]/1.1   ,p[2]+4]});
var p7 = controls.map(function (p){ return [p[0]/1.2-0.01,  p[1]/1.3   ,p[2]+4.4]});
var p8 = controls.map(function (p){ return [p[0]/1.3+0.09,  p[1]/1.5   ,p[2]+5]});
var p9 = controls.map(function (p){ return [p[0]/1.4+0.07,  p[1]/1.7   ,p[2]+5.4]});
var p10 = controls.map(function (p){return [p[0]/1.5+0.05,  p[1]/2     ,p[2]+5.5]});

var c5 = NUBS(S0)(2)(knots)(p5);
var c6 = NUBS(S0)(2)(knots)(p6);
var c7 = NUBS(S0)(2)(knots)(p7);
var c8 = NUBS(S0)(2)(knots)(p8);
var c9 = NUBS(S0)(2)(knots)(p9);
var c10 = NUBS(S0)(2)(knots)(p10);

var surface1 = BEZIER(S1)([c5,c6,c7,c8,c9,c10,[0.5,0.5,5.7]]);
var s = MAP(surface1)(domain2)
var semifuselage = STRUCT([middleFuselMap,middlePilot1Map,middleFuselMap1,middlePilot1bMap,middleFuselMap3,s])
var semifuselageC = COLOR([246/255,172/255,0])(semifuselage)
var n = T([2])([1.7])(semifuselageC)

// adesso la terza parte della fusoliera, quella verso l'elica

var p31 = controls.map(function(p){ return [p[0],          p[1]       ,p[2]+1.7]});
var p3 = controls.map(function (p){ return [p[0]/1.1-0.01,  p[1]/1.1  ,p[2]+1.3]});
var p4 = controls.map(function (p){ return [p[0]/1.2-0.01,  p[1]/1.3  , p[2]+0.9]});
var p5 = controls.map(function (p){ return [p[0]/1.3+0.09,  p[1]/1.5 ,p[2]+0.2]});

var c31 = NUBS(S0)(2)(knots)(p31);
var c3 = NUBS(S0)(2)(knots)(p3);
var c4 = NUBS(S0)(2)(knots)(p4);
var c51 = NUBS(S0)(2)(knots)(p5);
var surface2 = BEZIER(S1)([c31,c3,c4,c51,[1,1.3,0.2]])
var all = COLOR([164/255, 144/255, 119/255])(MAP(surface2)(domain2))

//===== STABILIZZATORI===========
// Inizio con gli stabilizzatori verticali

var controls2 = [[0.2,0,0],[0.2,0.5,0],[0,-0.1,0],[+0.1,0,0]];
var controls3 = [[0.2,0.5,0],[0.2,0,0],[0,+1.1,0],[-1.1,0,0]];

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var c2 = CUBIC_HERMITE(S0)(controls2);
var c3 = CUBIC_HERMITE(S0)(controls3);

var s2 = CUBIC_HERMITE(S1)([c2,c3,[0,+1,+3],[0,-1,-3]]); 
var surface2 = MAP(s2)(domain2);
var verticalStabilizer = T([0,1])([1,1])(surface2)

// Stabilizzatori orizzontali

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var controls4 = [[0.2,0,0],[0.2,2,0],[0,-0.1,0],[+0.1,0,0]];
var controls5 = [[0.2,2,0],[0.2,0,0],[0,+0.1,0],[-0.1,0,0]];
var c4 = CUBIC_HERMITE(S0)(controls4);
var c5 = CUBIC_HERMITE(S0)(controls5);

var s3 = CUBIC_HERMITE(S1)([c4,c5,[0,0,+2.5],[0,0,+2.5]]); 
var surface3 = MAP(s3)(domain2);

var rotatedSurface1 = R([0,2])(PI/2)(surface3) 
var rotatedSurface2 = R([0,1])(PI/2)(rotatedSurface1) 
var translaterSurface = T([0])([2.2])(rotatedSurface2)
var translaterSurface1 = T([1])([1.3])(translaterSurface)
var translaterSurface2 = T([2])([0.2])(translaterSurface1)

var stabilizersAll =  COLOR([246/255,172/255,0])(STRUCT([translaterSurface2,verticalStabilizer]))

var stabilRot = R([1,2])(-PI/2)(stabilizersAll)
var stabilRot2 = T([1])([7.6])(stabilRot)
var stabilRot3 = R([0,2])(-PI)(stabilRot2)
var stabilRot4 = T([2])([5])(stabilRot3)
var stabilRot5 = T([0])([2.1])(stabilRot4)

DRAW(stabilRot5)

var fusolieraT= T([1])([6])(all)
var nT = T([1])([6])(n)
DRAW(nT)
DRAW(fusolieraT)
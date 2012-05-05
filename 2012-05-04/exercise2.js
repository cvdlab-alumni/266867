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
DRAW(n)

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
DRAW(all)


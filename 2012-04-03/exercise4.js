// Rappresento la  Lampada

var drawSphere = function (r,n,color) {
  var domain = DOMAIN([[0,2*PI],[0,PI]])([n,2*n]);

  var sphere = function (p) {
    var a = p[1] - (PI/2);
    var b = p[0];

    return [ 0.125 + r * COS(b) * COS(a), 0.1 + r * COS(a) * SIN(b), 0.2 + 1.5 +  r * SIN(a)];
  }
  var mapped = MAP(sphere)(domain);
  COLOR(color)(mapped); 
  DRAW(mapped);
  return mapped; // così lo posso nascondere con HIDE()
};
  var drawCilynder = function(r,n,h,color){
  
  var domainCilynder = DOMAIN([[0,2*PI],[0,h]])([n,1]);
    var cilynder = function (p) {
      var a = p[0];
      var b = p[1];

      var x = 0.125 + r*SIN(a);
      var y = 0.1 + r*COS(a);
      var z = 0.2 +b;
      return [x,y,z];
  }
  var mapped = MAP(cilynder)(domainCilynder); 
  DRAW(mapped);
  COLOR(color)(mapped);
  return mapped;
};


var cilynder = drawCilynder(0.015,30,1.5,[0.2,0.2,0.2])
var sphere = drawSphere(0.15,30,[0.952,0.952,0])
var base = SIMPLEX_GRID([[0,0.15],[0,0.20],[0.20]]);
COLOR([0.2,0.2,0.2])(base)
var lamp = STRUCT([cilynder,sphere,base]);
// Rappresento il pavimento

var floor1 = SIMPLEX_GRID([[0,39],[1],[1.2]]);
var floor2 = SIMPLEX_GRID([[0,1],[-1,1],[1.2]]);
var floor3 = SIMPLEX_GRID([[-1,20],[-10,7],[1.2]]);
var floor4 = SIMPLEX_GRID([[-1,8],[-17,5],[1.2]]);
var floor5 = SIMPLEX_GRID([[-21,15],[-1,16],[1.2]]);
var floor6 = SIMPLEX_GRID([[-36,3],[-4,13],[1.2]]);
var floor7 = SIMPLEX_GRID([[-39,8],[-4,12],[1.2]]);
var floor8 = SIMPLEX_GRID([[-47,5],[-4,1],[1.2]]);
var floor9 = SIMPLEX_GRID([[-51,1],[-5,1],[1.2]]);
var floor10 = SIMPLEX_GRID([[-1,0.3],[-1,9],[1.2]]);
var floor11 = SIMPLEX_GRID([[-50.7,0.3],[-5,11],[1.2]]);
var floor12 = SIMPLEX_GRID([[-47,3.7],[-15.7,0.3],[1.2]]);

var floor = STRUCT([floor1,floor2,floor3,floor4,floor5,floor6,floor7,floor8,floor9,floor10,floor11,floor12]);
COLOR([0.876,0.876,0.448])(floor)

// Rappresento le scale

var step1= SIMPLEX_GRID([[-36,0.5],[-1,3],[1.2]]);
var step2= SIMPLEX_GRID([[-36.5,0.5],[-1,3],[1]]);
var step3= SIMPLEX_GRID([[-37,0.5],[-1,3],[0.8]]);
var step4= SIMPLEX_GRID([[-37.5,0.5],[-1,3],[0.6]]);
var step5= SIMPLEX_GRID([[-38,0.5],[-1,3],[0.4]]);
var step6= SIMPLEX_GRID([[-38.5,0.5],[-1,3],[0.2]]);	

var allSteps = STRUCT([step1, step2, step3, step4, step5,step6]);
COLOR([0.82,0.82,0.82])(allSteps)

// Rappresento i tetti,partendo dal primo tetto, quello con l'apertura 

var section1roof1= SIMPLEX_GRID([[-24,6.5],[-4,13],[-1.2-2,0.3]]); 
var section2roof1= SIMPLEX_GRID([[-32.5,14.5],[-4,13],[-1.2-2,0.3]]); 
var section3roof1= SIMPLEX_GRID([[-30.5,2],[-4,3.5,-6,3.5],[-1.2-2,0.3]]); 
var roof1 = STRUCT([section1roof1,section2roof1,section3roof1]);
var roof2= SIMPLEX_GRID([[0,10],[-14.5,8.5],[-1.2-2,0.3]]); // Il secondo tetto

var allRoofs = STRUCT([roof1,roof2]);
COLOR([0.188,0.316,0.316])(allRoofs);

// Rappresento le pareti esterne
var externalWall1 = SIMPLEX_GRID([[-1,7],[-1,0.30],[-1.2,2]]);
var externalWall2 = SIMPLEX_GRID([[-1,0.3],[-1,21],[-1.2,2]]);
var externalWall3 = SIMPLEX_GRID([[-1,8],[-21.7,0.30],[-1.2,2]]);
var externalWall4 = SIMPLEX_GRID([[-8.7,0.30],[-17,5],[-1.2,2]]);
var externalWall5 = SIMPLEX_GRID([[-38,13],[-15.7,0.3],[-1.2,2]]);
var externalWall6 = SIMPLEX_GRID([[-50.7,0.4],[-5,11],[-1.2,2]]);
var externalWall7 = SIMPLEX_GRID([[-44,7],[-5,0.3],[-1.2,2]]);

var allExternalWalls = STRUCT([externalWall1,externalWall2,externalWall3,externalWall4,externalWall5,externalWall6,externalWall7]);
COLOR([0.368,0.204,0.092])(allExternalWalls)

// Rappresento le pareti interne (cambia lo spessore)
var internalWall1 = SIMPLEX_GRID([[-6.5,20],[-15,0.1],[-1.2,2]]);
var internalWall2 = SIMPLEX_GRID([[-25,9],[-7.9,0.1],[-1.2,2]]);
var internalWall3 = SIMPLEX_GRID([[-37.5,5],[-11.5,0.1],[-1.2,2]]);
var internalWall4 = SIMPLEX_GRID([[-44.4,0.1],[-7,7],[-1.2,2]]);

var allInternalWalls = STRUCT([internalWall1,internalWall2,internalWall3,internalWall4]);
COLOR([1,0.507,0.144])(allInternalWalls)

// Rappresento l'acqua nelle due piscine
var waterSwimmingPool1 = SIMPLEX_GRID([[-1.3,19.7],[-1,9],[1]]); 
var waterSwimmingPool2 = SIMPLEX_GRID([[-47,3.7],[-5,10.7],[1]]);

var allWater = STRUCT([waterSwimmingPool1,waterSwimmingPool2]);
COLOR([0,0.508,1])(allWater);


// Rappresento le colonne
var pillars1 = SIMPLEX_GRID([[-25.7,0.3,-6.7,0.3],[-6.7,0.3,-6.7,0.3],[-1.2,2]]);
var pillars2 = SIMPLEX_GRID([[-38.7,0.3,-6.7,0.3],[-6.7,0.3,-6.7,0.3],[-1.2,2]]);

var pillars = STRUCT([pillars1,pillars2]);
COLOR([0.2,0.2,0.2])(pillars);


// Rappresento i pannelli di vetro
var windowpane1 = SIMPLEX_GRID([[-30,10],[-13.5,0.1],[-1.2,2]]);
var windowpane2 = SIMPLEX_GRID([[-1,8],[-17,0.1],[-1.2,2]]);
var windowpane3 = SIMPLEX_GRID([[-5,0.1],[-17,1],[-1.2,2]]);
var windowpane4 = SIMPLEX_GRID([[-5,0.2],[-20.8,0.1],[-1.2,2]]);
var windowpane5 = SIMPLEX_GRID([[-6.5, 2.2],[-20.8,0.1],[-1.2,2]]);
var windowpane6 = SIMPLEX_GRID([[-7,0.1],[-21.5, 0.2],[-1.2,2]]);
var windowpane7 = SIMPLEX_GRID([[-30.9,0.1],[-8,5.5],[-1.2,2]]);
var windowpane8 = SIMPLEX_GRID([[-32,0.1],[-8,5.5],[-1.2,2]]);
var windowpane9 = SIMPLEX_GRID([[-44.75,0.2],[-7,7],[-1.2,2]]);
var windowpane10 = SIMPLEX_GRID([[-5,0.2],[-19,3],[-1.2,2]]);

var allWindowPanes = STRUCT([windowpane1,windowpane2,windowpane3,windowpane4,windowpane5,windowpane6,windowpane7,windowpane8,windowpane9,windowpane10]);
COLOR([0.608, 0.98, 1])(allWindowPanes);

// Rappresento la panchina
var benchPlane = SIMPLEX_GRID([[-6.75,15.5],[-14,0.5],[-1.5-0.3,0.2]]);
var benchBeams = SIMPLEX_GRID([[-6.75,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5,-1,0.5],[-14,0.5],[-1.5,0.3]]);

var bench = STRUCT([benchPlane,benchBeams]);
COLOR([0.556,0,0])(bench);

// Grafico il tutto
var pavilion3D = STRUCT([floor,allSteps,allRoofs,allExternalWalls,allInternalWalls,allWater,pillars,allWindowPanes,bench]);
DRAW(pavilion3D);

// Le lampade traslate
var lampTrasl1 = T([0,1,2])([15,11,1.2])(lamp);
var lampTrasl2 = T([0,1,2])([20,11,1.2])(lamp);
var lampTrasl3 = T([0,1,2])([22,9,1.2])(lamp);
var lampTrasl4 = T([0,1,2])([22,5,1.2])(lamp);
var allLampTrasl = STRUCT([lampTrasl1,lampTrasl2,lampTrasl3,lampTrasl4]);
DRAW(allLampTrasl)
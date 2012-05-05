// Model of horizontal and vertical stabilizers of Mile Magister
// Stabilizzatori verticali:

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
DRAW(stabilizersAll)

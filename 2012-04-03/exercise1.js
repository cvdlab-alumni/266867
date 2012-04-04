// Disegno il perimetro
var perimeter = POLYLINE([[0,0],[0,2],[1,2],[1,22],[9,22],[9,17],[39,17],[39,16],[51,16],[51,6],[52,6],[52,4],[39,4],[39,0],[0,0]]);
COLOR([0,0,0])(perimeter);

var centralStructure1 = POLYLINE([[32,7.5],[32,13.5],[31,13.5],[31,7.5],[32,7.5]]);
var centralStructure2 = POLYLINE([[32.5,9],[32.5,12],[33.5,12],[33.5,9],[32.5,9]]);
var allCentralstructures = STRUCT([centralStructure1,centralStructure2]);


// Reppresento i muri
var wall1 = POLYLINE([[47,16],[38,16]]);
var wall2 = POLYLINE([[41,5],[51,5]]);
var wall3 = POLYLINE([[44.5,7],[44.5,14]]); 
var wall4 = POLYLINE([[42.5,11.5],[37.5,11.5]]);
var wall5 = POLYLINE([[30,13.5],[40,13.5]]);
var wall6 = POLYLINE([[25,7.5],[34,7.5]]);
var wall7 = POLYLINE([[26.5,15],[6.5,15]]);
var allWalls = STRUCT([wall1,wall2,wall3,wall4,wall5,wall6,wall7]);
COLOR([0,0,0])(allWalls);

var room1 = POLYLINE([[1,17],[9,17]]);
var room2 = POLYLINE([[5,22],[5,19]]);
var room3 = POLYLINE([[5,17],[5,18]]);
var room4 = POLYLINE([[7,22],[7,21]]); 
var room5 = POLYLINE([[5,20],[5.5,20]]);
var room6 = POLYLINE([[6.5,20],[9,20]]);
var allRooms = STRUCT([room1,room2,room3,room4,room5,room6]);

var column1 = POLYLINE([[25.7,6.7],[25.7,7],[26,7],[26,6.7],[25.7,6.7]]);
var column2 = POLYLINE([[25.7,13.7],[25.7,14],[26,14],[26,13.7],[25.7,13.7]]);
var column3 = POLYLINE([[32.7,6.7],[32.7,7],[33,7],[33,6.7],[32.7,6.7]]);
var column4 = POLYLINE([[32.7,13.7],[32.7,14],[33,14],[33,13.7],[32.7,13.7]]);
var column5 = POLYLINE([[38.7,6.7],[38.7,7],[39,7],[39,6.7],[38.7,6.7]]);
var column6 = POLYLINE([[38.7,13.7],[38.7,14],[39,14],[39,13.7],[38.7,13.7]]);
var column7 = POLYLINE([[44.7,6.7],[44.7,7],[45,7],[45,6.7],[44.7,6.7]]);
var column8 = POLYLINE([[44.7,13.7],[44.7,14],[45,14],[45,13.7],[44.7,13.7]]);
var allColumns = STRUCT([column1,column2,column3,column4,column5,column6,column7,column8]); 
COLOR([0,0,0])(allColumns);

var swimmingPool1 = POLYLINE([[1.3,1],[1.3,10],[21,10],[21,1],[1.3,1]]);
var swimmingPool2 = POLYLINE([[47,5],[47,15.7],[50.7,15.7],[50.7,5],[47,5]]);


var cube1 = POLYLINE([[33,12.7],[33,13],[33.3,13],[33.3,12.7],[33,12.7]]);
var cube2 = POLYLINE([[33,8],[33,8.3],[33.3,8.3],[33.3,8],[33,8]]);
var cube3 = POLYLINE([[38.7,10.7],[38.7,11],[39,11],[39,10.7],[38.7,10.7]]);
var cube4 = POLYLINE([[40.7,10.7],[40.7,11],[41,11],[41,10.7],[40.7,10.7]]);
var cube5 = POLYLINE([[41.5,8.5],[41.5,9],[42,9],[42,8.5],[41.5,8.5]]);
var cube6 = POLYLINE([[41.5,7.5],[41.5,8],[42,8],[42,7.5],[41.5,7.5]]);
var cube7 = POLYLINE([[39.63,10.55],[39.63,11.05],[40.13,11.05],[40.13,10.55],[39.63,10.55]]);
var allCubes = STRUCT([cube1,cube2,cube3,cube4,cube5,cube6,cube7]); 


var stairs = POLYLINE([[36,1],[36,4],[39,4],[39,1],[36,1]]);
COLOR([0,0,0])(stairs);

var step1 = POLYLINE([[37,1],[37,4]]);    
var step2 = POLYLINE([[38,1],[38,4]]);
var allSteps = STRUCT([step1,step2]);
COLOR([0,0,0])(allSteps);

var benchStructure = POLYLINE([[7,14],[7,14.5],[22,14.5],[22,14],[7,14]]);
var bench1 = POLYLINE([[9.5,14],[9.5,14.5]]);
var bench2 = POLYLINE([[12,14],[12,14.5]]);
var bench3 = POLYLINE([[14.5,14.5],[14.5,14]]);
var bench4 = POLYLINE([[17,14],[17,14.5]]);
var bench5 = POLYLINE([[19.5,14],[19.5,14.5]]);
var allBenchs = STRUCT([benchStructure,bench1,bench2,bench3,bench4,bench5]);

var pavilonPlan = STRUCT([perimeter,allCentralstructures,allWalls,allRooms,allColumns,swimmingPool1,swimmingPool2,allCubes,stairs,allSteps,allBenchs]);

DRAW(pavilonPlan);
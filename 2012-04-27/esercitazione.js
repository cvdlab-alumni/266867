// Exercise 1 : build the structure with the walls

var s0 = POLYLINE([[0,0],[0,3],[1,3],[1,1],[4,1],[4,3],[5,3],[5,1],[8,1],[8,3],[9,3],[9,0],[0,0]]);
var s1 = POLYLINE([[0,4],[0,7],[9,7],[9,4],[8,4],[8,6],[5,6],[5,4],[4,4],[4,6],[1,6],[1,4],[0,4]]);

var model = STRUCT([s1,s0])
DRAW(model)

var extruded = EXTRUDE([2])(model) // con questo alzo i muri di 3
DRAW(COLOR([0,0.508,1])(extruded)); 

// =============================================================================
// Exercise 2: create the roof through a cuboid and Boundary function
 

var roof = T([2])([2])(BOUNDARY(CUBOID([9,7,0.5]))) // su boundary, ci metto il T prima,poi il modello
DRAW(COLOR([0,0.508,1,0.5])(roof));// la quarta dim è la trasparenza(color vetro)

// =============================================================================
// Exercise 3: draw a cubical hermite curve

var domain = INTERVALS(1)(20);
// INTERVALS(length)(n): Create a segment from 0 to length divided in n parts.

var controlpoints = [[1,0],[1,1],[ 1, 0],[ 1,1]];
var curveMapping = CUBIC_HERMITE(S0)(controlpoints); 
 //  il primo è il selettore,ovvero la funzione che seleziona le coordinate del dominio: S0 perchè si parla di curve, se si parlasse
 //  di superfici sarebbe S1
var curve = MAP(curveMapping)(domain);
DRAW(curve);

// =============================================================================
// Exercise 4: draw a bezier curve of degree 4 with following control points:
// P(1): (3,1)
// P(2): (1,2)
// P(3): (2,3)
// P(4): (3,2)

var domain = INTERVALS(1)(20);
var controlpoints = [[0,0],[3,1],[ 1, 2],[ 2,3],[3,2]];
// controlpoints con 2 coordinate x ogni punto => 2 = x,y; 3 => x,y,z
var curveMapping = BEZIER(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
DRAW(curve);


// Spline = curva a tratti;
// la nostra polilyne è una curva continua a tratti, di grado 1
// Spline cardinale = SPLine interpolatrice,interpola con qualsiasi 
// insieme di punti, il primo con pm e l'ultimo con p0
// numero di segmenti di curva = m-2
// ogni semgmento unito all'altro con una curva di CUBIC_HERMITE,
// seguendo la tangente iniziale(pt inizio) e tg finale(pt finale)

var domain = INTERVALS(1)(20);
var controlpoints = [[0,0],[3,2],[4,-1],[7,3],[9,0],[11,1],[12,0]];
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);
DRAW(splineCardinal);
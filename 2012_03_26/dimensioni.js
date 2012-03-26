// MONODIMENSIONALE

var dimensione1 = DOMAIN([[1,5]])(4)
DRAW(dimensione1)
HIDE(dimensione1)

// BIDIMENSIONALE

var dimensione2 = DOMAIN([[1,5],[1,3]])([4,2])
DRAW(dimensione2)
HIDE(dimensione2)

// TRIDIMENSIONALE

var dimensione3 = DOMAIN([[1,5],[1,3],[0,1]])([4,2,1])
DRAW(dimensione3)
HIDE(dimensione3)

--------------------------------------------

var domain = DOMAIN([[0,10]])([10]);
var mapping = function(p){
	var u =p[0];

	return [u,1];


};

var mapped = MAP(mapping)(domain);

------------------------------------------------
// NO
var domain = DOMAIN([[0,10]])([10]);
var bisettrice = function(p){
for(i=0;i<10;i++){
	var u = p[i];
	return [u,i];
	}
};
var mapped = MAP(bisettrice)(domain);

-----------------------------------------------
// Sinusoide
var domain = DOMAIN([[0,2*PI]])([100]);
var sinusoide = function(p){
	var u = p[0];
	return [u,SIN(u)];
};
var mapped = MAP(sinusoide)(domain);

-----------------------------------------------
// CERchio parametrico
var n = DOMAIN([[0,2*PI]])([100]);
 // x = r*cos(a)
 // y = r*sen(a)
var drawCircle(r,n)= function(p){
	var u =p[0];
	return [r*COS(u),r*SIN(u)];
};
var mapped= MAP(drawCircle)(3,n);

----------------------------------------------

// CILINDRO
var domain = DOMAIN([[0,2*PI]])([100]);
var drawCilinder(r,h,m,n,color) = function(p){
	var u = p[0]; // 0-2pi
	var v = p[1]; // 0-h
	return [r*SIN(u),r*COS(u),v];
};
var mapped = MAP(drawCilinder)(domain);

// DISEGNA sfera
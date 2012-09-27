// I Domini:
// =============================================================

var domain2D   = DOMAIN([[0,1],[0,1]])([15,15]);
var domain     = INTERVALS(1)(15);
var dominioRot = DOMAIN([[0,2],[0,2*PI]])([20,20])

// Colori
var giallo_tasselli  = [220/255, 181/255  , 43/255]
var marrone_tetto    = [190/255, 94/255   , 64/255];
var beige_mura       = [216/255, 217/255  , 211/255];
var celeste_finestre = [173/255, 216/255  , 230/255,0.4];
var grigio_pietra    = [179/255, 175/255  , 156/255];
var grigio_marmo     = [255/255, 245/255  , 235/255];
var verde_prato      = [0/255  , 160/255  , 0/255];
var grigio_avorio    = [255/255, 255/255  , 240/255];



// Funzioni di Supporto:
// ===============================================================

// Funzione per la generazione delle  colonne
// r = raggio, h= altezza, off_n = offset per asse n, closer = {1,se il cilindro è chiuso; 0,altrimenti}

  var column = function(r,h,off_x,off_y,off_z,closer){

    var columnpoint     =   [[r+0.1,0,0],[r+0.08,0,h*0.04],[r+0.06,0,h*0.08],[r+0.03,0,h*0.12],
                             [r,0,h*0.15],[r-0.05,0,h]]

    var n = generate_knots(columnpoint)
    var curvebasement    = NUBS(S0)(2)(n)(columnpoint);
    var curvebasementRotSurf    = ROTATIONAL_SURFACE(curvebasement);

    var columna = MAP(curvebasementRotSurf)(dominioRot);
    var columna1 =  T([0,1,2])([off_x,off_y,off_z])(STRUCT([columna]))


    if (closer ==0)
      return columna1;

    else{
      var closed1        = DISK(r)()
      var closed1_t      = T([0,1,2])([off_x,off_y,off_z])(closed1)
      var closed_2_t     = T([2])([h])(closed1_t)
      var cylinderClosed = STRUCT([columna1,closed1_t,closed_2_t])

      return cylinderClosed;
    }
};
// ==================================================================================================
// Funzione per il calcolo dei knots di una NUBS

function generate_knots (p) {

  var length = p.length;
  var degree = 2;              // grado della curva
  var n = (length + degree + 1);
  var j = 1;
  var knots = [];
  for (var i = 0; i < 3; i++) {
    knots[i] = 0;
  };
  for (var i = 3; i < n-3; j++, i++) {
    knots[i] = j;
  };
  for (var i = n-3; i < n; i++) {
    knots[i] = j;
  };
 return knots;
};


// ==================================================================================================
// ==================================================================================================


// 1) Scorrimano e muri per la scala
// ==================================================================================================

var muroScala1 = SIMPLEX_GRID([[-0.4,10.6],[-20,1.25],[3.7]]);
var muroScala2 = SIMPLEX_GRID([[-0.4,10.6],[-10,1.25],[3.7]]);
var muroG1     = SIMPLEX_GRID([[-0.2,10.8],[-10,1.5],[-3.7,0.3]]);
var muroG2     = SIMPLEX_GRID([[-0.2,10.8],[-19.75,1.5],[-3.7,0.3]]);

var muroN1     = SIMPLEX_GRID([[-0.3,10.7],[-19.9,1.45],[-0.4,0.4]]);
var muroN2     = SIMPLEX_GRID([[-0.2,10.8],[-19.75,1.7],[0.4]]);

var muroS1     = SIMPLEX_GRID([[-0.3,10.7],[-9.9,1.55],[-0.4,0.4]]);
var muroS2     = SIMPLEX_GRID([[-0.2,10.8],[-9.75,1.8],[0.4]]);


var muriScala  = STRUCT([muroScala1,muroScala2,muroG1,muroG2,muroS1,muroS2,muroN2,muroN1])

// 2) Gradini
// ==================================================================================================

var gradino1   = SIMPLEX_GRID([[-0.4,10.6],[-11.25,9],[0,0.2]]);
var gradino2   = SIMPLEX_GRID([[-0.8,10.2],[-11.25,9],[-0.2,0.2]]);
var gradino3   = SIMPLEX_GRID([[-1.2,9.8], [-11.25,9],[-0.4,0.2]]);
var gradino4   = SIMPLEX_GRID([[-1.6,9.4], [-11.25,9],[-0.6,0.2]]);
var gradino5   = SIMPLEX_GRID([[-2,9],     [-11.25,9],[-0.8,0.2]]);
var gradino6   = SIMPLEX_GRID([[-2.4,8.6] ,[-11.25,9],[-1,0.2]]);
var gradino7   = SIMPLEX_GRID([[-2.8,8.2], [-11.25,9],[-1.2,0.2]]);
var gradino8   = SIMPLEX_GRID([[-3.2,7.8], [-11.25,9],[-1.4,0.2]]);
var gradino9   = SIMPLEX_GRID([[-3.6,7.4], [-11.25,9],[-1.6,0.2]]);
var gradino10  = SIMPLEX_GRID([[-4,7],     [-11.25,9],[-1.8,0.2]]);
var gradino11  = SIMPLEX_GRID([[-4.4,6.6] ,[-11.25,9],[-2,0.2]]);
var gradino12  = SIMPLEX_GRID([[-4.8,6.2], [-11.25,9],[-2.2,0.2]]);
var gradino13  = SIMPLEX_GRID([[-5.2,5.8], [-11.25,9],[-2.4,0.2]]);
var gradino14  = SIMPLEX_GRID([[-5.6,5.4], [-11.25,9],[-2.6,0.2]]);
var gradino15  = SIMPLEX_GRID([[-6,5]    , [-11.25,9],[-2.8,0.2]]);
var gradino16  = SIMPLEX_GRID([[-6.4,4.6] ,[-11.25,9],[-3,0.2]]);
var gradino17  = SIMPLEX_GRID([[-6.8,4.2], [-11.25,9],[-3.2,0.2]]);
var gradino18  = SIMPLEX_GRID([[-7.2,3.8], [-11.25,9],[-3.4,0.2]]);
var gradino19  = SIMPLEX_GRID([[-7.6,3.4], [-11.25,9],[-3.6,0.2]]);
var gradino20  = SIMPLEX_GRID([[-8,6.4],   [-11.25,9],[-3.8,0.2]]);

var gradini = STRUCT([gradino1,gradino2,gradino3,gradino4,gradino5,
	gradino6,gradino7,gradino8,gradino9,gradino10,gradino11,gradino12,
	gradino13,gradino14,gradino15,gradino16,gradino17,gradino18,gradino19,gradino20])

var scalinata = COLOR(grigio_pietra)(STRUCT([gradini,muriScala]))


// 3) Sottoscala
// ==================================================================================================

var p_sottScala1    = [[11,11.4,1.5],[11.5,11.4,2],[12,11.4,2.5],
                       [12.5,11.4,2.5],[13,11.4,2],[13.4,11.4,1.5]]

var p_sottScala2    = [[11,10,1.5],[11.5,10,2],[12,10,2.5],
                       [12.5,10,2.5],[13,10,2],[13.4,10,1.5]]

var k_sottoScala    = generate_knots(p_sottScala1) // è uguale per entrambi
var c_sottoScala1   = NUBS(S0)(2)(k_sottoScala)(p_sottScala1)
var c_sottoScala2   = NUBS(S0)(2)(k_sottoScala)(p_sottScala2)
var arco_sottoScala = BEZIER(S1)([c_sottoScala1,c_sottoScala2]) // curva sotto

var control21       = [[11,10,4],[13.4,10,4],[0,0,0],[0,0,0]]; // punti superiori
var control22       = [[11,11.4,4],[13.4,11.4,4],[0,0,0],[0,0,0]];

var c21 = CUBIC_HERMITE(S0)(control21);
var c22 = CUBIC_HERMITE(S0)(control22);
var s21 = BEZIER(S1)([c21,c_sottoScala2])
var s22 = BEZIER(S1)([c22,c_sottoScala1])
var s23 = BEZIER(S1)([c21,c22])

var under_scala   = MAP(arco_sottoScala)(domain2D)
var under22       = MAP(s21)(domain2D)
var under23       = MAP(s22)(domain2D)
var under24       = MAP(s23)(domain2D)

var sottoLaScala  = STRUCT([under22,under_scala,under23,under24])

var sottoLaScala2 = T([1])([9.85])(sottoLaScala);
var sottoscale    = COLOR(grigio_marmo)(STRUCT([sottoLaScala,sottoLaScala2]))


// 4) Basamenti e colonne e Capitelli:
//=============================================================================

var appoggio1 = SIMPLEX_GRID([[-8.4,1],[-10.1,1],[-4,0.4]])
var appoggio2 = T([1])([2])(appoggio1)
var appoggio3 = T([1])([2])(appoggio2)
var appoggio4 = T([1])([2])(appoggio3)
var appoggio5 = T([1])([2])(appoggio4)
var appoggio6 = T([1])([2])(appoggio5)
var appoggi   = STRUCT([appoggio1,appoggio2,appoggio3,appoggio4,appoggio5,appoggio6])

var colonna1  = T([0,1])([8.4,10.1])(column(0.4,10,0.48,0.48,4.4,0))
var colonna2  = T([1])([2])(colonna1)
var colonna3  = T([1])([2])(colonna2)
var colonna4  = T([1])([2])(colonna3)
var colonna5  = T([1])([2])(colonna4)
var colonna6  = T([1])([2])(colonna5)
var colonne   = STRUCT([colonna1,colonna2,colonna3,colonna4,colonna5,colonna6])

var ornamento1= column(0.2,1,0,0,0,1)
var orn1_T    = T([0,1,2])([8.4,10,14.2])(R([0,2])([PI/2])(ornamento1))
var orn2_T    = T([1])([1.2])(orn1_T)

var appoggio_sup = SIMPLEX_GRID([[-8.4,1],[-9.8,1.6],[-14.4,0.1]])
var capitello1 = STRUCT([orn1_T,orn2_T,appoggio_sup])

var capitello2 = T([1])([2])(capitello1)
var capitello3 = T([1])([2])(capitello2)
var capitello4 = T([1])([2])(capitello3)
var capitello5 = T([1])([2])(capitello4)
var capitello6 = T([1])([2])(capitello5)

var all_capitelli = STRUCT([capitello1,capitello2,capitello3,capitello4,capitello5,capitello6])

var sopraColonne  = SIMPLEX_GRID([[-8.4,1.3],[-9.7,11.6],[-14.5,0.5]]) //sopra i capitelli

var capiColonne   = COLOR(grigio_marmo)(STRUCT([all_capitelli,colonne,appoggi,sopraColonne]))

// 6) Muri porticato
// ======================================================================================

var base    = SIMPLEX_GRID([[-10,4.4],[-10,1.4],[-4,1]])
var basso2  = SIMPLEX_GRID([[-10,1],[-10,1.4],[8]])
var basso3  = SIMPLEX_GRID([[-13.4,1],[-10,1.4],[8]])
var basso2b = SIMPLEX_GRID([[-10,1],[-9.8,1.8],[-8,1.5]]) // sporgenze
var basso3b = SIMPLEX_GRID([[-13.4,1],[-9.8,1.8],[-8,1.5]])
var basso2c = SIMPLEX_GRID([[-10,1],[-10,1.4],[-9.5,5.5]])
var basso3c = SIMPLEX_GRID([[-13.4,1],[-10,1.4],[-9.5,5.5]])

var bassRl1 = SIMPLEX_GRID([[-13.2,1.2],[-9.6,2],[0.4]])
var bassRl2 = SIMPLEX_GRID([[-13.3,1.1],[-9.7,1.9],[-0.4,0.4]])


var bassi_a   = COLOR(grigio_marmo)(STRUCT([base,basso2,basso2c,basso3,basso3c]))
var bassi_b   = COLOR(grigio_pietra)(STRUCT([basso3b,basso2b,bassRl2,bassRl1]))
var bassi     = STRUCT([bassi_b,bassi_a])

var p_arco  = [[11,11.4,11],[11.5,11.4,11.5],[12,11.4,12],
              [ 12.5,11.4,12],[13,11.4,11.5],[13.4,11.4,11]]
var p_arco2 = [[11,10,11],[11.5,10,11.5],[12,10,12],
              [ 12.5,10,12],[13,10,11.5],[13.4,10,11]]
var k_arco  = generate_knots(p_arco); // valgono per entrambi,  numero di punti di controllo
var c_arco  = NUBS(S0)(2)(k_arco)(p_arco)
var c_arco2 = NUBS(S0)(2)(k_arco)(p_arco2)

var archi_under_bez = BEZIER(S1)([c_arco,c_arco2]) // curva sotto

var control1 = [[11,10,15],[13.4,10,15],[0,0,0],[0,0,0]]; // punti superiori
var control2 = [[11,11.4,15],[13.4,11.4,15],[0,0,0],[0,0,0]];
var c11      = CUBIC_HERMITE(S0)(control1);
var c12      = CUBIC_HERMITE(S0)(control2);
var s1       = BEZIER(S1)([c11,c_arco2])
var s2       = BEZIER(S1)([c12,c_arco])
var s3       = BEZIER(S1)([c11,c12])

var under_archi = MAP(archi_under_bez)(domain2D)
var under2      = MAP(s1)(domain2D)
var under3      = MAP(s2)(domain2D)
var under4      = MAP(s3)(domain2D)
var unders      = COLOR(grigio_marmo)(STRUCT([under2,under_archi,under3,under4]))

var laterale_balcone = STRUCT([unders,bassi])
var laterale2 = T([1])([9.85])(laterale_balcone);

var porticato = STRUCT([laterale_balcone,laterale2])


// 7) Tetto Porticato
// ==========================================================

var baseTetto = COLOR(grigio_pietra)(SIMPLEX_GRID([[-8,6.4],[-9.4,12],[-15,0.2]]))

var p_tetto_avanti1    = [[8,9.4,15.2],[8,15.4,18.5],[0,0,0],[0,0,0]]
var p_tetto_avanti2    = [[8,15.4,18.5],[8,21.4,15.2],[0,0,0],[0,0,0]]
var p_tetto_avanti21   = [[8,9.9,15.2],[8,15.4,18],[0,0,0],[0,0,0]]
var p_tetto_avanti22   = [[8,15.4,18],[8,20.9,15.2],[0,0,0],[0,0,0]]

var p_tetto_indietro1  = [[14.4,9.4,15.2],[14.4,15.4,18.5],[0,0,0],[0,0,0]]
var p_tetto_indietro2  = [[14.4,15.4,18.5],[14.4,21.4,15.2],[0,0,0],[0,0,0]]
var p_tetto_indietro21 = [[8.4,9.9,15.2],[8.4,15.4,18],[0,0,0],[0,0,0]]
var p_tetto_indietro22 = [[8.4,15.4,18],[8.4,20.9,15.2],[0,0,0],[0,0,0]]

var p_basso_tetto      =[[8.4,9.9,15.2],[8.4,20.9,15.2],[0,0,0],[0,0,0]]

var c_tetto  = CUBIC_HERMITE(S0)(p_tetto_avanti1);
var c_tetto2 = CUBIC_HERMITE(S0)(p_tetto_avanti2)
var c_tetto3 = CUBIC_HERMITE(S0)(p_tetto_indietro1)
var c_tetto4 = CUBIC_HERMITE(S0)(p_tetto_indietro2)

var c_tetto_d  = CUBIC_HERMITE(S0)(p_tetto_avanti21);
var c_tetto2_d = CUBIC_HERMITE(S0)(p_tetto_avanti22)
var c_tetto3_d = CUBIC_HERMITE(S0)(p_tetto_indietro21)
var c_tetto4_d = CUBIC_HERMITE(S0)(p_tetto_indietro22)

var c_basso_tetto  = CUBIC_HERMITE(S0)(p_basso_tetto)
var tetus          = CUBIC_HERMITE(S1)([c_tetto,c_tetto3,[0,0,0],[0,0,0]])
var tetus2         = CUBIC_HERMITE(S1)([c_tetto2,c_tetto4,[0,0,0],[0,0,0]])
var tetus_d        = CUBIC_HERMITE(S1)([c_tetto_d,c_tetto3_d,[0,0,0],[0,0,0]])
var tetus2_d       = CUBIC_HERMITE(S1)([c_tetto2_d,c_tetto4_d,[0,0,0],[0,0,0]])
var horiz_tettus1  = CUBIC_HERMITE(S1)([c_tetto,c_tetto_d,[0,0,0],[0,0,0]])
var horiz_tettus2  = CUBIC_HERMITE(S1)([c_tetto2,c_tetto2_d,[0,0,0],[0,0,0]])
var h_basso_tetto1 = CUBIC_HERMITE(S1)([c_basso_tetto,c_tetto3_d,[0,0,0],[0,0,0]])
var h_basso_tetto2 = CUBIC_HERMITE(S1)([c_basso_tetto,c_tetto4_d,[0,0,0],[0,0,0]])

var tetto1       = COLOR(marrone_tetto)(MAP(tetus)(domain2D))
var tetto2       = COLOR(marrone_tetto)(MAP(tetus2)(domain2D))
var tetto1_d     = COLOR(marrone_tetto)(MAP(tetus_d)(domain2D))
var tetto2_d     = COLOR(marrone_tetto)(MAP(tetus2_d)(domain2D))
var h_tetto1     = COLOR(grigio_pietra)(MAP(horiz_tettus1)(domain2D))
var h_tetto2     = COLOR(grigio_pietra)(MAP(horiz_tettus2)(domain2D))
var basso_tetto1 = COLOR(grigio_marmo)(MAP(h_basso_tetto1)(domain2D))
var basso_tetto2 = COLOR(grigio_marmo)(MAP(h_basso_tetto2)(domain2D))


var tetto_porticato = STRUCT([tetto1,tetto2,tetto1_d,tetto2_d,h_tetto1,
                              h_tetto2,basso_tetto1,basso_tetto2,])
var all_tetto       = STRUCT([tetto_porticato,baseTetto])


// 8) Tasselli
// ============================================================================================
var tassello1    = SIMPLEX_GRID([[-8,0.2],[-9.4,0.2],[-14.8,0.2]])
var tasselli     = STRUCT([tassello1])


for(var i=0.4;i<12;i=i+0.4){       // tasselli davanti
  var tasselloi = T([1])([0.4+i])(tassello1)
  tasselli.models.push(tasselloi)}

for(var i=0.4;i<6;i=i+0.4){        // tasselli destra
  var tasselloi = T([0])([0.4+i])(tassello1)
  tasselli.models.push(tasselloi)}

for(var i=0.4;i<6;i=i+0.4){        // tasselli sinistra
  var tasselloi = T([0,1])([0.4+i,11.8])(tassello1)
  tasselli.models.push(tasselloi)}

var tasselli = COLOR(grigio_pietra)(tasselli)

var porticatoIntero = STRUCT([all_tetto,porticato,capiColonne,
                              sottoscale,scalinata,muriScala,tasselli])

var porticatoT  =  T([1])([20])(porticatoIntero)
var porticatoT2 =  T([0,1])([66.9,4])(R([0,1])(PI/2)(porticatoT))
var porticatoT3 =  T([0,1])([-4,66.9])(R([0,1])(-PI/2)(porticatoT))
var porticatoT4 =  T([0,1])([63,70.9])(R([0,1])(-PI)(porticatoT))

var porticati   =  STRUCT([porticatoT,porticatoT2,porticatoT3,porticatoT4])
DRAW(porticati)

// 9) Primo Muro
// ============================================================================

var muroSotto1     = SIMPLEX_GRID([[-14.4,0.6],[-18.75,33.75],[1]])
var muroSottoCavo  = SIMPLEX_GRID([[-14.4,0.6],[-18.75,4.5,-2.25,20.25,-2.25,4.5],[-1,1]])
var muroSottoCavo2 = SIMPLEX_GRID([[-14.4,0.6],[-18.75,33.75],[-2,1.9]])
var muroSottoCavo3 = SIMPLEX_GRID([[-14.1,0.9],[-18.45,34.35],[-3.7,0.3]])
var muroSottoCavo4 = SIMPLEX_GRID([[-14.4,0.6],[-18.75,33.75],[-4,1]])
var muroSottoCavo5 = SIMPLEX_GRID([[-14.4,0.6],[-18.75,4.5,-2.25,4.5,1,    // parte sx
                                    -1.75,1,0.75,-2.25,0.75,1,-1.75,1,     // parte centrale
                                     4.5,-2.25,4.5],[-5,4]])               // parte dx

var muroSottoCavo6  = SIMPLEX_GRID([[-14.4,0.6],[-18.75,15.75,-2.25,15.75],[-9,1]])
var muroSottoCavo7  = SIMPLEX_GRID([[-14.4,0.6],[-18.75,33.75],[-10,2]])
var muroSottoCavo8  = SIMPLEX_GRID([[-14.4,0.6],[-18.75,11.25,
                                      1,-1.75,1,3.75, 1,-1.75,1, 11.25],[-12,2]])
var muroSottoCavo9  = SIMPLEX_GRID([[-14.4,0.6],[-18.75,33.75],[-14,2]])
var muroSottoCavo10 = SIMPLEX_GRID([[-14.4,0.6],[-18.75,4.5,-2.25,20.25,-2.25,4.5],[-16,1.5]])
var muroSottoCavo11 = SIMPLEX_GRID([[-14.4,0.6],[-18.75,33.75],[-17.5,1]])

var muroInsenature1 =  SIMPLEX_GRID([[-14.2,0.8],[-18.45,34.25],[0.4]])
var muroInsenature2 =  SIMPLEX_GRID([[-14.3,0.7],[-18.45,34.15],[-0.4,0.4]])
var muroInsenature3 =  SIMPLEX_GRID([[-14.2,0.8],[-18.45,34.15],[-15,0.2]])


// Disegno le finestre:

var finestra1   =  SIMPLEX_GRID([[-14.8,0.2],[-23.25,2.25],[-1,1]])
var finestra2   =  SIMPLEX_GRID([[-14.8,0.2],[-45.75,2.25],[-1,1]])
var finestra3   =  SIMPLEX_GRID([[-14.8,0.2],[-23.25,2.25],[-5,4]])
var finestra4   =  SIMPLEX_GRID([[-14.8,0.2],[-31,1.75],[-5,4]])
var finestra5   =  SIMPLEX_GRID([[-14.8,0.2],[-38.5,1.75],[-5,4]])
var finestra6   =  SIMPLEX_GRID([[-14.8,0.2],[-45.75,2.25],[-5,4]])
var finestra7   =  SIMPLEX_GRID([[-14.8,0.2],[-31,1.75],[-12,2]])
var finestra8   =  SIMPLEX_GRID([[-14.8,0.2],[-38.5,1.75],[-12,2]])
var finestra9   =  SIMPLEX_GRID([[-14.8,0.2],[-23.25,2.25],[-16,1.5]])
var finestra10  =  SIMPLEX_GRID([[-14.8,0.2],[-45.75,2.25],[-16,1.5]])

var finestre    =  COLOR(celeste_finestre)(STRUCT([finestra1,finestra2,finestra3,finestra4,finestra5,
                          finestra6,finestra7,finestra8,finestra9,finestra10]))

// Decorazioni finestre

var scalato      = SCALE([0,1,2])([0.04,0.3,0.5])(all_tetto);

var scalato_T    = T([0,1,2])([13.8,19.7,1.5])(scalato)

var scalato_T2   = T([1])([22.5])(scalato_T)

var decorazioni  = STRUCT([scalato_T,scalato_T2])


var muriFaccia   = COLOR(grigio_avorio)(STRUCT([muroSotto1,muroSottoCavo,muroSottoCavo2,muroSottoCavo3,
                           muroSottoCavo4,muroSottoCavo5,muroSottoCavo6,muroSottoCavo7,
                           muroSottoCavo8,muroSottoCavo9,muroSottoCavo10,muroSottoCavo11]))

var insenature   = COLOR(grigio_marmo)(STRUCT([muroInsenature1,muroInsenature2,muroInsenature3]))

var muriFacciata = STRUCT([muriFaccia,finestre,decorazioni,insenature])
DRAW(muriFacciata)



// =============================================================================================
// ==========================TRASLAZIONI FACCIATE===============================================

var muriFacciataT1 = R([0,1])(PI/2)(muriFacciata)
var muriFacciataT2 = R([0,1])(-PI/2)(muriFacciata)
var muriFacciataT3 = R([0,1])(-PI)(muriFacciata)


var muriFaccT1     = T([0,1])([66.9,4])(muriFacciataT1)  // sinistra
var muriFaccT2     = T([0,1])([-4,66.9])(muriFacciataT2) // destra
var muriFaccT3     = T([0,1])([63,70.9])(muriFacciataT3) // dietro,da sistema

DRAW(muriFaccT1)
DRAW(muriFaccT2)
DRAW(muriFaccT3)

var anteTetto      = COLOR(grigio_marmo)(SIMPLEX_GRID([[-14.4,34.2],[-18.4,34.1],[-18.5,0.5]]))
DRAW(anteTetto)


//=====================================================================================
//==================== TETTO E CUPOLA =================================================

//1)Tetto

var puntiTettoSx       = [[14.2,18.2,19],[48.8,18.6,19],[0,0,0],[0,0,0]] // unico
var puntiTettoUp       = [[48.8,18.2,19],[48.8,52.7,19],[0,0,0],[0,0,0]]
var puntiTettoDx       = [[48.8,52.7,19],[14.2,52.7,19],[0,0,0],[0,0,0]]
var puntiTettoDwn      = [[14.2,52.7,19],[14.2,18.2,19],[0,0,0],[0,0,0]]

var puntiSopraTettoSx  = [[29.5,33.45,24],[33.5,33.45,24],[0,0,0],[0,0,0]]
var puntiSopraTettoUp  = [[33.5,33.45,24],[33.5,37.45,24],[0,0,0],[0,0,0]]
var puntiSopraTettoDx  = [[33.5,37.45,24],[29.5,37.45,24],[0,0,0],[0,0,0]]
var puntiSopraTettoDwn = [[29.5,37.45,24],[29.5,33.45,24],[0,0,0],[0,0,0]]


var n_puntiTettoSx       = CUBIC_HERMITE(S0)(puntiTettoSx)
var n_puntiTettoDx       = CUBIC_HERMITE(S0)(puntiTettoDx)
var n_puntiTettoUp       = CUBIC_HERMITE(S0)(puntiTettoUp)
var n_puntiTettoDwn      = CUBIC_HERMITE(S0)(puntiTettoDwn)

var n_puntiSopraTettoSx  = CUBIC_HERMITE(S0)(puntiSopraTettoSx)
var n_puntiSopraTettoDx  = CUBIC_HERMITE(S0)(puntiSopraTettoDx)
var n_puntiSopraTettoUp  = CUBIC_HERMITE(S0)(puntiSopraTettoUp)
var n_puntiSopraTettoDwn = CUBIC_HERMITE(S0)(puntiSopraTettoDwn)


var c_tettoSx  = CUBIC_HERMITE(S1)([n_puntiTettoSx,n_puntiSopraTettoSx,[0,0,0],[0,0,0]])
var c_tettoDx  = CUBIC_HERMITE(S1)([n_puntiTettoDx,n_puntiSopraTettoDx,[0,0,0],[0,0,0]])
var c_tettoUp  = CUBIC_HERMITE(S1)([n_puntiTettoUp,n_puntiSopraTettoUp,[0,0,0],[0,0,0]])
var c_tettoDwn = CUBIC_HERMITE(S1)([n_puntiTettoDwn,n_puntiSopraTettoDwn,[0,0,0],[0,0,0]])

var tettoSx    = MAP(c_tettoSx)(domain2D)
var tettoDx    = MAP(c_tettoDx)(domain2D)
var tettoUp    = MAP(c_tettoUp)(domain2D)
var tettoDwn   = MAP(c_tettoDwn)(domain2D)

// 2) Cupola

var puntiCupola_1      = [[8.5,0,0],[8.5,0,1],[8.5,0,1.7]]
var knots_cupola       = generate_knots(puntiCupola_1); // Vale per tutte e 19
var curva_cupola_1     = NUBS(S0)(2)(knots_cupola)(puntiCupola_1);
var curvaRotSurf_1     = ROTATIONAL_SURFACE(curva_cupola_1);
var curvaMapRotSurf_1  = MAP(curvaRotSurf_1)(dominioRot);

var puntiCupola_2      = [[8.5,0,1.7],[8,0,1.85],[7.5,0,2]]
var curva_cupola_2     = NUBS(S0)(2)(knots_cupola)(puntiCupola_2);
var curvaRotSurf_2     = ROTATIONAL_SURFACE(curva_cupola_2);
var curvaMapRotSurf_2  = MAP(curvaRotSurf_2)(dominioRot);

var puntiCupola_3      = [[7.5,0,2],[7.5,0,2.12],[7.5,0,2.24]]
var curva_cupola_3     = NUBS(S0)(2)(knots_cupola)(puntiCupola_3);
var curvaRotSurf_3     = ROTATIONAL_SURFACE(curva_cupola_3);
var curvaMapRotSurf_3  = MAP(curvaRotSurf_3)(dominioRot);

var puntiCupola_4      = [[7.5,0,2.24],[7.25,0,2.34],[7,0,2.44]]
var curva_cupola_4     = NUBS(S0)(2)(knots_cupola)(puntiCupola_4);
var curvaRotSurf_4     = ROTATIONAL_SURFACE(curva_cupola_4);
var curvaMapRotSurf_4  = MAP(curvaRotSurf_4)(dominioRot);

var puntiCupola_5      = [[7,0,2.44],[7,0,2.56],[7,0,2.68]]
var curva_cupola_5     = NUBS(S0)(2)(knots_cupola)(puntiCupola_5);
var curvaRotSurf_5     = ROTATIONAL_SURFACE(curva_cupola_5);
var curvaMapRotSurf_5  = MAP(curvaRotSurf_5)(dominioRot);

var puntiCupola_6      = [[7,0,2.68],[6.5,0,2.78],[6.25,0,2.88]]
var curva_cupola_6     = NUBS(S0)(2)(knots_cupola)(puntiCupola_6);
var curvaRotSurf_6     = ROTATIONAL_SURFACE(curva_cupola_6);
var curvaMapRotSurf_6  = MAP(curvaRotSurf_6)(dominioRot);

var puntiCupola_7      = [[6.25,0,2.88],[6.25,0,3.03],[6.25,0,3.18]]
var curva_cupola_7     = NUBS(S0)(2)(knots_cupola)(puntiCupola_7);
var curvaRotSurf_7     = ROTATIONAL_SURFACE(curva_cupola_7);
var curvaMapRotSurf_7  = MAP(curvaRotSurf_7)(dominioRot);

var puntiCupola_8      = [[6.25,0,3.18],[6,0,3.43],[5.75,0,3.68]]
var curva_cupola_8     = NUBS(S0)(2)(knots_cupola)(puntiCupola_8);
var curvaRotSurf_8     = ROTATIONAL_SURFACE(curva_cupola_8);
var curvaMapRotSurf_8  = MAP(curvaRotSurf_8)(dominioRot);

var puntiCupola_9      = [[5.75,0,3.68],[5.75,0,3.8],[5.75,0,3.92]]
var curva_cupola_9     = NUBS(S0)(2)(knots_cupola)(puntiCupola_9);
var curvaRotSurf_9     = ROTATIONAL_SURFACE(curva_cupola_9);
var curvaMapRotSurf_9  = MAP(curvaRotSurf_9)(dominioRot);

var puntiCupola_10     = [[5.75,0,3.92],[5.5,0,4.12],[5.25,0,4.32]]
var curva_cupola_10    = NUBS(S0)(2)(knots_cupola)(puntiCupola_10);
var curvaRotSurf_10    = ROTATIONAL_SURFACE(curva_cupola_10);
var curvaMapRotSurf_10 = MAP(curvaRotSurf_10)(dominioRot);

var puntiCupola_11     = [[5.25,0,4.32],[2.25,0,4.40],[5.25,0,4.48]]
var curva_cupola_11    = NUBS(S0)(2)(knots_cupola)(puntiCupola_11);
var curvaRotSurf_11    = ROTATIONAL_SURFACE(curva_cupola_11);
var curvaMapRotSurf_11 = MAP(curvaRotSurf_11)(dominioRot);

var puntiCupola_12     = [[5.25,0,4.48],[4.65,0,4.68],[4.25,0,4.88]]
var curva_cupola_12    = NUBS(S0)(2)(knots_cupola)(puntiCupola_12);
var curvaRotSurf_12    = ROTATIONAL_SURFACE(curva_cupola_12);
var curvaMapRotSurf_12 = MAP(curvaRotSurf_12)(dominioRot);

var puntiCupola_13     = [[4.25,0,4.88],[4.25,0,4.93],[4.25,0,4.98]]
var curva_cupola_13    = NUBS(S0)(2)(knots_cupola)(puntiCupola_13);
var curvaRotSurf_13    = ROTATIONAL_SURFACE(curva_cupola_13);
var curvaMapRotSurf_13 = MAP(curvaRotSurf_13)(dominioRot);

var puntiCupola_14     = [[4.25,0,4.98],[3.75,0,5.18],[3.5,0,5.38]]
var curva_cupola_14    = NUBS(S0)(2)(knots_cupola)(puntiCupola_14);
var curvaRotSurf_14    = ROTATIONAL_SURFACE(curva_cupola_14);
var curvaMapRotSurf_14 = MAP(curvaRotSurf_14)(dominioRot);

var puntiCupola_15     = [[3.5,0,5.38],[3.5,0,5.53],[3.5,0,5.68]]
var curva_cupola_15    = NUBS(S0)(2)(knots_cupola)(puntiCupola_15);
var curvaRotSurf_15    = ROTATIONAL_SURFACE(curva_cupola_15);
var curvaMapRotSurf_15 = MAP(curvaRotSurf_15)(dominioRot);

var puntiCupola_16     = [[3.5,0,5.68],[3,0,5.75],[2.5,0,5.98]]
var curva_cupola_16    = NUBS(S0)(2)(knots_cupola)(puntiCupola_16);
var curvaRotSurf_16    = ROTATIONAL_SURFACE(curva_cupola_16);
var curvaMapRotSurf_16 = MAP(curvaRotSurf_16)(dominioRot);

var puntiCupola_17     = [[2.5,0,6.02],[2.5,0,6.08],[2.5,0,6.18]]
var curva_cupola_17    = NUBS(S0)(2)(knots_cupola)(puntiCupola_17);
var curvaRotSurf_17    = ROTATIONAL_SURFACE(curva_cupola_17);
var curvaMapRotSurf_17 = MAP(curvaRotSurf_17)(dominioRot);

var puntiCupola_18     = [[2.5,0,6.18],[2,0,6.23],[1.5,0,6.38]]
var curva_cupola_18    = NUBS(S0)(2)(knots_cupola)(puntiCupola_18);
var curvaRotSurf_18    = ROTATIONAL_SURFACE(curva_cupola_18);
var curvaMapRotSurf_18 = MAP(curvaRotSurf_18)(dominioRot);

var puntiCupola_19     = [[1.5,0,6.38],[1.5,0,6.45],[1.5,0,6.68]]
var curva_cupola_19    = NUBS(S0)(2)(knots_cupola)(puntiCupola_19);
var curvaRotSurf_19    = ROTATIONAL_SURFACE(curva_cupola_19);
var curvaMapRotSurf_19 = MAP(curvaRotSurf_19)(dominioRot);


var puntiCupola_20     = [[1.5,0,6.68],[0.90,0,6.7],[0.78,0,6.82],[0.68,0,6.92],[0.48,0,7],
                          [0.28,0,7], [0.20,0,7.14],[0.15,0,7.2],[0.14,0,7.24],[0.1,0,7.28],
                          [0.05,0,7.3],[0,0,7.35]];

var knots_cupola_20    = generate_knots(puntiCupola_20);
var curva_cupola_20    = NUBS(S0)(2)(knots_cupola_20)(puntiCupola_20);
var curvaRotSurf_20    = ROTATIONAL_SURFACE(curva_cupola_20);
var curvaMapRotSurf_20 = MAP(curvaRotSurf_20)(dominioRot);


var muriVerticale      = COLOR(grigio_marmo)(STRUCT([curvaMapRotSurf_1,curvaMapRotSurf_3,curvaMapRotSurf_5,
                                                   curvaMapRotSurf_7,curvaMapRotSurf_9,curvaMapRotSurf_11,
                                                   curvaMapRotSurf_13,curvaMapRotSurf_15,curvaMapRotSurf_17,
                                                   curvaMapRotSurf_19]))

var tegolato           = COLOR(marrone_tetto)(STRUCT([curvaMapRotSurf_2,curvaMapRotSurf_4,curvaMapRotSurf_6,
                                                      curvaMapRotSurf_8,curvaMapRotSurf_10,curvaMapRotSurf_12,
                                                      curvaMapRotSurf_14, curvaMapRotSurf_16,curvaMapRotSurf_18,
                                                      curvaMapRotSurf_20]));


var cupola = T([0,1,2])([31.5,35.5,21.5])(STRUCT([muriVerticale, tegolato]))
DRAW(cupola)


var tettoBasso = COLOR(marrone_tetto)(STRUCT([tettoSx,tettoDx,tettoUp,tettoDwn]))
DRAW(tettoBasso)


var prato = COLOR(verde_prato)(SIMPLEX_GRID([[65.2],[70.1],[0.05]]))
DRAW(prato)

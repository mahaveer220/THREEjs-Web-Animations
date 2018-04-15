// initialising the scene 
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

var Distance;
var velocity;
// var T1;
// var T2;

var Smin;
var Sdefault;
var Smax;
var Sstep;
var Vmin;
var Vdefault;
var Vmax;
var Vstep;
// var t1min;
// var t1default;
// var t1max;
// var t1step;
// var t2min;
// var t2default;
// var t2max;
// var t2step;

var x1;
var x2;
var y1;
var y2;
var xp;
var yp;
var mxmin;
var mxmax;
var mx;
var c;
var ss;
var sv;

var grid_x=-15;
var grid_y=5;
var grid_z=0;


var cordinateMultiplier=3.3;
var text_cordinateMultiplier=3.2;

var text0;
var textx1;
var textx2;
var textx3;
var textx4;
var textx5;
var textx6;
var texty1;
var texty2;
var texty3;
var texty4;
var texty5;
var texty6;
var textline;
var textxaxis;
var textyaxis;

var dir1;
var oridgin1;
var hex1;
var a;
var b;
var length1;
var arrowHelper1;
var grid;

var v0;
var v1;
var v2;
var v3;
var v4;
var v5;
var car;
var linepart;
var learnback;

var fo1;
var fo2;
var fo3;
var fo4;
var fh;
var initial_velocity ;
var initial_distance;
var readout_graph;
var readout_car;




function PIEcreateTable(i, n, g, d) {
    var c;
    var b;
    var m;
    var f;
    var a;
    var h;
    var l;
    var k;
    var j;
    var e;
    PIEtableChangeHandlers.push(null);
    PIEtableNames.push(i);
    PIEtableRows.push(new Array(0));
    PIEtableData.push(new Array(0));
    PIEtableChangeHandlers.push(null);
    PIEcurrentTable = PIEtableNames.length - 1;
    c = document.createElement("div");
    c.draggable = false;
    c.addEventListener("dragstart", PIEtableDragStart, false);
    c.style.border = "2px solid white";
    c.style.borderRadius = "10px";
    c.style.display = "inline-block";
    c.style.position = "absolute";
    c.style.top = "30px";
    c.style.left="10px";
    c.style.color = "white";
    document.body.appendChild(c);
    b = document.createElement("div");
    b.style.display = "inline-block";
    b.style.width = "100%";
    b.style.padding = "0px";
    c.appendChild(b);
    m = document.createElement("p");
    m.style.display = "inline-block";
    m.style.width = "100%";
    m.style.margin = "auto";
    m.style.border = "2 px solid white";
    m.style.borderRadius = "10px";
    m.style.backgroundColor = "#18b4bc";
    //63aee3#bf6605
    b.appendChild(m);
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    a = document.createElement("img");
    a.src = "../../../PIE/images/TableAdd.png";
    a.alt = "add";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    a = document.createElement("img");
    a.src = "../../../PIE/images/TableDelete.png";
    a.alt = "delete";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    a = document.createElement("span");
    a.style.padding = "5px";
    a.style.margin = "auto";
    a.style.align = "center";
    a.innerHTML = "<b>" + i + "</b>";
    m.appendChild(a);
    f = document.createElement("button");
    f.style.background = "none";
    f.style.border = "none";
    f.style.boxSizing = "border-box";
    f.style.align = "right";
    f.addEventListener("click", PIEtoggleTable, false);
    m.appendChild(f);
    a = document.createElement("img");
    a.src = "../../../PIE/images/TableFold.png";
    a.alt = "delete";
    a.height = "16";
    a.width = "16";
    a.style.display = "inline";
    f.appendChild(a);
    a = document.createElement("div");
    h = document.createElement("table");
    h.style.display = "inline-block";
    h.style.border = "1px solid white";
    h.style.borderRadius = "10px";
    h.style.paddingTop = "20px";
    h.style.paddingLeft = "0px";
    h.style.paddingRight= "0px";
    h.style.backgroundColor = "#1a1a1a";
    PIEtables.push(h);
    a.appendChild(h);
    c.appendChild(a);
    for (j = 0; j < n; j++) {
        for (e = 0; e < g; e++) {
            if (j == 0) {
                k = PIEcreateTableCell(j, e, d)
            } else {
                k = PIEcreateTableCell(j, e, false)
            }
        }
    }
    PIEupdateTable(PIEtables[PIEcurrentTable])
}


function PIEcreateInputElement(b, c) {
    var a;
    a = document.createElement("input");
    a.style.color = "#000000";
    //a.style.backgroundColor = "#0060CC";
    a.style.marginLeft="30px";
    a.style.border = "2px solid #18b4bc";
    if (b >= 7) {
        a.size = (b - 6)
    } else {
        a.size = 1
    }
    a.addEventListener("keyup", PIEexpandCell, false);
    if (PIEtableChangeHandlers[PIEcurrentTable] != null) {
        a.addEventListener("change", PIEtableInputChange, false)
    }
    a.addEventListener("change", PIEtableInputChange, false);
    a.value = c;
    return (a)
}


function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}




function GridHelper( size, divisions, color1, color2 ) {

  size = size || 10;
  divisions = divisions || 10;
  color1 = new Color( color1 !== undefined ? color1 : 0x444444 );
  color2 = new Color( color2 !== undefined ? color2 : 0x888888 );

  var center = divisions / 2;
  var step = size / divisions;
  var halfSize = size / 2;

  var vertices = [], colors = [];

  for ( var i = 0, j = 0, k = - halfSize; i <= divisions; i ++, k += step ) {

    vertices.push( - halfSize, 0, k, halfSize, 0, k );
    vertices.push( k, 0, - halfSize, k, 0, halfSize );

    var color = i === center ? color1 : color2;

    color.toArray( colors, j ); j += 3;
    color.toArray( colors, j ); j += 3;
    color.toArray( colors, j ); j += 3;
    color.toArray( colors, j ); j += 3;

  }

  var geometry = new BufferGeometry();
  geometry.addAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
  geometry.addAttribute( 'color', new Float32BufferAttribute( colors, 3 ) );

  var material = new LineBasicMaterial( { vertexColors: VertexColors } );

  LineSegments.call( this, geometry, material );

}

document.addEventListener("click",doMouseEvent);

function doMouseEvent(e) {
  // // console.log(e.clientX + " " + e.clientY);
  if(e.clientX>263&& e.clientX<597 && e.clientY>83 && e.clientY<420){

    xp=(e.clientX-263)/56.2;
    yp=(420-e.clientY)/56.2;

    // console.log(xp+"       "+yp);
        console.log(e.clientY)
        console.log(e.clientX)
        f1();



  }}







function createMesh(geom, imageFile) {
       var texture = new THREE.TextureLoader().load(imageFile);
       var mat = new THREE.MeshBasicMaterial();
       mat.map = texture;
       mat.transparent = true;
       mat.map.needsUpdate = true;
       var mesh = new THREE.Mesh(geom, mat);PIErender();
       PIErender();
       return mesh;

}

function PIEremoveElement(b) {
    var a;
    var c;
    PIEscene.remove(b);
    c = false;
    for (a = PIEsceneElements.length - 1; (c == false) && (a >= 0); a--) {
        if (b == PIEsceneElements[a]) {
            while (a < PIEsceneElements.length - 1) {
                PIEsceneElements[a] = PIEsceneElements[a + 1];
                a++
            }
            PIEsceneElements.pop();
            c = true
        }
    }
}




function handleS(newValue)
{
    ss=newValue;
     PIEchangeDisplayText("Sd",ss); 
 
     // console.log(ss);
    PIErender();
}

function handleV(newValue)
{
      sv=Math.abs(newValue);
    
     PIEchangeDisplayText("Vd",sv);

    PIErender();
}

// function handlet1(newValue)
// {
    
     

//     PIErender();
// }

// function handlet2(newValue)
// {
    
     

//     PIErender();
// }






function initialiseControlVariables()
{
    Distance="S";      
    Sdefault=0;    
    Smin=0;   
    Smax=4;    
    Sstep=0.01;   

    velocity="V";      
    Vdefault=0;    
    Vmin=-1/2;   
    Vmax=1/2;    
    Vstep=0.01;   

    // T1="t1";
    // t1default=2;
    // t1min=1;
    // t1max=3;
    // t1step=1.0;

    // T2="t2";
    // t2default=2;
    // t2min=4;
    // t2max=6;
    // t2step=1.0;






}

function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider(Distance, Sdefault, handleS, Smin, Smax, Sstep);
    PIEaddInputSlider(velocity, Vdefault, handleV, Vmin, Vmax, Vstep);
    // PIEaddInputSlider(T1, t1default, handlet1, t1min, t1max, t1step);
    // PIEaddInputSlider(T2, t2default, handlet2, t2min, t2max, t2step);


    /* Create Display Panel */
    // PIEaddDisplayText("S",Sdefault);
    // PIEaddDisplayText("V",Vdefault);
    // PIEaddDisplayText("t1",t1default);
    // PIEaddDisplayText("t2",t2default);

    PIEaddDualCommand( "Experiment " , f1 );
    PIEaddDualCommand( "Learn " , f2 );
   
    


}

function f1(){


  c=1;
  grid.visible=true;    
  text0.visible=true;
  textx1.visible=true;
  textx2.visible=true;
  textx3.visible=true;
  textx4.visible=true;
  textx5.visible=true;
  textx6.visible=true;
  texty1.visible=true;
  texty2.visible=true;
  texty3.visible=true;
  texty4.visible=true;
  texty5.visible=true;
  texty6.visible=true;
  if(learnback) learnback.visible=false;
 

  // x1=PIEgetInputSlider("t1");
  // x2=PIEgetInputSlider("t2");
  // y1=PIEgetInputSlider("S");
  // y2=PIEgetInputSlider("V");
  // console.render(x1)
  x1=grid_x-10+0*cordinateMultiplier;
  y1=grid_y-10+ss*cordinateMultiplier;
  x2=grid_x-10+xp*cordinateMultiplier;
  y2=grid_y-10+(sv*xp+ss)*cordinateMultiplier;

    // console.log("x1" +"   " +x1 )

    // console.log("ss" +"   "+ss  )

    // console.log(xp)
    // console.log(yp)
   

    // console.log("yp" +"   "+yp )

    // console.log("sv"+ "   "+sv)



    // console.log("mg"+ "     "+sv*(x2-x1))

  // x3=grid_x-10+PIEgetInputSlider("t2")*cordinateMultiplier;
  // y3=grid_y-10+PIEgetInputSlider("V")*cordinateMultiplier;

   dir1 = new THREE.Vector3(x2-x1 ,y2-y1 , 0 );

            //normalize the direction vector (convert to vector of length 1)
            dir1.normalize();

             origin1 = new THREE.Vector3( x1, y1, 0 );


     a = new THREE.Vector3( x1, y1, 0 );

            //no arguments; will be initialised to (0, 0, 0)
             b = new THREE.Vector3( x2 ,y2, 0);

             length1 = a.distanceTo( b );
            
             hex1 = 0xf3f7fc;

             arrowHelper1 = new THREE.ArrowHelper( dir1, origin1, length1, hex1 ,0.2,0.5 );
            PIEaddElement( arrowHelper1 );
                        arrowHelper1.visible=true;

  // var dir2 = new THREE.Vector3(x3-x2 ,y3-y2 , 0 );

  //          //normalize the direction vector (convert to vector of length 1)
  //          dir2.normalize();

  //          var origin2 = new THREE.Vector3( x2, y2, 0 );

  //          var c = new THREE.Vector3( x3 ,y3, 0);

  //          var length2 = b.distanceTo( c );
            
  //          var hex2 = 0x00cc11;

  //          var arrowHelper2 = new THREE.ArrowHelper( dir2, origin2, length2, hex2 ,0.2,0.5 );
  //          PIEaddElement( arrowHelper2 );

    car.position.set(v4.x + ss*6, v4.y , v4.z);
    mxmin = v4.x + ss *6 ;
    mx = v4.x + ss *6+0.0001 ;  
    mxmax = v4.x + (sv*xp+ss) * 6 ;


    initial_distance=ss;
    initial_velocity=sv;
    readout_graph=(mxmax-v4.x)/6;


      initial_distance=precisionRound(initial_distance,3);
      initial_velocity = precisionRound(initial_velocity,3);
      readout_graph = precisionRound(readout_graph,1);


     PIEupdateTableCell(1,1,initial_distance); 
     PIEupdateTableCell(2,1,initial_velocity);
     PIEupdateTableCell(3,1,readout_graph);


}

function f2(){

  c=2;

if(grid)  grid.visible=false;    
if(text0) text0.visible=false;
if(textx1) textx1.visible=false;
if(textx2)  textx2.visible=false;
if(textx3)  textx3.visible=false;
if(textx4)  textx4.visible=false;
if(textx5)  textx5.visible=false;
if(textx6)  textx6.visible=false;
if(texty1)  texty1.visible=false;
if(texty2)  texty2.visible=false;
if(texty3)  texty3.visible=false;
if(texty4)  texty4.visible=false;
if(texty5)  texty5.visible=false;
if(texty6)  texty6.visible=false;
if(arrowHelper1) arrowHelper1.visible=false;

learnback.visible=true;

            
}



var helpContent;
function initialiseHelp()
{
    helpContent="";


    helpContent = helpContent + "<h3>How to start the experiment ?</h3>";
    helpContent = helpContent + "<p> 1. To perform the experiment , set the initial distance and initial velocity in slider and then click on the <b>Experiment</b> button and set a timestamp on the grid by clicking the mouse.<p>";
    helpContent = helpContent + "<p> 2. To learn click on the <b>Learn</b> button.</p>";

    helpContent = helpContent + "<h3>Controls</h3>";
    helpContent = helpContent + "<p>1.  S in the control bar represents the initial value of distance.</p>";
     helpContent = helpContent + "<p>2. V is the initial speed of the car.</p>";



    helpContent = helpContent + "<h3> Equations in the experiment </h3>";
    helpContent = helpContent + "<p> <b>V = (S2 - S1) / (T2 - T1)</b> </p>";
    helpContent = helpContent + "<p> V = Speed </p>";
      helpContent = helpContent + "<p> S1 = Initial Distance</p>";
      helpContent = helpContent + "<p> S2 = Final Distance</p>";
      helpContent = helpContent + "<p> T1 = Initial Time </p>";
      helpContent = helpContent + "<p> T2 = Final Time</p>";
    // helpContent = helpContent + "<p> tan<sup>-1</sup>(3* coeff_friction)= 25<sup>o</sup>";
   
    // helpContent = helpContent + "<h3> Experiment </h3>";
    // helpContent = helpContent + "<p> On clicking  the experiment bar button the following conditions are checked and the respective output is given with respect to the angle given by the user .</p>";
    // helpContent = helpContent + "<pre> 1. Angle > tan<sup>-1</sup>(3*coeff_friction)      : <b> sliding motion</b>  </pre>";
    // helpContent = helpContent + "<pre> 2. 0 < Angle < tan<sup>-1</sup>(3*coeff_friction)  : <b> rolling motion</b>  </pre>";
    // helpContent = helpContent + "<pre> 3. Angle = 0                                       : <b> at rest</b>         </pre>";

    // helpContent = helpContent + "<h3> Rolling visualization </h3>";
    // helpContent = helpContent + "<p>  on clicking the Rolling visualization bar the rolling animation is performed . </p>";
    
    // helpContent = helpContent + "<h3> Sliding visualization </h3>";
    // helpContent = helpContent + "<p>  on clicking the sliding visualization bar the sliding animation is performed . </p>";
    
    // helpContent = helpContent + "<h3> Static visualization </h3>";
    // helpContent = helpContent + "</p> on clicking the static visualization bar the cylinder will be at rest position  <p>" ;

    
    // helpContent = helpContent + "<h3> Conclusion </h3>";
    // helpContent = helpContent + "<p> From the visualisations we took Angle_R from rolling visualization and we took Angle_S from sliding friction visualization .</p>";
    // // helpContent = helpContent + "<p> clearly Angle_S is far greater than Angle_R  </p>";
    // helpContent = helpContent + "<p> as tan(Angle)  is proportional to the coefficient of friction , we get Angle is proportional to coefficient of friction </p>";
    // helpContent = helpContent + "<p> clearly Angle_S is far greater than Angle_R  </p>";
    // helpContent = helpContent + "<p> So ,Sliding friction is greater than Rolling friction .</p>";
    // helpContent = helpContent + "<p> Since no body is a perfect rigid body, the forces acting normal to the point of contact are so many in the resting position which makes the static friction is greater than the other two </p>";
    // helpContent = helpContent + "<b> Static friction > Sliding friction >> Rolling friction</b>";


    
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
  infoContent = "";
infoContent = infoContent + "<h3>Distance time graph of uniform speed motion.</h3>";

infoContent = infoContent + "<b>NOTE : Distance is not a vector quantity and it cannot be negative.</b>";
infoContent = infoContent + "<p> Don't confuse between Distance and Displacement. </p>";
// infoContent = infoContent + "<li>Static friction.</li>";
// infoContent = infoContent + "<li>Kinetic friction. friction</li>";
// infoContent = infoContent + "<li>Rolling friction</li>";

infoContent = infoContent + "<p>Distance is not a vector quantity where Displacement is a vector quantity.</p>";
infoContent = infoContent +"<p>Distance always increases whether the speed is positive or negative .</p>";
infoContent =infoContent + "<p>If the slope in the graph is positive the speed may be positive or negative </p>";
infoContent = infoContent + "<p>If the slope in graph is zero then the speed is zero.</p>"

 infoContent = infoContent + "<h3> Equations in the experiment </h3>";
    infoContent = infoContent + "<p> <b>V = (S2 - S1) / (T2 - T1)</b> </p>";
    infoContent = infoContent + "<p> V = Speed </p>";
      infoContent = infoContent + "<p> S1 = Initial Distance</p>";
      infoContent = infoContent + "<p> S2 = Final Distance</p>";
      infoContent = infoContent + "<p> T1 = Initial Time </p>";
      infoContent = infoContent + "<p> T2 = Final Time</p>";

// infoContent = infoContent + "<h3>Static Friction</h3>";

// infoContent = infoContent + "<p>static friction is a force that keeps an object aat rest. it must be over come to start moving the object.   </p>";
// infoContent = infoContent + "<p>  Initially the static friction is zero and if the applied force is increased the static friction is also increased until the body starts moving</p>";
// infoContent = infoContent + "<p>  once the body begins to move the coefficient of static friction ceases inturn which becomes kinetic friction.</p>";

// infoContent = infoContent + "<h3>Siding Friction (or) Kinetic Friction</h3>";

// infoContent = infoContent + "<p> The term sliding friction refers to resistance created by two objects sliding against each other. </p>";
// infoContent = infoContent + "<p>  Sliding friction is intended to stop an object from moving.</p>";

// infoContent = infoContent + "<h3>Rolling Friction</h3>";

// infoContent = infoContent + "<p>  Rolling resistance sometimes called as rolling friction (or) rolling drag , is the force resisting a motion when a body such as a ball, tire or wheel rolls on a surface.</p>";

// infoContent = infoContent + "<h3>Static friction > sliding friction</h3>";
// infoContent = infoContent + " <p>As no body is a perfect rigid body , due to imperfections in the surface the normal forces acting on the body are much great and the normal forces acting in the body in sliding motion are not the same and vary which makes the static friction greaterr than sliding friction. </p>";
// infoContent = infoContent + "<h3>sliding friction > rolling friction</h3>";
// infoContent = infoContent + "<p> rolling friction is very less compared to sliding as the real point of contact in rolling motion is very less .</p>";
// infoContent = infoContent + "<h3>So , static friction > sliding friction > rolling friction <h3>";

    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;

    PIEscene.background = new THREE.Color(0xffff99);


}

function initialiseOtherVariables()
{

 xp=1;
 yp=1;
 ss=0;
 sv=0;
 

}


 
function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;




    PIEsetExperimentTitle("D-T graph");
    PIEsetDeveloperName("Mahaveer Bonagiri");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */ 
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();
    PIEsetAreaOfInterest(-40,20,40,-20);

  // PIEcreateTable("check table",5, 5, true);
  // var headerRow = ["A and B  " , "B and C  " ,"C and D  " ];
  //  PIEupdateTableRow(0, headerRow);

  PIEcreateTable("Experiment values ", 5, 2, true);
    // PIEsetRowInput(1, 5, "abcde");
    // PIEsetRowInput(2, 6, "fghijk");
    // PIEsetRowInput(3, 3, "lmno"); 
    PIEupdateTableCell(1,0,"Initial distance ");  
    PIEupdateTableCell(2,0,"Initial velocity "); 
    PIEupdateTableCell(3,0,"Distance readout in graph  ");
    PIEupdateTableCell(4,0,"Distance readout by car ");

    PIEupdateTableCell(1,1,"---");
    PIEupdateTableCell(2,1,"---");
    PIEupdateTableCell(3,1,"---"); 
    PIEupdateTableCell(4,1,"---");
   


  grid = new THREE.GridHelper( 10, 6);
  grid.position.x=grid_x;
  grid.position.y=grid_y;
  grid.position.z=grid_z;
  grid.lookAt(new THREE.Vector3(grid.position.x,grid.position.y+0.01,grid.position.z));
  PIEaddElement( grid) ;



    v0 = new THREE.Vector3(-35,-15,0) 
     v1 = new THREE.Vector3(v0.x+3,-15,0); 
     v2 = new THREE.Vector3(v1.x+36,v1.y,0);  
     v3 = new THREE.Vector3(v2.x+3,v2.y,0);

        
    var geometry = new THREE.Geometry();


    geometry.vertices.push(  v0  ,v1 , v2  ,v3);

    var material = new THREE.LineBasicMaterial( { color: 0x000088 } );

    linepart = new THREE.Line( geometry, material );

    PIEaddElement(linepart);


    v4= new THREE.Vector3(v1.x,v1.y+1,0); 
     v5 = new THREE.Vector3(v4.x+2,v4.y,0); 
  

    var geometry=new THREE.PlaneGeometry(4,2);
    car=createMesh(geometry,"car.png");
    car.position.set(v4.x,v4.y,v4.z);
    PIEaddElement( car);

    var geometry=new THREE.PlaneGeometry(60,30);
    board=createMesh(geometry,"board.png");
     board.position.set(0,3,-1);
    PIEaddElement(board);

     var geometry=new THREE.PlaneGeometry(15,30);
    teacher=createMesh(geometry,"teacher.png");
     teacher.position.set(8,-7,0.1);
    PIEaddElement(teacher);

       var geometry=new THREE.PlaneGeometry(3*20000*1/768,3*20000*1/1365);
       learnback=createMesh(geometry,"learnback.png");
       learnback.position.set(0,0,1);
    PIEaddElement( learnback);
    learnback.visible=false;                                 




    var materialFront = new THREE.MeshBasicMaterial( { color: 0x333333 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();


    //-------------------------------------------------------------------------- x axis ---------------------------------------------
   

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("0", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text0 = new THREE.Mesh(textGeom, textMaterial );
        text0.position.set( grid.position.x - 10 + 0*text_cordinateMultiplier, grid.position.y - 11 , grid.position.z);
        text0.visible =true;
        PIEaddElement(text0);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("1", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textx1 = new THREE.Mesh(textGeom, textMaterial );
        textx1.position.set( grid.position.x - 10 + 1*text_cordinateMultiplier, grid.position.y - 11 , grid.position.z);
        textx1.visible =true;
        PIEaddElement(textx1);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("2", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textx2 = new THREE.Mesh(textGeom, textMaterial );
        textx2.position.set( grid.position.x - 10 + 2*text_cordinateMultiplier, grid.position.y - 11 , grid.position.z);
        textx2.visible =true;
        PIEaddElement(textx2);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("3", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textx3 = new THREE.Mesh(textGeom, textMaterial );
        textx3.position.set( grid.position.x - 10 + 3*text_cordinateMultiplier+0.1, grid.position.y - 11 , grid.position.z);
        textx3.visible =true;
        PIEaddElement(textx3);

        PIErender();
    });


   
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("4", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textx4 = new THREE.Mesh(textGeom, textMaterial );
        textx4.position.set( grid.position.x - 10 + 4*text_cordinateMultiplier+0.1, grid.position.y - 11 , grid.position.z);
        textx4.visible =true;
        PIEaddElement(textx4);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("5", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textx5 = new THREE.Mesh(textGeom, textMaterial );
        textx5.position.set( grid.position.x - 10 + 5*text_cordinateMultiplier+0.3, grid.position.y - 11 , grid.position.z);
        textx5.visible =true;
        PIEaddElement(textx5);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("6", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textx6 = new THREE.Mesh(textGeom, textMaterial );
        textx6.position.set( grid.position.x - 10 + 6*text_cordinateMultiplier+0.4, grid.position.y - 11 , grid.position.z);
        textx6.visible =true;
        PIEaddElement(textx6);

        PIErender();
    });

     loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Time(T)", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textxaxis = new THREE.Mesh(textGeom, textMaterial );
        textxaxis.position.set( grid.position.x - 10 + 6*text_cordinateMultiplier+0.4+1, grid.position.y - 11 , grid.position.z);
        textxaxis.visible =true;
        PIEaddElement(textxaxis);

        PIErender();
    });


   //----------------------------------------------------------------------------y axis --------------------------------------------------
    


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
       
        var textGeom = new THREE.TextGeometry("1", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        texty1 = new THREE.Mesh(textGeom, textMaterial );
        texty1.position.set( grid.position.x - 11, grid.position.y -10 + 1*text_cordinateMultiplier-0.1 , grid.position.z);
        texty1.visible =true;
        PIEaddElement(texty1);

        PIErender();
    
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
       
        var textGeom = new THREE.TextGeometry("2", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        texty2 = new THREE.Mesh(textGeom, textMaterial );
        texty2.position.set( grid.position.x - 11, grid.position.y -10 + 2*text_cordinateMultiplier-0.1 , grid.position.z);
        texty2.visible =true;
        PIEaddElement(texty2);

        PIErender();
    
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
       
        var textGeom = new THREE.TextGeometry("3", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        texty3 = new THREE.Mesh(textGeom, textMaterial );
        texty3.position.set( grid.position.x - 11, grid.position.y -10 + 3*text_cordinateMultiplier-0.1 , grid.position.z);
        texty3.visible =true;
        PIEaddElement(texty3);

        PIErender();
    
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
       
        var textGeom = new THREE.TextGeometry("4", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        texty4 = new THREE.Mesh(textGeom, textMaterial );
        texty4.position.set( grid.position.x - 11, grid.position.y -10 + 4*text_cordinateMultiplier-0.2 , grid.position.z);
        texty4.visible =true;
        PIEaddElement(texty4);

        PIErender();
    
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
       
        var textGeom = new THREE.TextGeometry("5", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        texty5 = new THREE.Mesh(textGeom, textMaterial );
        texty5.position.set( grid.position.x - 11, grid.position.y -10 + 5*text_cordinateMultiplier-0.3 , grid.position.z);
        texty5.visible =true;
        PIEaddElement(texty5);

        PIErender();
    
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
       
        var textGeom = new THREE.TextGeometry("6", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        texty6 = new THREE.Mesh(textGeom, textMaterial );
        texty6.position.set( grid.position.x - 11, grid.position.y -10 + 6*text_cordinateMultiplier-0.3 , grid.position.z);
        texty6.visible =true;
        PIEaddElement(texty6);

        PIErender();
    
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
       
        var textGeom = new THREE.TextGeometry("Distance(S)", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textyaxis = new THREE.Mesh(textGeom, textMaterial );
        textyaxis.position.set( grid.position.x - 11, grid.position.y -10 + 6*text_cordinateMultiplier+1 , grid.position.z);
        textyaxis.visible =true;
        PIEaddElement(textyaxis);

        PIErender();
    
    });

    //------------------------------------------------------------------line text -------------------------------------------------------------


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        for(var i = 0 ; i<=6 ; i++){
       
        var textGeom = new THREE.TextGeometry(i, 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        textline = new THREE.Mesh(textGeom, textMaterial );
        textline.position.set( v1.x+i*6, v1.y-1 ,v1.z);
        textline.visible =true;
        PIEaddElement(textline);

        PIErender();
        }
    });

//---------------------------------------------------------------------------formulae-----------------------------------------------------------


    
    loader.load( 'optimer_bold.typeface.js', function ( font ) {
       
        var textGeom = new THREE.TextGeometry("V = (S2 - S1) / (T2 - T1)", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        fo1 = new THREE.Mesh(textGeom, textMaterial );
        fo1.position.set(3,10,0);
        fo1.visible =true;
        PIEaddElement(fo1);

        PIErender();
    
    });

     loader.load( 'optimer_bold.typeface.js', function ( font ) {

          var textGeom = new THREE.TextGeometry("S1 = Initial Distance", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        fo2 = new THREE.Mesh(textGeom, textMaterial );
        fo2.position.set(15,10,0);
        fo2.visible =true;
        PIEaddElement(fo2);

        PIErender();
    
    });

      loader.load( 'optimer_bold.typeface.js', function ( font ) {

          var textGeom = new THREE.TextGeometry("S2 = Final Distance", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        fo3 = new THREE.Mesh(textGeom, textMaterial );
        fo3.position.set(15,8.5,0);
        fo3.visible =true;
        PIEaddElement(fo3);

        PIErender();
    
    });

       loader.load( 'optimer_bold.typeface.js', function ( font ) {

          var textGeom = new THREE.TextGeometry("T1 = Initial Time", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        fo4 = new THREE.Mesh(textGeom, textMaterial );
        fo4.position.set(15,7,0);
        fo4.visible =true;
        PIEaddElement(fo4);

        PIErender();
    
    });

        loader.load( 'optimer_bold.typeface.js', function ( font ) {

          var textGeom = new THREE.TextGeometry("T2 = Final Time", 
        {
            size:0.7, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        fo5 = new THREE.Mesh(textGeom, textMaterial );
        fo5.position.set(15,5.5,0);
        fo5.visible =true;
        PIEaddElement(fo5);

        PIErender();
    
    });
        loader.load( 'optimer_bold.typeface.js', function ( font ) {

          var textGeom = new THREE.TextGeometry("Distance Time Graph", 
        {
            size:1.4, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        fh = new THREE.Mesh(textGeom, textMaterial );
        fh.position.set(0,13,0);
        fh.visible =true;
        PIEaddElement(fh);

        PIErender();
    
    });

    



    

    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();

    

   

}

function resetExperiment()
{
  xp=1;
 yp=1;
 ss=0;
 sv=0;
 PIEchangeInputSlider("S",ss);
 PIEchangeInputSlider("V",sv);
 car.position.set(v4.x,v4.y,v4.z);
     PIEupdateTableCell(1,1,"---");
    PIEupdateTableCell(2,1,"---");
    PIEupdateTableCell(3,1,"---"); 
    PIEupdateTableCell(4,1,"---");
   
  
}

function updateExperimentElements(t, dt)
{ 


  switch(c){

      case 1:
          {      var T=10*dt/1000;
                            if(mx > mxmin && mx < mxmax){

                                mx = mx + sv * T;
                                car.position.set(mx , v4.y , v4.z);
                               	readout_car=(mx-v4.x)/6;
                                  readout_car=precisionRound(readout_car,1);
                                   PIEupdateTableCell(4,1,readout_car);



                            }

            

            break;
          }
      case 2:
          {

            break;
          } 
      default:
          {
            break;
          }   





  }
}


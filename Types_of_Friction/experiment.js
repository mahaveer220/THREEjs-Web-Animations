// initialising the scene 
var mySceneTLX;        /* Top Left corner X coordinate */
var mySceneTLY;        /* Top Left corner Y coordinate */
var mySceneBRX;        /* Bottom Right corner X coordinate */
var mySceneBRY;        /* Bottom Right corner Y coordinate */
var mySceneW;          /* Scene Width */
var mySceneH;          /* Scene Height */
var myCenterX;         /* Scene Center X coordinate */
var myCenterY;         /* Scene Center Y coordinate */

var Wedge;               /* wedge object */
var circle;
var boundary;
var trianglePoint_x;
var trianglePoint_y;
var triangleAngle;
var circleRadius;
var circleX;
var circleY;
var circleZ;
var circleV;
var circleVX;
var circleVY;
var circleAX;
var circleAY;
var circleA;

var maxangle;        /*  the maximum angle to begin to slide */
var myu;

//points

var v1;
var v2;
var v3;
var v4;
var v5;
var v6;
//new coordinates
var newX;
var newY;

var gravity;
var c;
var T;

//values
var staticfriction;
var rollingfriction;
var slidingfriction;

//texts
var text11;
var text12;
var text13;
var text21;
var text22;
var text31;
var text32;
var text41;
var text51;
var text52;
var text53;
var text54;
var text55;
var text56;
 //images 
var freebody;
var back;
var back2;

var anistart;

var wedge_text;
var cylinder_text;
var stat_val;
var sli_val;
var roll_val;


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
    h.style.paddingLeft = "65px";
    h.style.paddingRight= "65px";
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




function handleA(newValue)
{
    triangleAngle = newValue;


    flag = 0;
    // updating the wedge
    PIEremoveElement(wedge);

     v1 = new THREE.Vector3( trianglePoint_x ,trianglePoint_y,0); 
     v2 = new THREE.Vector3(v1.x+20,v1.y,0);  
     v3 = new THREE.Vector3(v1.x,v1.y+Math.tan(triangleAngle * Math.PI/180)*20,0); 
        
    var geometry = new THREE.Geometry();


    geometry.vertices.push( v1 , v2 , v3 , v1 );

    var material = new THREE.LineBasicMaterial( { color: 0x000000 } );

    wedge = new THREE.Line( geometry, material );

    PIEaddElement(wedge);

// updating the circle 
    PIEremoveElement(circle);
     // geometry = new THREE.CircleGeometry( circleRadius, 64 );
     // material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
     // circle = new THREE.Mesh( geometry, material );
      circle.position.set(v3.x + circleRadius* Math.cos((90 - triangleAngle) * Math.PI/180), v3.y + circleRadius* Math.sin((90 - triangleAngle) * Math.PI/180) , v3.z);
     PIEaddElement(circle);

     PIEremoveElement(modelLeft);
     if(triangleAngle != 0){
        var squareShape = new THREE.Shape();
     squareShape.moveTo( v1.x,v1.y,0 );
     squareShape.lineTo( v2.x,v2.y,0);
     squareShape.lineTo(v3.x,v3.y,0);
     squareShape.lineTo(v1.x,v1.y,0);
     modelLeft = new THREE.Mesh(new THREE.ShapeGeometry(squareShape), new THREE.MeshBasicMaterial({color:0x1a0d00}));
     modelLeft.visible = true;
     PIEaddElement(modelLeft);
     }
     

    PIErender();
}



function initialiseControlVariables()
{
    /* Labels */
    Angle="Angle_of_cylinder";                  /* angle Slider Label */

    /* Default (initial) Values */
    Adefault=19;        /* angle Slider Default Value */


    /* Slider Limits */
    Amin=0;   /* angle Slider Minimum Value */
    Amax=40;  /* angle Slider Maximum Value */

    
    Astep=1.0;                 /* angle Slider Step */

}

function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
    PIEaddInputSlider(Angle, Adefault, handleA, Amin, Amax, Astep);

    /* Create Display Panel */
    // PIEaddDisplayText("Angle for cylinder");
    PIEaddDisplayText("Angle_of_cylinder", 19);

    PIEaddDualCommand( "Experiment " , f1 );
    PIEaddDualCommand( "Rolling  " , f2 );
    PIEaddDualCommand( "Sliding" , f3 );    
    PIEaddDualCommand( "Static" , f4 );
    // PIEaddInputCommand( "Conclusion  " , f5 );
    


}

function f1(){


                                    // PIEremoveElement(freebody);
                                    // geometry=new THREE.PlaneGeometry(13,10);
                                    // freebody=createMesh(geometry,"freebody.png");
                                    // freebody.position.set(20,10,0);
                                    // PIEaddElement(freebody);
                                    // PIErender();
 // resetExperiment();
  triangleAngle = PIEgetInputSlider("Angle_of_cylinder");

 resetafterclick();

 flag = 0;

        c=1;
     PIEchangeDisplayText("Angle_of_cylinder",triangleAngle);

     stat_val=9.8*Math.sin(triangleAngle*Math.PI/180);
     sli_val=9.8*Math.sin(triangleAngle*Math.PI/180)*2/3;
     roll_val =9.8*Math.sin(triangleAngle*Math.PI/180)*1/3; 

      stat_val=precisionRound(stat_val,3);
      sli_val = precisionRound(sli_val,3);
      roll_val = precisionRound(roll_val,3);


     PIEupdateTableCell(1,1,stat_val); 
     PIEupdateTableCell(2,1,sli_val);
     PIEupdateTableCell(3,1,roll_val);                        
     PIEstartAnimation();
   //  PIEpauseAnimation();
   // // resetExperiment();
   //   resetafterclick();
   //   PIEresumeAnimation();
   // console.log(c);







}

function f2(){
   
                                    // PIEremoveElement(freebody);

                                    // geometry=new THREE.PlaneGeometry(13,10);
                                    // freebody=createMesh(geometry,"freebody.png");
                                    // freebody.position.set(20,10,0);
                                    // PIEaddElement(freebody);
                                    // PIErender();

          resetExperiment();
          triangleAngle = 0 ;
          
          // PIEpauseAnimation();
          // resetafterclick();
          text21.visible=true;
          // text22.visible=true;

          // PIEresumeAnimation();

          console.log("hi");
          c = 2;
     PIEstartAnimation();

            
}



function f3(){
                                    // PIEremoveElement(freebody);
                                    // geometry=new THREE.PlaneGeometry(13,10);
                                    // freebody=createMesh(geometry,"freebody.png");
                                    // freebody.position.set(20,10,0);
                                    // PIEaddElement(freebody);
                                    // PIErender();
    triangleAngle=25;
    triangleAnglemin=20; 
    
    resetExperiment();
    c=3;
  //   PIEpauseAnimation();
  // resetafterclick();
  text12.visible = false;
  text31.visible=true;
    // text32.visible=true;
  // PIEresumeAnimation();


     PIEstartAnimation();


      

}

function f4(){
  triangleAngle=25;
  
  // PIEpauseAnimation();
  // resetafterclick();
  // text41.visible=true;
  // PIEresumeAnimation();
  resetExperiment();
  c=4;
  text41.visible=true;



     PIEstartAnimation();

}

function f5(){
  triangleAngle=0;
  
  // PIEremoveElement(freebody);
  // PIEpauseAnimation();
  // resetafterclick();
  // text51.visible=true;
  // text52.visible=true;
  // text53.visible=true;
  // text54.visible=true;
  // text55.visible=true;
  // text56.visible=true;
 
  //            PIEremoveElement(freebody);
  
  // // PIEresumeAnimation();
      resetExperiment();
      c=5;

       text51.visible=true;
  text52.visible=true;
  text53.visible=true;
  text54.visible=true;
  text55.visible=true;
  text56.visible=true;
 

       // PIEremoveElement(circle);
       //      PIEremoveElement(wedge);
       //      PIEremoveElement(boundary);
       //       PIEremoveElement(modelLeft);

     PIEstartAnimation();
}

var helpContent;
function initialiseHelp()
{
    helpContent="";


    helpContent = helpContent + "<h3>How to start the experiment ?</h3>";
    helpContent = helpContent + "<p> 1. To perform the experiment , set the angle in slider and then click on the <b>Experiment</b> button .<p>";
    helpContent = helpContent + "<p> 2. To see the cases just click on the respective button .</p>";

    helpContent = helpContent + "<h3>Controls</h3>";
    helpContent = helpContent + "<p> A in the control bar represents  Angle of inclined plane .</p>";



    helpContent = helpContent + "<h3> Equations in the experiment </h3>";
    helpContent = helpContent + "<p> Acceleration = 2/3 * g * sin(Angle). </p>";
    helpContent = helpContent + "<p>  Through out the experiment coeff_friction is<b> 0.16 </b></p>";
    helpContent = helpContent + "<p> tan<sup>-1</sup>(3* coeff_friction)= 25<sup>o</sup>";
   
    helpContent = helpContent + "<h3> Experiment </h3>";
    helpContent = helpContent + "<p> On clicking  the experiment bar button the following conditions are checked and the respective output is given with respect to the angle given by the user .</p>";
    helpContent = helpContent + "<pre> 1. Angle > tan<sup>-1</sup>(3*coeff_friction)      : <b> sliding motion</b>  </pre>";
    helpContent = helpContent + "<pre> 2. 0 < Angle < tan<sup>-1</sup>(3*coeff_friction)  : <b> rolling motion</b>  </pre>";
    helpContent = helpContent + "<pre> 3. Angle = 0                                       : <b> at rest</b>         </pre>";

    helpContent = helpContent + "<h3> Rolling visualization </h3>";
    helpContent = helpContent + "<p>  on clicking the Rolling visualization bar the rolling animation is performed . </p>";
    
    helpContent = helpContent + "<h3> Sliding visualization </h3>";
    helpContent = helpContent + "<p>  on clicking the sliding visualization bar the sliding animation is performed . </p>";
    
    helpContent = helpContent + "<h3> Static visualization </h3>";
    helpContent = helpContent + "</p> on clicking the static visualization bar the cylinder will be at rest position  <p>" ;

    
    helpContent = helpContent + "<h3> Conclusion </h3>";
    helpContent = helpContent + "<p> From the visualisations we took Angle_R from rolling visualization and we took Angle_S from sliding friction visualization .</p>";
    // helpContent = helpContent + "<p> clearly Angle_S is far greater than Angle_R  </p>";
    helpContent = helpContent + "<p> as tan(Angle)  is proportional to the coefficient of friction , we get Angle is proportional to coefficient of friction </p>";
    helpContent = helpContent + "<p> clearly Angle_S is far greater than Angle_R  </p>";
    helpContent = helpContent + "<p> So ,Sliding friction is greater than Rolling friction .</p>";
    helpContent = helpContent + "<p> Since no body is a perfect rigid body, the forces acting normal to the point of contact are so many in the resting position which makes the static friction is greater than the other two </p>";
    helpContent = helpContent + "<b> Static friction > Sliding friction >> Rolling friction</b>";


    
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
infoContent = infoContent + "<h3>Friction</h3>";

infoContent = infoContent + "<p> Friction is the force resisting the relative motion of solid surfaces , fluid layers , and material elements sliding against each other. </p>";
infoContent = infoContent + "<p> there are three types of friction namely</p>";
infoContent = infoContent + "<li>Static friction.</li>";
infoContent = infoContent + "<li>Kinetic friction. friction</li>";
infoContent = infoContent + "<li>Rolling friction</li>";

infoContent = infoContent + "<h3>Static Friction</h3>";

infoContent = infoContent + "<p>static friction is a force that keeps an object aat rest. it must be over come to start moving the object.   </p>";
infoContent = infoContent + "<p>  Initially the static friction is zero and if the applied force is increased the static friction is also increased until the body starts moving</p>";
infoContent = infoContent + "<p>  once the body begins to move the coefficient of static friction ceases inturn which becomes kinetic friction.</p>";

infoContent = infoContent + "<h3>Siding Friction (or) Kinetic Friction</h3>";

infoContent = infoContent + "<p> The term sliding friction refers to resistance created by two objects sliding against each other. </p>";
infoContent = infoContent + "<p>  Sliding friction is intended to stop an object from moving.</p>";

infoContent = infoContent + "<h3>Rolling Friction</h3>";

infoContent = infoContent + "<p>  Rolling resistance sometimes called as rolling friction (or) rolling drag , is the force resisting a motion when a body such as a ball, tire or wheel rolls on a surface.</p>";

infoContent = infoContent + "<h3>Static friction > sliding friction</h3>";
infoContent = infoContent + " <p>As no body is a perfect rigid body , due to imperfections in the surface the normal forces acting on the body are much great and the normal forces acting in the body in sliding motion are not the same and vary which makes the static friction greaterr than sliding friction. </p>";
infoContent = infoContent + "<h3>sliding friction > rolling friction</h3>";
infoContent = infoContent + "<p> rolling friction is very less compared to sliding as the real point of contact in rolling motion is very less .</p>";
infoContent = infoContent + "<h3>So , static friction > sliding friction > rolling friction <h3>";

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
    triangleAngle= 19;
    trianglePoint_x = -10;
    trianglePoint_y = -8.5;
    circleRadius=2.0;
    gravity = 9.8 ;
    circleV = 0 ;
    


    maxangle= 25 ;
    myu =  Math.tan(maxangle * Math.PI/180)*1/3;


}

function resetafterclick(){

  

    PIEremoveElement(wedge);
    v1 = new THREE.Vector3( trianglePoint_x ,trianglePoint_y,0); 
    v2 = new THREE.Vector3(v1.x+20,v1.y,0);  
    v3 = new THREE.Vector3(v1.x,v1.y+Math.tan(triangleAngle * Math.PI/180)*20,0); 
        
    geometry = new THREE.Geometry();
    geometry.vertices.push( v1 , v2 , v3 , v1 );
    material = new THREE.LineBasicMaterial( { color: 0x000000 } );

     wedge = new THREE.Line( geometry, material );

    PIEaddElement(wedge);

    PIEremoveElement(circle);   
     // geometry = new THREE.CircleGeometry( circleRadius, 64 );
     // material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
     // circle = new THREE.Mesh( geometry, material );
     circle.position.set(v3.x + circleRadius* Math.cos((90 - triangleAngle) * Math.PI/180), v3.y + circleRadius* Math.sin((90 - triangleAngle) * Math.PI/180) , v3.z);
     newX = v3.x + circleRadius* Math.cos((90 - triangleAngle) * Math.PI/180);
     newY =  v3.y + circleRadius* Math.sin((90 - triangleAngle) * Math.PI/180); 
    PIEaddElement( circle );
     PIEaddElement( boundary );

    if(text11){
    text11.visible= false ;}

    if(text12){ text12.visible = false;}
    if(text13){ text13.visible = false;}
    if(text21){ text21.visible = false;}
    if(text22){ text22.visible = false;}
    if(text31){ text31.visible = false;}
    if(text32){ text32.visible = false;}
    if(text41){ text41.visible = false;}
    if(text51){ text51.visible = false;}
    if(text52){ text52.visible = false;}
    if(text53){ text53.visible = false;}
    if(text54){ text54.visible = false;}
    if(text55){ text55.visible = false;}
    if(text56){ text56.visible = false;}

    // text12.visible= false ;
    // text13.visible= false ;
    // text21.visible= false ;
    // text22.visible= false ;
    // text31.visible= false ;
    // text32.visible= false ;
    // text41.visible= false ;
    // text51.visible= false ;
    // text52.visible= false ;
    // text53.visible= false ;
    // text54.visible= false ;
    // text55.visible= false ;
    // text56.visible= false ;
    


}




 
function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;
 c=1;


    PIEsetExperimentTitle("Types of Friction");
    PIEsetDeveloperName("Mahaveer Bonagiri");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();

    // geometry=new THREE.PlaneGeometry(100,30);
    //                                 back=createMesh(geometry,"back.png");
    //                                 back.position.set(10,5,-4);
    //                                 PIEaddElement(back);
    //                                 PIErender();
    // geometry=new THREE.PlaneGeometry(100,12.5);
    //                                 back2=createMesh(geometry,"back2.png");
    //                                 back2.position.set(10,-15,-3);
    //                                 PIEaddElement(back2);
    //                                 PIErender();     

    PIEcreateTable("Values of frictional forces ", 5, 2, true);
    // PIEsetRowInput(1, 5, "abcde");
    // PIEsetRowInput(2, 6, "fghijk");
    // PIEsetRowInput(3, 3, "lmno"); 
    PIEupdateTableCell(1,0,"Static friction");  
    PIEupdateTableCell(2,0,"Sliding friction"); 
    PIEupdateTableCell(3,0,"Rolling friction");
    PIEupdateTableCell(1,1,"---");
    PIEupdateTableCell(2,1,"---");
    PIEupdateTableCell(3,1,"---");   
    PIEupdateTableCell(4,0,"static > sliding > rolling ");


     geometry=new THREE.PlaneGeometry(15.6,12);
                                    freebody=createMesh(geometry,"freebody.png");
                                    freebody.position.set(20,8,0);
                                    PIEaddElement(freebody);
                                    PIErender();                      
   
    // adding a wedge to the scene 
    PIEsetAreaOfInterest(-40,20,60,-20);


    v1 = new THREE.Vector3( trianglePoint_x ,trianglePoint_y,0); 
    v2 = new THREE.Vector3(v1.x+20,v1.y,0);  
    v3 = new THREE.Vector3(v1.x,v1.y+Math.tan(triangleAngle * Math.PI/180)*20,0); 
        
    geometry = new THREE.Geometry();
    geometry.vertices.push( v1 , v2 , v3 , v1 );
    material = new THREE.LineBasicMaterial( { color: 0x000000 } );

     wedge = new THREE.Line( geometry, material );

    PIEaddElement(wedge);

    //   PIEremoveElement(modelLeft);

     var squareShape = new THREE.Shape();
     squareShape.moveTo( v1.x,v1.y,0 );
     squareShape.lineTo( v2.x,v2.y,0);
     squareShape.lineTo(v3.x,v3.y,0);
     squareShape.lineTo(v1.x,v1.y,0);
     modelLeft = new THREE.Mesh(new THREE.ShapeGeometry(squareShape), new THREE.MeshBasicMaterial({color:0x1a0d00}));
     modelLeft.visible = true;
     PIEaddElement(modelLeft);

    //adding circle to the scene 
    
     geometry = new THREE.CircleGeometry( circleRadius, 64 );
     material = new THREE.MeshBasicMaterial( { color: 0x995c00} );
     circle = new THREE.Mesh( geometry, material );
     circle.position.set(v3.x + circleRadius* Math.cos((90 - triangleAngle) * Math.PI/180), v3.y + circleRadius* Math.sin((90 - triangleAngle) * Math.PI/180) , v3.z);
    PIEaddElement( circle );

    // adding boundaries to the scene 

    v4 = new THREE.Vector3( v2.x + 20 , v2.y , 0);
      geometry = new THREE.Geometry();
    geometry.vertices.push( v2 , v4 );
    material = material = new THREE.LineBasicMaterial( { color: 0x000000 } );
    boundary = new THREE.Line( geometry, material );
    PIEaddElement( boundary );

    newX=v1.x;
    newY=v2.y + circleRadius+3;


    //adding texts 

    var materialFront = new THREE.MeshBasicMaterial( { color: 0x333333 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();

    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("The wedge angle is zero , so there will be no movement of cylinder ", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text11 = new THREE.Mesh(textGeom, textMaterial );
        text11.position.set(-20,-15,0);
        text11.visible = false;
        PIEaddElement(text11);

        PIErender();
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("0 < Angle < tan -1 ( 3 * coeff_friction) . SO , cylinder is in rolling motion", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text12 = new THREE.Mesh(textGeom, textMaterial );
        text12.position.set(-20,-15,0);
        text12.visible = false;
        PIEaddElement(text12);

        PIErender();
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Angle > tan -1 ( 3 * coeff_friction) . SO , the cylinder slips initially and after that it moves with a uniform rolling motion", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text13 = new THREE.Mesh(textGeom, textMaterial );
        text13.position.set(-20,-15,0);
        text13.visible = false;
        PIEaddElement(text13);

        PIErender();
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("The cylinder starts rolling even if the angle is increased slightly .", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text21 = new THREE.Mesh(textGeom, textMaterial );
        text21.position.set(-20,-15,0);
        text21.visible = false;
        PIEaddElement(text21);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Let this angle be Angle_R .", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text22 = new THREE.Mesh(textGeom, textMaterial );
        text22.position.set(-20,-17,0);
        text22.visible = false;
        PIEaddElement(text22);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("tan.inverse( 3 * coeff_friction) is minimum angle required for the cylinder to begin to slide.", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text31 = new THREE.Mesh(textGeom, textMaterial );
        text31.position.set(-20,-15,0);
        text31.visible = false;
        PIEaddElement(text31);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Let this angle be Angle_S", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text32 = new THREE.Mesh(textGeom, textMaterial );
        text32.position.set(-20,-17,0);
        text32.visible = false;
        PIEaddElement(text32);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("The cylinder is in rest position on the top of the wedge having some resistive force", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text41 = new THREE.Mesh(textGeom, textMaterial );
        text41.position.set(-20,-15,0);
        text41.visible = false;
        PIEaddElement(text41);

        PIErender();
    });


      var materialFront = new THREE.MeshBasicMaterial( { color: 0x000001 } );
    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000000 } );
    var materialArray = [ materialFront, materialSide ];
    var loader = new THREE.FontLoader();



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Generally , static friction is greater than any other friction.", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text51 = new THREE.Mesh(textGeom, textMaterial );
        text51.position.set(-10,10,0);
        text51.visible = false;
        PIEaddElement(text51);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("From the visualizations in the experiment, clearly ", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text52 = new THREE.Mesh(textGeom, textMaterial );
        text52.position.set(-10,8,0);
        text52.visible = false;
        PIEaddElement(text52);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Angle_S > Angle_R", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text53 = new THREE.Mesh(textGeom, textMaterial );
        text53.position.set(-10,6,0);
        text53.visible = false;
        PIEaddElement(text53);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("As coefficient of friction is proportional to Angle , we get ", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text54 = new THREE.Mesh(textGeom, textMaterial );
        text54.position.set(-10,4,0);
        text54.visible = false;
        PIEaddElement(text54);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Sliding friction (Fs) > Rolling friction (Fr)     ,So Finally", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text55 = new THREE.Mesh(textGeom, textMaterial );
        text55.position.set(-10,2,0);
        text55.visible = false;
        PIEaddElement(text55);

        PIErender();
    });


    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Static Friction > Sliding Friction > Rolling Friction ", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        text56 = new THREE.Mesh(textGeom, textMaterial );
        text56.position.set(-10,-2,0);
        text56.visible = false;
        PIEaddElement(text56);

        PIErender();
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry(" wedge ", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        wedge_text = new THREE.Mesh(textGeom, textMaterial );
        wedge_text.position.set(-10,-10,0);
        wedge_text.visible = true;
        PIEaddElement(wedge_text);

        PIErender();
    });



    loader.load( 'optimer_bold.typeface.js', function ( font ) {
        
        var textGeom = new THREE.TextGeometry("Cylinder ", 
        {
            size: 0.8, height: 0,
            font: font, weight: "normal", style: "normal",
            // bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
            // material: 0, extrudeMaterial: 0
        });  
        var textMaterial = new THREE.MeshFaceMaterial(materialArray);
        cylinder_text = new THREE.Mesh(textGeom, textMaterial );
        cylinder_text.position.set(-16,2,0);
        cylinder_text.visible = true;
        PIEaddElement(cylinder_text);

        PIErender();
    });







    

    /* Instantiate experiment controls */
    initialiseControls();

    /* Reset all positions */
    resetExperiment();

    

   

}

function resetExperiment()
{
    /* initialise Other Variables */
    initialiseOtherVariables();
    resetafterclick();

    c = 1;
    flag = 0;

    PIEremoveElement(modelLeft);
     var squareShape = new THREE.Shape();
     squareShape.moveTo( v1.x,v1.y,0 );
     squareShape.lineTo( v2.x,v2.y,0);
     squareShape.lineTo(v3.x,v3.y,0);
     squareShape.lineTo(v1.x,v1.y,0);
     modelLeft = new THREE.Mesh(new THREE.ShapeGeometry(squareShape), new THREE.MeshBasicMaterial({color:0x1a0d00}));
     modelLeft.visible = true;
     PIEaddElement(modelLeft);




}
 
 var flag = 0;

function updateExperimentElements(t, dt)
{ 

   switch(c){  

            case 1 : 
             {                     

              // if(flag == 0){
              //   resetafterclick();
              //     console.log("Hellooooos")
              //     triangleAngle = PIEgetInputSlider("Angle_of_cylinder");
              //     flag = 1;
              // }  
                // text11.visible=true;

               if(triangleAngle==0){

                text11.visible=true;
                  if(text12){text12.visible=false;}
                  if(text12){text12.visible=false;}


                        // if(t/1000 > 4){
                        //   PIEstopAnimation();
                        //   resetExperiment();
                        //  }


               }

               if(triangleAngle <= maxangle && triangleAngle > 0) {
                console.log("Two");
                text12.visible=true;
                if(text11){text11.visible=false;}
                if(text13){text13.visible=false;}

              }

                if(triangleAngle > maxangle && triangleAngle <= Amax){text13.visible=true;     if(text11){text11.visible=false;}   if(text12){text12.visible=false;}}

                         circleA = (2/3)* gravity *Math.sin(triangleAngle* Math.PI/180);
                        circleAX = circleA * Math.cos(triangleAngle* Math.PI/180);
                        circleAY = circleA * Math.sin(triangleAngle* Math.PI/180) ;
                         T = 30* dt/1000;
                        var timedown;
                        
                        // if(newX == (v2.x + circleRadius* Math.cos((90 - triangleAngle/2) * Math.PI/180) )){ 
                        //     timedown = t;
                        //     circleV = circleV + 0 + circleA * timedown;
                        // }

                        circleX = circle.position.x;
                        circleY = circle.position.y;
                        circleZ = circle.position.z;
                           
                        if( newX < v2.x + circleRadius* Math.cos((90 - triangleAngle/2) * Math.PI/180)) { 

                            if(newY >= v2.y + circleRadius ){

                               newX = circleX + ( 0 * T  + 0.5 * circleAX * T * T ) * Math.cos( triangleAngle * Math.PI/180);
                               newY = circleY - ( 0 * T  + 0.5 * circleAX * T * T ) * Math.sin( triangleAngle * Math.PI/180);

                            } 
                        }

                         if( (newX > (v2.x + circleRadius* Math.cos((90 - triangleAngle/2) * Math.PI/180))) && (newX < (v4.x - circleRadius ))) {
                         newX = newX + circleV * T + 0.5 * circleA * T * T;
                         newY =  v2.y + circleRadius;
                         }



                        circle.position.set( newX , newY , circleZ );

                        if(triangleAngle != 0 ){
                             PIEremoveElement(modelLeft);
                         var squareShape = new THREE.Shape();
                         squareShape.moveTo( v1.x,v1.y,0 );
                         squareShape.lineTo( v2.x,v2.y,0);
                         squareShape.lineTo(v3.x,v3.y,0);
                         squareShape.lineTo(v1.x,v1.y,0);
                         modelLeft = new THREE.Mesh(new THREE.ShapeGeometry(squareShape), new THREE.MeshBasicMaterial({color:0x1a0d00}));
                         modelLeft.visible = true;
                         PIEaddElement(modelLeft);

                        } 

                         
                         // if(newX > v4.x-1-circleRadius){
                         //  PIEstopAnimation();
                         //  // resetExperiment();
                         //  resetafterclick();
                         // }



                         // if(t/1000 > 8){
                         //  PIEstopAnimation();
                      
                         //  resetExperiment();
                         // }


                         


                        break;
              
            
           }

       


           case 2:
           {    if(triangleAngle < 3 ){
                         PIEremoveElement(wedge);
                         triangleAngle = triangleAngle + dt/1000; 
                         v1 = new THREE.Vector3( trianglePoint_x ,trianglePoint_y,0); 
                         v2 = new THREE.Vector3(v1.x+20,v1.y,0);  
                         v3 = new THREE.Vector3(v1.x,v1.y+Math.tan(triangleAngle * Math.PI/180)*20,0); 
                            
                         geometry = new THREE.Geometry();
                         geometry.vertices.push( v1 , v2 , v3 , v1 );
                         material = new THREE.LineBasicMaterial( { color: 0x000000 } );

                          wedge = new THREE.Line( geometry, material );

                         PIEaddElement(wedge);

                         PIEremoveElement(circle);
                         // geometry = new THREE.CircleGeometry( circleRadius, 64 );
                         // material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
                         // circle = new THREE.Mesh( geometry, material );
                         circle.position.set(v3.x + circleRadius* Math.cos((90 - triangleAngle) * Math.PI/180), v3.y + circleRadius* Math.sin((90 - triangleAngle) * Math.PI/180) , v3.z);
                         
                          PIEaddElement(circle);

                            PIEremoveElement(modelLeft);
     var squareShape = new THREE.Shape();
     squareShape.moveTo( v1.x,v1.y,0 );
     squareShape.lineTo( v2.x,v2.y,0);
     squareShape.lineTo(v3.x,v3.y,0);
     squareShape.lineTo(v1.x,v1.y,0);
     modelLeft = new THREE.Mesh(new THREE.ShapeGeometry(squareShape), new THREE.MeshBasicMaterial({color:0x1a0d00}));
     modelLeft.visible = true;
     PIEaddElement(modelLeft);

                         newX = v3.x + circleRadius* Math.cos((90 - triangleAngle) * Math.PI/180);
                         newY = v3.y + circleRadius* Math.sin((90 - triangleAngle) * Math.PI/180);



                        
             }      

                circleA = (2/3)* gravity *Math.sin(triangleAngle* Math.PI/180);
                circleAX = circleA * Math.cos(triangleAngle* Math.PI/180);
                circleAY = circleA * Math.sin(triangleAngle* Math.PI/180) ;
                 T = 11*5* dt/1000;
                var timedown;
                
                // if(newX == (v2.x + circleRadius* Math.cos((90 - triangleAngle/2) * Math.PI/180) )){ 
                //     timedown = t;
                //     circleV = circleV + 0 + circleA * timedown;
                // }

                circleX = circle.position.x;
                circleY = circle.position.y;
                circleZ = circle.position.z;
                   
                if( newX < v2.x + circleRadius* Math.cos((90 - triangleAngle/2) * Math.PI/180)) { 

                    if(newY >= v2.y + circleRadius ){

                       newX = circleX + ( 0 * T  + 0.5 * circleAX * T * T ) * Math.cos( triangleAngle * Math.PI/180);
                       newY = circleY - ( 0 * T  + 0.5 * circleAX * T * T ) * Math.sin( triangleAngle * Math.PI/180);

                    } 
                }

                 if( (newX > (v2.x + circleRadius* Math.cos((90 - triangleAngle/2) * Math.PI/180))) && (newX < (v4.x - circleRadius ))) {
                 newX = newX + circleV * T + 0.5 * circleA * T * T;
                 newY =  v2.y + circleRadius;
                 }

                circle.position.set( newX , newY , circleZ );

                // if(newX  >v4.x-1-circleRadius){
                //           PIEstopAnimation();
                //           resetExperiment();

                //          }



                         // if(t/1000 > 8){
                         //  PIEstopAnimation();
                      
                         //  resetExperiment();
                         // }

                break;


           }

          case 3:
          {
              circleA = (2/3)* gravity *Math.sin(triangleAngle* Math.PI/180);
                        circleAX = circleA * Math.cos(triangleAngle* Math.PI/180);
                        circleAY = circleA * Math.sin(triangleAngle* Math.PI/180) ;
                         T = 15*1.5* dt/1000;
                        
                        text12.visible = false;
                        // if(newX == (v2.x + circleRadius* Math.cos((90 - triangleAngle/2) * Math.PI/180) )){ 
                        //     timedown = t;
                        //     circleV = circleV + 0 + circleA * timedown;
                        // }

                        circleX = circle.position.x;
                        circleY = circle.position.y;
                        circleZ = circle.position.z;
                           
                        if( newX < v2.x + circleRadius* Math.cos((90 - triangleAngle/2) * Math.PI/180)) { 

                            if(newY >= v2.y + circleRadius ){

                               newX = circleX + ( 0 * T  + 0.5 * circleAX * T * T ) * Math.cos( triangleAngle * Math.PI/180);
                               newY = circleY - ( 0 * T  + 0.5 * circleAX * T * T ) * Math.sin( triangleAngle * Math.PI/180);

                            } 
                        }

                         if( (newX >= (v2.x + circleRadius* Math.cos((90 - triangleAngle/2) * Math.PI/180))) && (newX < (v4.x - circleRadius ))) {
                         newX = newX + circleV * T + 0.5 * circleA * T * T;
                         newY =  v2.y + circleRadius;
                         }

                        circle.position.set( newX , newY , circleZ );

                         //  PIEremoveElement(modelLeft);
                         // var squareShape = new THREE.Shape();
                         // squareShape.moveTo( v1.x,v1.y,0 );
                         // squareShape.lineTo( v2.x,v2.y,0);
                         // squareShape.lineTo(v3.x,v3.y,0);
                         // squareShape.lineTo(v1.x,v1.y,0);
                         // modelLeft = new THREE.Mesh(new THREE.ShapeGeometry(squareShape), new THREE.MeshBasicMaterial({color:0x1a0d00}));
                         // modelLeft.visible = true;
                         // PIEaddElement(modelLeft);

                         // if(newX > v4.x-1-circleRadius){
                         //  PIEstopAnimation();
                         //  resetExperiment();
                         // }



                         // if(t/1000 > 8){
                         //  PIEstopAnimation();
                      
                         //  resetExperiment();
                         // }

                        break;


          }

          case 4:
          {              v1 = new THREE.Vector3( trianglePoint_x ,trianglePoint_y,0); 
                         v2 = new THREE.Vector3(v1.x+20,v1.y,0);  
                         v3 = new THREE.Vector3(v1.x,v1.y+Math.tan(triangleAngle * Math.PI/180)*20,0); 
                          circle.position.set(v3.x + circleRadius* Math.cos((90 - triangleAngle) * Math.PI/180), v3.y + circleRadius* Math.sin((90 - triangleAngle) * Math.PI/180) , v3.z);
    
                        
                         PIEremoveElement(modelLeft);
                          var squareShape = new THREE.Shape();
                         squareShape.moveTo( v1.x,v1.y,0 );
                         squareShape.lineTo( v2.x,v2.y,0);
                         squareShape.lineTo(v3.x,v3.y,0);
                         squareShape.lineTo(v1.x,v1.y,0);
                         modelLeft = new THREE.Mesh(new THREE.ShapeGeometry(squareShape), new THREE.MeshBasicMaterial({color:0x1a0d00}));
                         modelLeft.visible = true;
                         PIEaddElement(modelLeft);


                         // if(t/1000 > 4){
                         //  PIEstopAnimation();
                         //  resetExperiment();
                         // }
                         

            break;

             }


          case 5:{


                         // if(t/1000 > 8){
                         //  PIEstopAnimation();
                      
                         //  resetExperiment();
                         // }
                         

           // PIEremoveElement(circle);
           //  PIEremoveElement(wedge);
           //  PIEremoveElement(boundary);
           //   PIEremoveElement(modelLeft);
          //    PIEremoveElement(freebody);


            break;}

          

           
           
        
        }

}

/******************* Update (animation changes) code ***********************/






// text11.visible= false ;
// text12.visible= false ;
// text13.visible= false ;
// text21.visible= false ;
// text22.visible= false ;
// text31.visible= false ;
// text32.visible= false ;
// text41.visible= false ;

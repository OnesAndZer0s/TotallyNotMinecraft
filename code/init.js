var standard = {width:10, height:10, depth:10, mines:15};
var canvas = document.getElementById("game");
var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);

scene.preventDefaultOnPointerDown = false

var camera = new BABYLON.ArcRotateCamera(
	"Camera", -Math.PI / 2, 1.5, 25, BABYLON.Vector3.Zero(), scene); 

// SET IN BOARD CREATE
camera.attachControl(canvas, false);


// var newLight = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,0, 0), scene);
// newLight.groundColor = new BABYLON.Color3(0.5, 0.5, 0.5);
// newLight.intensity = 1;
// newLight.specular = new BABYLON.Color3(0.3,0.3,0.3);


engine.runRenderLoop(function () {
	scene.render();
  BABYLON.
});


// var faceTexture = new BABYLON.StandardMaterial("face", scene);
// var texture = new BABYLON.Texture("sprites/face.png");
// faceTexture.diffuseTexture = texture;

// var hexagonTexture = new BABYLON.StandardMaterial("hexagon", scene);
// var texture = new BABYLON.Texture("sprites/hexagon.png");
// hexagonTexture.diffuseTexture = texture;

// var numberTexture = new BABYLON.StandardMaterial("number", scene);
// var texture = new BABYLON.Texture("sprites/number.png");
// numberTexture.diffuseTexture = texture;

// var squareTexture = new BABYLON.StandardMaterial("square", scene);
// var texture = new BABYLON.Texture("sprites/square.png");
// squareTexture.diffuseTexture = texture;

// var triangleTexture = new BABYLON.StandardMaterial("triangle", scene);
// var texture = new BABYLON.Texture("sprites/triangle.png");
// triangleTexture.diffuseTexture = texture;



//window.addEventListener("resize", function(){engine.resize();});

//window.addEventListener("orientationchange", function(){engine.resize();});

//window.addEventListener("pointerdown", mouseDown);
//window.addEventListener("pointerup", mouseUp);


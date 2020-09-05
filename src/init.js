import * as B from '../node_modules/babylonjs/babylon.js'

var canvas = document.getElementById("game");
var engine = new BABYLON.Engine(canvas, true);


var scene = new BABYLON.Scene(engine);

// var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
// var physicsPlugin = new BABYLON.CannonJSPlugin();
// scene.enablePhysics(gravityVector, physicsPlugin);

//scene.preventDefaultOnPointerDown = false;
var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2,  Math.PI / 2, 0, new BABYLON.Vector3(-1,10,-1), scene);
// SET IN BOARD CREATE
camera.attachControl(canvas, false);

var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:100.0}, scene);
var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
skyboxMaterial.backFaceCulling = false;
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/textures/gui/title/background/beta/panorama', scene);
skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
skybox.material = skyboxMaterial;

console.log(skyboxMaterial.reflectionTexture);

// var newLight = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0,0, 0), scene);
// newLight.groundColor = new BABYLON.Color3(0.5, 0.5, 0.5);
// newLight.intensity = 1;
// newLight.specular = new BABYLON.Color3(0.3,0.3,0.3);


engine.runRenderLoop(function () {
	scene.render();
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


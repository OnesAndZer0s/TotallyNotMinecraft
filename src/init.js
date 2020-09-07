import * as B from '../node_modules/babylonjs/babylon.js';
import gameText from './font/text.js';

var canvas = document.getElementById("game");
var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);

// var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
// var physicsPlugin = new BABYLON.CannonJSPlugin();
// scene.enablePhysics(gravityVector, physicsPlugin);

scene.preventDefaultOnPointerDown = false;
var camera = new BABYLON.ArcRotateCamera("Camera", 0,0, 0, new BABYLON.Vector3(0.05,-0.2,1), scene);
camera.setPosition(BABYLON.Vector3.Zero());
camera.fov -=200;


var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:100.0}, scene);
var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
skyboxMaterial.backFaceCulling = false;
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/textures/gui/title/background/beta/panorama', scene);
skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
skybox.material = skyboxMaterial;


PIXI.utils.skipHello();

var pixiRenderer = new PIXI.Renderer({
	context: engine._gl,
	view: engine.getRenderingCanvas(),
	width: engine.getRenderWidth(),
	height: engine.getRenderHeight(),
	clearBeforeRender: false,
	autoStart: false
});

var stage = new PIXI.Container();

const logo = PIXI.Sprite.from('assets/textures/gui/title/logo.png');
logo.anchor.set(0.5);

function resizeLogo(){
	var newAsp = calcAspRatio(274,44,canvas.width/2.3,canvas.height);
	logo.width = newAsp.width;
	logo.height = newAsp.height;

	logo.position.set(canvas.width / 2,Math.min((canvas.height / 2),logo.height+17));
}

resizeLogo();
stage.addChild(logo);



function calcAspRatio(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };
}


var i = 0;
engine.runRenderLoop(function () {
	if (i<-0.001) {resizeLogo();}
	render(scene,pixiRenderer,stage);
	//console.log(camera.alpha);
	
	camera.alpha=i+(Math.PI*1.5);
	camera.beta=(Math.sin(i)+(Math.PI/2))/1.5;//(Math.PI*2);
	i-=0.0005;
});

function render(scene,pRend,st){
	pRend.reset();
	scene.render();
	scene.getEngine().wipeCaches(true);

	pRend.reset();
	pRend.render(st);
}

window.addEventListener("resize", function () {
	engine.resize();
	pixiRenderer.resize(canvas.width, canvas.height);
	resizeLogo();
});

stage.addChild(gameText("Ⴂ"));
/*
todo :
kerning
background to character
color codes
exceptions
obfuscated
bold
strikethrough
underline
italic
reset
*/
// https://unicode-table.com/en/blocks/latin-extended-a/
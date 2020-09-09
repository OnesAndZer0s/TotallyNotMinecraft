import * as B from '../node_modules/babylonjs/babylon.js';
import gameText from './font/text.js';

var canvas = document.getElementById("game");
var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

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

//stage.addChild(gameText("Ⴂ"));



new PIXI.Loader()
    .add('Default', '../assets/font/default.xml')
    .load(onAssetsLoaded);

function onAssetsLoaded() {
	const bitmapFontText = new PIXI.BitmapText([
		"",
		"",
		"\u0020\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002a\u002b\u002c\u002d\u002e\u002f",
		"\u0030\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u003a\u003b\u003c\u003d\u003e\u003f",
		"\u0040\u0041\u0042\u0043\u0044\u0045\u0046\u0047\u0048\u0049\u004a\u004b\u004c\u004d\u004e\u004f",
		"\u0050\u0051\u0052\u0053\u0054\u0055\u0056\u0057\u0058\u0059\u005a\u005b\u005c\u005d\u005e\u005f",
		"\u0060\u0061\u0062\u0063\u0064\u0065\u0066\u0067\u0068\u0069\u006a\u006b\u006c\u006d\u006e\u006f",
		"\u0070\u0071\u0072\u0073\u0074\u0075\u0076\u0077\u0078\u0079\u007a\u007b\u007c\u007d\u007e",
		"",
		"\u00a3\u0192",
		"\u00aa\u00ba\u00ac\u00ab\u00bb",
		"\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255d\u255c\u255b\u2510",
		"\u2514\u2534\u252c\u251c\u2500\u253c\u255e\u255f\u255a\u2554\u2569\u2566\u2560\u2550\u256c\u2567",
		"\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256b\u256a\u2518\u250c\u2588\u2584\u258c\u2590\u2580",
		"\u2205\u2208",
		"\u2261\u00b1\u2265\u2264\u2320\u2321\u00f7\u2248\u00b0\u2219\u00b7\u221a\u207f\u00b2\u25a05"
	].join("\n"), { font: '5px Default', align: 'left' });

    bitmapFontText.x = 0;
	bitmapFontText.y = 0;
	
    stage.addChild(bitmapFontText);
} 
var altArr = [
	"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u00a3\u0000\u0000\u0192",
	"\u0000\u0000\u0000\u0000\u0000\u0000\u00aa\u00ba\u0000\u0000\u00ac\u0000\u0000\u0000\u00ab\u00bb",
	"\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255d\u255c\u255b\u2510",
	"\u2514\u2534\u252c\u251c\u2500\u253c\u255e\u255f\u255a\u2554\u2569\u2566\u2560\u2550\u256c\u2567",
	"\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256b\u256a\u2518\u250c\u2588\u2584\u258c\u2590\u2580",
	"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u2205\u2208\u0000",
	"\u2261\u00b1\u2265\u2264\u2320\u2321\u00f7\u2248\u00b0\u2219\u00b7\u221a\u207f\u00b2\u25a0\u0000"
];
console.log(altArr);
altArr.forEach((cur,y)=>{
cur.split("").forEach((aaa,x)=>{
document.body.innerText+=(`<char id="${aaa.charCodeAt(0)}" x="${x*8}" y="${y*8}" width="8" height="8" xoffset="0" yoffset="0" xadvance="6" page="2" chnl="0" letter="${aaa}"/> \n`);
});
});

/*
        <char id="102" x="1" y="1" width="38" height="74" xoffset="2" yoffset="9" xadvance="28" page="0" chnl="0" letter="${String.fromCharCode()}"/>


*/

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
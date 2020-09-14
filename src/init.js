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

// split textures into square counterparts because
// pixijs does not like rectangles for some godforsaken reason.


// nonlatin 128 x 520

// accented 144 x 900
new PIXI.Loader()
	.add('Alternate', '../assets/font/alt.xml')
	.add('Default', '../assets/font/default.xml')
    .load(onAssetsLoaded);

	var fuckShitFuck = [
		"\u00a1\u2030\u00ad\u00b7\u20b4\u2260\u00bf\u00d7\u00d8\u00de\u04bb\u00f0\u00f8\u00fe\u0391\u0392",
		"\u0393\u0394\u0395\u0396\u0397\u0398\u0399\u039a\u039b\u039c\u039d\u039e\u039f\u03a0\u03a1\u03a3",
		"\u03a4\u03a5\u03a6\u03a7\u03a8\u03a9\u03b1\u03b2\u03b3\u03b4\u03b5\u03b6\u03b7\u03b8\u03b9\u03ba",
		"\u03bb\u03bc\u03bd\u03be\u03bf\u03c0\u03c1\u03c2\u03c3\u03c4\u03c5\u03c6\u03c7\u03c8\u03c9\u0402",
		"\u0405\u0406\u0408\u0409\u040a\u040b\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u041a",
		"\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a",
		"\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u043a\u043b",
		"\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b",
		"\u044c\u044d\u044e\u044f\u0454\u0455\u0456\u0458\u0459\u045a\u2013\u2014\u2018\u2019\u201c\u201d",
		"\u201e\u2026\u204a\u2190\u2191\u2192\u2193\u21c4\uff0b\u018f\u0259\u025b\u026a\u04ae\u04af\u04e8",
		"\u04e9\u02bb\u02cc\u037e\u0138\u1e9e\u00df\u20bd\u20ac\u0462\u0463\u0474\u0475\u04c0\u0472\u0473",
		"\u2070\u00b9\u00b3\u2074\u2075\u2076\u2077\u2078\u2079\u207a\u207b\u207c\u207d\u207e\u2071\u2122",
		"\u0294\u0295\u29c8\u2694\u2620\u049a\u049b\u0492\u0493\u04b0\u04b1\u04d8\u04d9\u0496\u0497\u04a2",
		"\u04a3\u04ba\u05d0\u05d1\u05d2\u05d3\u05d4\u05d5\u05d6\u05d7\u05d8\u05d9\u05db\u05dc\u05de\u05dd",
		"\u05e0\u05df\u05e1\u05e2\u05e4\u05e3\u05e6\u05e5\u05e7\u05e8\u00a2\u00a4\u00a5\u00a9\u00ae\u00b5",
		"\u00b6\u00bc\u00bd\u00be\u0387\u2010\u201a\u2020\u2021\u2022\u2031\u2032\u2033\u2034\u2035\u2036",
		"\u2037\u2039\u203a\u203b\u203c\u203d\u2042\u2048\u2049\u204b\u204e\u204f\u2051\u2052\u2057\u2117",
		"\u2212\u2213\u221e\u2600\u2601\u2608\u0404\u2632\u2635\u263d\u2640\u2642\u26a5\u2660\u2663\u2665",
		"\u2666\u2669\u266a\u266b\u266c\u266d\u266e\u266f\u2680\u2681\u2682\u2683\u2684\u2685\u02ac\u26a1",
		"\u26cf\u2714\u2744\u274c\u2764\u2b50\u2e18\u2e2e\u2e35\u2e38\u2e41\u2e4b\u295d\u1614\u0190\u07c8",
		"\u03db\u3125\u2c6f\u15fa\u0186\u15e1\u018e\u2132\u2141\ua7b0\ua780\u0500\ua779\u1d1a\u27d8\u2229",
		"\u0245\u2144\u0250\u0254\u01dd\u025f\u1d77\u0265\u1d09\u027e\u029e\ua781\u026f\u0279\u0287\u028c",
		"\u028d\u028e\u0531\u0532\u0533\u0534\u0536\u0537\u0539\u053a\u053b\u053c\u053d\u053e\u053f\u0540",
		"\u0541\u0542\u0543\u0544\u0545\u0546\u0547\u0548\u0549\u054b\u054c\u054d\u054e\u054f\u0550\u0551",
		"\u0552\u0553\u0554\u0555\u0556\u0559\u0561\u0562\u0563\u0564\u0565\u0566\u0567\u0568\u0569\u056a",
		"\u056b\u056c\u056d\u056e\u056f\u0570\u0571\u0572\u0573\u0574\u0575\u0576\u0577\u0578\u0579\u057a",
		"\u057b\u057c\u057d\u057e\u057f\u0580\u0581\u0582\u0583\u0584\u0585\u0586\u0587\u05e9\u05ea\u0538",
		"\u055a\u055b\u055c\u055d\u055e\u055f\u0560\u0588\u058f\u00af\u017f\u01b7\u0292\u01f7\u01bf\u021c",
		"\u021d\u0224\u0225\u02d9\ua75a\ua75b\u2011\u214b\u23cf\u23e9\u23ea\u23ed\u23ee\u23ef\u23f4\u23f5",
		"\u23f6\u23f7\u23f8\u23f9\u23fa\u23fb\u23fc\u23fd\u2b58\u25b2\u25b6\u25bc\u25c0\u25cf\u25e6\u25d8",
		"\u2693\u26e8\u0132\u0133\u01c9\ua728\ua729\ua739\ua73b\ufb00\ufb01\ufb02\ufb03\ufb05\ufffd\u0535",
		"\u054a\u16a0\u16a2\u16a3\u16a4\u16a5\u16a6\u16a7\u16a8\u16a9\u16aa\u16ab\u16ac\u16ad\u16ae\u16af",
		"\u16b0\u16b1\u16b2\u16b3\u16b4\u16b6\u16b7\u16b8\u16b9\u16ba\u16bb\u16bc\u16bd\u16be\u16bf\u16c0",
		"\u16c1\u16c2\u16c3\u16c4\u16c5\u16c6\u16c7\u16c8\u16c9\u16ca\u16cb\u16cc\u16cd\u16ce\u16cf\u16d0",
		"\u16d1\u16d2\u16d3\u16d4\u16d5\u16d6\u16d7\u16d8\u16d9\u16da\u16db\u16dc\u16dd\u16de\u16df\u16e0",
		"\u16e1\u16e2\u16e3\u16e4\u16e5\u16e6\u16e7\u16e8\u16e9\u16ea\u16eb\u16ec\u16ed\u16ee\u16ef\u16f0",
		"\u16f1\u16f2\u16f3\u16f4\u16f5\u16f6\u16f7\u16f8\u263a\u263b\u00a6\u2639\u05da\u05f3\u05f4\u05f0",
		"\u05f1\u05f2\u05be\u05c3\u05c6\u00b4\u00a8\u1d00\u0299\u1d04\u1d05\u1d07\ua730\u0262\u029c\u1d0a",
		"\u1d0b\u029f\u1d0d\u0274\u1d0f\u1d18\ua7af\u0280\ua731\u1d1b\u1d1c\u1d20\u1d21\u028f\u1d22\u00a7",
		"\u0271\u0273\u0272\u0288\u0256\u0261\u02a1\u0255\u0291\u0278\u029d\u02a2\u027b\u0281\u0266\u028b",
		"\u0270\u026c\u026e\u0298\u01c0\u01c3\u01c2\u01c1\u0253\u0257\u1d91\u0284\u0260\u029b\u0267\u026b",
		"\u0268\u0289\u028a\u0258\u0275\u0264\u025c\u025e\u0251\u0252\u025a\u025d\u0181\u0189\u0191\u01a9",
		"\u01b2\u10a0\u10a1\u10a2\u10a3\u10a4\u10a5\u10a6\u10a7\u10a8\u10a9\u10aa\u10ab\u10ac\u10ad\u10ae",
		"\u10af\u10b0\u10b1\u10b2\u10b3\u10b4\u10b5\u10b6\u10b7\u10b8\u10b9\u10ba\u10bb\u10bc\u10bd\u10be",
		"\u10bf\u10c0\u10c1\u10c2\u10c3\u10c4\u10c5\u10c7\u10cd\u10d0\u10d1\u10d2\u10d3\u10d4\u10d5\u10d6",
		"\u10d7\u10d8\u10d9\u10da\u10db\u10dc\u10dd\u10de\u10df\u10e0\u10e1\u10e2\u10e3\u10e4\u10e5\u10e6",
		"\u10e7\u10e8\u10e9\u10ea\u10eb\u10ec\u10ed\u10ee\u10ef\u10f0\u10f1\u10f2\u10f3\u10f4\u10f5\u10f6",
		"\u10f7\u10f8\u10f9\u10fa\u10fb\u10fc\u10fd\u10fe\u10ff\ufb4a\ufb2b\ufb4e\ufb44\ufb3b\ufb1f\ufb1d",
		"\ufb4b\ufb35\ufb4c\ufb31\ua727\ua726\u027a\u2c71\u02a0\u0297\u0296\u026d\u0277\u027f\u0285\u0286",
		"\u0293\u029a\u20aa\u20be\u058a\u2d00\u2d01\u2d02\u2d03\u2d04\u2d05\u2d06\u2d21\u2d07\u2d08\u2d09",
		"\u2d0a\u2d0b\u2d0c\u2d22\u2d0d\u2d0e\u2d0f\u2d10\u2d11\u2d12\u2d23\u2d13\u2d14\u2d15\u2d16\u2d17",
		"\u2d18\u2d19\u2d1a\u2d1b\u2d1c\u2d1d\u2d1e\u2d24\u2d1f\u2d20\u2d25\u215b\u215c\u215d\u215e\u2153",
		"\u2154\u2709\u2602\u2614\u2604\u26c4\u2603\u231b\u231a\u2690\u270e\u2763\u2664\u2667\u2661\u2662",
		"\u26c8\u2630\u2631\u2633\u2634\u2636\u2637\u2194\u21d2\u21cf\u21d4\u21f5\u2200\u2203\u2204\u2209",
		"\u220b\u220c\u2282\u2283\u2284\u2285\u2227\u2228\u22bb\u22bc\u22bd\u2225\u2262\u22c6\u2211\u22a4",
		"\u22a5\u22a2\u22a8\u2254\u2201\u2234\u2235\u221b\u221c\u2202\u22c3\u2286\u2287\u25a1\u25b3\u25b7",
		"\u25bd\u25c1\u25c6\u25c7\u25cb\u25ce\u2606\u2605\u2718\u2080\u2081\u2082\u2083\u2084\u2085\u2086",
		"\u2087\u2088\u2089\u208a\u208b\u208c\u208d\u208e\u222b\u222e\u221d\u2300\u2302\u2318\u3012\u027c",
		"\u0184\u0185\u1e9f\u023d\u019a\u019b\u0220\u019e\u019f\u01a7\u01a8\u01aa\u01b8\u01b9\u01bb\u01bc",
		"\u01bd\u01be\u0221\u0234\u0235\u0236\u023a\u2c65\u023b\u023c\u0246\u0247\u023e\u2c66\u0241\u0242",
		"\u0243\u0244\u0248\u0249\u024a\u024b\u024c\u024d\u024e\u024f\u1e9c\u1e9d\u1efc\u1efd\u1efe\u1eff",
		"\ua7a8\ua7a9\udf29\udf30\udf31\udf32\udf33\udf34\udf35\udf36\udf37\udf38\udf39\udf3a\udf3b\udf3c",
		"\udf3e\udf3f\udf40\udf41\udf42\udf43\udf44\udf45\udf46\udf47\udf48\udf49\udf4a\ud83c\udf27\udf28",
		"\u2150\u2151\u2155\u2156\u2157\u2159\u215a\u215f\u2189\u2190\udde1\ud83c\udff9\ud83e\ude93\ude94",
		"\u2bea\u2beb\u2c6d\ud83d\udee1"
	];
function onAssetsLoaded() {
	const bitmapFontText = new PIXI.BitmapText(fuckShitFuck.join('\n'), { font: '2px Default', align: 'left' });

    bitmapFontText.x = 0;
	bitmapFontText.y = -512;
	
    stage.addChild(bitmapFontText);
} 

// //console.log(fuckShitFuck);
// fuckShitFuck.forEach((cur,y)=>{
// cur.split("").forEach((aaa,x)=>{
// document.body.innerText+=(`<char id="${aaa.charCodeAt(0)}" x="${x*8}" y="${y*8}" width="8" height="8" xoffset="0" yoffset="0" xadvance="6" page="2" chnl="0" letter="${aaa}"/> \n`);
// });
// });

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
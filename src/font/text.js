export default function gameText (unicode) {

    return letter(unicode);
}


function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }


function letter (un){
    var cc = pad(un.charCodeAt(0).toString(16),4);
    if (cc.length!==4){return;}
    
    var row = parseInt(cc[2],16);
    var column = parseInt(cc[3],16);

    var newLetter = new PIXI.Container();

    const letterSprite = PIXI.Sprite.from(`assets/textures/font/unicode_page_${cc.slice(0,2)}.png`);
    console.log([cc.slice(0,2),row,column]);
    //letterSprite.anchor.set(0.5);
    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xFF3300);
    graphics.drawRect(0,0, 16,16);
    graphics.endFill();
    letterSprite.mask = graphics;

    newLetter.addChild(letterSprite);
    newLetter.position.x -=16*column;
    newLetter.position.y -=16*row;

    //newLetter.position.set(-(15-column)*16, -(15-row)*16)
    return newLetter
}

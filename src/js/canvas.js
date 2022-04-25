const canvas=document.querySelector("canvas")
const c=canvas.getContext("2d")
canvas.height=window.innerHeight-5;
canvas.width=window.innerWidth;

import platform_SmallTall_img from "../img/platformSmallTall.png"
import platform_img from "../img/platform.png"
import background_img from "../img/background.png"
import hills_img from "../img/hills.png"
import spriteRunLeft from "../img/spriteRunLeft.png"
import spriteRunRight from "../img/spriteRunRight.png"
import spriteStandLeft from "../img/spriteStandLeft.png"
import spriteStandRight from "../img/spriteStandRight.png"
const image_background=new Image()
image_background.src=background_img
console.log(platform_img)
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
const gravity=0.5

class Player
{
    constructor()
    {
        this.position={
            x:150,
            y:100
        }
        this.velocity={
            x:0,
            y:10
            // As y value increases in canvas, player goes down
        }
        this.width=66
        this.height=150
        this.image=createImage(spriteStandRight)
        this.frames=0
        this.sprites={
          stand:{
            right:createImage(spriteStandRight),
            left: createImage(spriteStandLeft),
            cropwidth:177,
            width:66
          },
          run:{
            right:createImage(spriteRunRight),
            left:createImage(spriteRunLeft),
            cropwidth:341,
            width:127.875
          }
        }
        this.currentSprite=this.sprites.stand.right
        this.currentcropWidth=177
      }
    draw()
    {
        // c.fillStyle="red"
        // c.fillRect(this.position.x,this.position.y,this.width,this.height)
        c.drawImage(this.currentSprite,this.currentcropWidth*this.frames,0,this.currentcropWidth,400,this.position.x,this.position.y,this.width,this.height);
    }
    update()
    {
        this.frames++
        if(this.frames>59 && (this.currentSprite===this.sprites.stand.right || this.currentSprite===this.sprites.stand.left))
        {
          this.frames=0
        }
        else if (this.frames>29 && (this.currentSprite===this.sprites.run.right || this.currentSprite===this.sprites.run.left))
        {
          this.frames=0
        }
        this.draw()
        this.position.y+=this.velocity.y
        this.position.x+=this.velocity.x
        if(this.position.y+this.height+this.velocity.y<=canvas.height)
        {
           this.velocity.y+=gravity
        }
        // else
        // {
        //     this.velocity.y=0
        // }
    }
}

class Platform
{
    constructor(x_val,y_val,image)
    {
        this.position={
            x:x_val,
            y:y_val
        }
        this.image=image
        this.width=image.width
        this.height=image.height
    }
    draw()
    {
        c.drawImage(this.image,this.position.x,this.position.y);
        // c.fillStyle="green"
        // c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}
class GenericObject
{
    constructor(x_val,y_val,image)
    {
        this.position={
            x:x_val,
            y:y_val
        }
        this.image=image
        this.width=image.width
        this.height=image.height
    }
    draw()
    {
        c.drawImage(this.image,this.position.x,this.position.y);
    }
}
let scrolloffset=0

function createImage(ImgSrc)
{
  const image=new Image()
  image.src=ImgSrc
  return image
}

let platformSmallTall=new createImage(platform_SmallTall_img)
let platformImage=new createImage(platform_img)
let player=new Player()
let platforms =[]
let GenericObjects=[]
let currentKey
const keys={
    right_pressed:false,
    left_pressed:false
}
function start()
{
  platformImage=new createImage(platform_img)
  platformSmallTall=new createImage(platform_SmallTall_img)
  player=new Player()
  platforms =[new Platform(-1,580,platformImage),new Platform(platformImage.width-3,580,platformImage), new Platform(platformImage.width*2+100,580,platformImage),new Platform(platformImage.width*3+300,580,platformImage),new Platform(platformImage.width*4+300,580,platformImage),new Platform(platformImage.width*5+300,300,platformSmallTall)] 
  GenericObjects=[new GenericObject(0,0,createImage(background_img)),new GenericObject(0,0,createImage(hills_img))]
}
function animate()
{
    requestAnimationFrame(animate)
    c.fillStyle="white"
    c.fillRect(0,0,canvas.width,canvas.height)
    GenericObjects.forEach(genericObject=>{
      genericObject.draw()
    })
    // c.clearRect(0,0,canvas.width,canvas.height)
    platforms.forEach(platform=>{
        platform.draw()
    })
    player.update()
    if(keys.right_pressed && player.position.x<800)
    {
        player.position.x+=10
    }
    else if(keys.left_pressed && player.position.x>100 || (keys.left_pressed && scrolloffset===0 && player.position.x>0))
    {
        player.position.x-=10
    }
  
    else
    { 
        player.velocity.x=0
        if(keys.right_pressed)
        {
            scrolloffset+=10
            platforms.forEach(platform=>{
                platform.position.x-=10
            })
            GenericObjects.forEach(genericObject=>{
              genericObject.position.x-=3
            })
        }
        
        else if(keys.left_pressed && scrolloffset>0)
        {
            scrolloffset-=10
            platforms.forEach(platform=>{
                platform.position.x+=10
            })
            GenericObjects.forEach(genericObject=>{
              genericObject.position.x+=3
            })
        }
    }
    platforms.forEach(platform=>{
        if(player.position.y+player.height<=platform.position.y && 
            player.position.y+player.height+player.velocity.y>=platform.position.y && 
            player.position.x+player.width>=platform.position.x && 
            player.position.x<=platform.position.x+platform.width)
        {
            player.velocity.y=0
        }
    })
    if(keys.right_pressed && currentKey==='right' && player.currentSprite!==player.sprites.run.right)
    {
      player.frames=1
      player.currentSprite=player.sprites.run.right
      player.currentcropWidth=player.sprites.run.cropwidth
      player.width=player.sprites.run.width
    }
    else if(keys.left_pressed && currentKey==="left" && player.currentSprite!==player.sprites.run.left)
    {
        player.currentSprite=player.sprites.run.left
        player.currentcropWidth=player.sprites.run.cropwidth
        player.width=player.sprites.run.width
    }
    else if(!keys.left_pressed && currentKey==="left" && player.currentSprite!==player.sprites.stand.left)
    {
        player.currentSprite=player.sprites.stand.left
        player.currentcropWidth=player.sprites.stand.cropwidth
        player.width=player.sprites.stand.width
    }
    else if(!keys.right_pressed && currentKey==="right" && player.currentSprite!==player.sprites.stand.right)
    {
        player.currentSprite=player.sprites.stand.right
        player.currentcropWidth=player.sprites.stand.cropwidth
        player.width=player.sprites.stand.width
    }
    if(scrolloffset>platformImage*5+300)
    {
        console.log("I won!!!")
    }
    if(player.position.y>canvas.height)
    {
      
      console.log("you loose!")
      start()
    }
    // else
    // {
    //     // console.log(scrolloffset)
        
    // }
}
start()
animate()
addEventListener("keydown" ,({keyCode})=>{
    switch(keyCode)
    {
        case 37:console.log("left")     
                keys.left_pressed=true
                currentKey="left"
                // player.currentSprite=player.sprites.run.left
                // player.currentcropWidth=player.sprites.run.cropwidth
                // player.width=player.sprites.run.width
                break;
        case 38:console.log("up")
                // console.log(player.velocity.y)
                player.velocity.y-=10
                // console.log(player.velocity.y)
                break;
        case 39: console.log("right")
                keys.right_pressed=true
                currentKey="right"
                // player.position.x-=player.velocity.x
                // player.currentSprite=player.sprites.run.right
                // player.currentcropWidth=player.sprites.run.cropwidth
                // player.width=player.sprites.run.width
                break;
        case 40:console.log("down")
                player.velocity.y+=10
                break;
    }
})
addEventListener("keyup" ,({keyCode})=>{
    switch(keyCode)
    {
        case 37:console.log("left")
                keys.left_pressed=false 
                // player.position.x-=player.velocity.x
                // player.currentSprite=player.sprites.stand.left
                // player.currentcropWidth=player.sprites.stand.cropwidth
                // player.width=player.sprites.stand.width
                // player.velocity.x=0
                break;
        case 39: console.log("right")
                keys.right_pressed=false
                // player.position.x-=player.velocity.x
                // player.currentSprite=player.sprites.stand.right
                // player.currentcropWidth=player.sprites.stand.cropwidth
                // player.width=player.sprites.stand.width
                // player.velocity.x=0
                break;
    }
})
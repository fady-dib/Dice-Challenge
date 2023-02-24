var image_1 = document.getElementById('image-1')
var image_2 = document.getElementById('image-2')
var result = document.getElementById('status')

dice_1 = Math.floor(Math.random() * 6) +1
dice_2 = Math.floor(Math.random() * 6) +1

image_1.setAttribute("src","dice-" + dice_1 +".png")
image_2.setAttribute("src","dice-" + dice_2 +".png")

if(dice_1 > dice_2){
    result.innerHTML="Player 1 Wins!"
}
else if(dice_2 > dice_1){
    result.innerHTML="Player 2 Wins!"
}
else{
    result.innerHTML="Draw!"
}
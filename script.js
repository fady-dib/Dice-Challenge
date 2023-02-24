var image_1 = document.getElementById('image-1')
    dice_1 = Math.floor(Math.random() * 6) +1
    image_1.setAttribute("src","dice-" + dice_1 +".png")
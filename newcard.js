function on_off(){
    if(document.getElementById("swi").checked){
        document.body.style.backgroundImage = "url('image/fireworks.gif')";

    }
    else{
        document.body.style.backgroundImage = "url('image/elegant-pastel-color-beautiful-background_1017-33496.jpg')";
    }
 
    
}

function transformation(){
    const back = document.querySelector(".back");
    const front = document.querySelector(".front");
    front.style.transform = "rotateY(-170deg)";
    back.style.transform =  "rotateY(-170deg)";
    back.style.background = "url('image/img8.jpg')";
    back.style.backgroundRepeat="no-repeat";
    back.style.backgroundSize =  "100% 100%";

    // card.style.left =  "36.5%";
    // text.style.transform =  "rotateY(180deg)";
}

function R_transformation(){
    const back = document.querySelector(".back");
    const front = document.querySelector(".front");
    front.style.transform = "";
    back.style.transform =  "";
    back.style.background = "url('image/img8.jpg')";
    back.style.backgroundRepeat="";
    back.style.backgroundSize =  "100% 100%";

    // card.style.left =  "36.5%";
    // text.style.transform =  "rotateY(180deg)";
}

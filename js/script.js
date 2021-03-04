const myCar = document.querySelector(".car");
const triassic = document.querySelector(".triassic");
const jurassic = document.querySelector(".jurassic");
const cretaceous = document.querySelector(".cretaceous");

let myLeft = 0;

window.onkeydown = function(event){
    if(event.keyCode === 39){
        myLeft += 5;
        myCar.style.left = myLeft + "px";
    }
    if(event.keyCode === 37){
        myLeft -= 5;
        myCar.style.left = myLeft + "px";
    }

    if(myCar.offsetLeft > triassic.offsetLeft){
        triassic.style.opacity = "1";
    }

    if(myCar.offsetLeft > jurassic.offsetLeft){
        jurassic.style.opacity = "1";
    }

    if(myCar.offsetLeft > cretaceous.offsetLeft){
        cretaceous.style.opacity = "1";
    }
    if(myCar.offsetLeft < triassic.offsetLeft){
        triassic.style.opacity = "0";
    }

    if(myCar.offsetLeft < jurassic.offsetLeft){
        jurassic.style.opacity = "0";
    }

    if(myCar.offsetLeft < cretaceous.offsetLeft){
        cretaceous.style.opacity = "0";
    }
}
alert("welcome to PhantomOz Pay Calculator")

document.querySelector("button").addEventListener("click", function(){
    const x = document.getElementById("hoursworked").value;
    const y = document.getElementById("extra-hours").value;
    if (x > 4){
        let r = x - 4;  
        const pay = (4 * 1000) + ( r * 1200) + (y * 1200);
        document.querySelector("p").innerHTML = "Your Fee is #" + pay + ".00"
    }else{
        const pay = (x * 1000) + (y * 1200);
        document.querySelector("p").innerHTML = "Your Fee is #" + pay + ".00"

    }
    
});
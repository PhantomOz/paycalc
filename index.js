alert("welcome to PhantomOz Pay Calculator")

document.querySelector("button").addEventListener("click", function(){
    const x = document.getElementById("hoursworked").value;
    const y = document.getElementById("extra-hours").value;
    const pay = (x * 1000) + (y * 200);
    document.querySelector("p").innerHTML = "Your Fee is #" + pay + ".00"
});
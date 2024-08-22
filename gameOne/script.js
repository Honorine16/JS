const circle = document.getElementById('circle')
const mouse = document.getElementById('full-banner')
mouse.addEventListener('mousemove', function (e){
    console.log(e);
    circle.style.left = (e.clientX - 50) + "px";
    circle.style.top = (e.clientY - 50) + "px";
})
var cb              = document.getElementById('check-box');
var bgd      = document.getElementById('test');


cb.addEventListener('click', function(){
if(cb.checked == true){
    console.log("on");
    document.body.style.background = '#95a5a6';
    document.body.style.transition = '0.4s';
    bgd.style.backgroundColor = '#4b6584';
}
else{
    console.log("off");
    document.body.style.background = '#34495e';
    document.body.style.transition = '0.4s';
    bgd.style.backgroundColor = '#2a3d4e';
}
});


function prev(){
    history.back(); //Go to the previous page
}
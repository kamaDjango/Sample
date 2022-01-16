function fun(){
    var p1=document.getElementById("p1");
    p1.style.backgroundColor="red";
    p1.style.fontSize="30px";
    p1.style.color="navy";

    var p=document.getElementsByClassName('p');
    for(let i=0;i<p.length;i++){
        p[i].style.backgroundColor="navy";
        p[i].style.color="white";
    }
}
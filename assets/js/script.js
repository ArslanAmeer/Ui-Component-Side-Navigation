
document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("slideOpen").addEventListener('click',function(){

        document.getElementById("slideMenu").style.width = "25%";
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("main").style.width = "75%";
    
    },false)
    
    document.getElementById("slideClose").addEventListener('click',function(){
    
        document.getElementById("slideMenu").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("main").style.width = "100%";
    
    },false)

});




$(document).ready(function(){
    var quad = [$("#q"), $("#q1"), $("#q2"), $("#q3"), $("#q4"), $("#q5")];
    var i = 0;
        var show = setInterval(function(){
            quad[i].fadeIn("slow");
            quad[i].css("transform", "rotateY(180deg)");
            i++;
            if(i == quad.length){
                clearInterval(show);
            }
        }, 300);
//    var newQuad = document.createElement("div");
//    newQuad.setAttribute("class", "quad");
////    quad[2] = $("#quad2");
//    document.body.appendChild(newQuad);
    
})
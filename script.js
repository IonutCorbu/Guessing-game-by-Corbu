var random=Math.floor(Math.random()*1000)+1;
var nrincercari=10;
var castigator=false;
const changeText=()=>
{
    var el=document.getElementById("ghicire");
    var text=document.getElementById("raspuns");
    if(nrincercari>0){
    if(el.value ==random)
        {
            var div=document.createElement("div");
            var finaltest=document.createTextNode("Ai castigat!");
            div.appendChild(finaltest);
            document.body.appendChild(div);
            div.id="textfinal";

            var p=document.getElementById("casuta");
            p.parentNode.removeChild(p);

            text.parentNode.removeChild(text);

            var music=document.getElementById("music");
            music.src="";
            castigator=true;
            nrincercari--;
        }
    else if(el.value<random)
    {
        text.innerHTML="Mai mare";
        nrincercari--;
    }
    else
    {
        text.innerHTML="Mai mic";
        nrincercari--;
    }
    
    }
    if(nrincercari==0&&castigator==false){
        var p=document.getElementById("casuta");
            p.parentNode.removeChild(p);

            text.parentNode.removeChild(text);

        var div=document.createElement("div");
        var finaltest=document.createTextNode("Ai pierdut!");
            div.appendChild(finaltest);
            document.body.appendChild(div);
            div.id="textfinal";

            var d=document.getElementById("incercari");
            d.parentNode.removeChild(d);

            var music=document.getElementById("music");
            music.src="";
    }
    document.getElementById("incercari").innerHTML="Nr.incercări:"+nrincercari;
    el.value="";

    

}
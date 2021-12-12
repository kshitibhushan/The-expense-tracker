
var mynodelist=document.getElementsByTagName("LI");
var i;
for(i=0;i<mynodelist.length;i++){
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    mynodelist[i].appendChild(span);
    
    span.onclick=function(){
        var div=this.parentElement;
        div.style.display='none';

    }      
}



var tot=0;
function newitem(){
    var elem=document.createElement('li');
    var myitem=document.getElementById('item').value;
    var myprice=document.getElementById('price').value;
    var t=document.createTextNode(myitem);
    elem.appendChild(t);
    var inp=document.createElement('input');
    inp.className='inp';
    inp.value=myprice;
    inp.readOnly=true;
    tot=Number(tot)+Number(myprice);
    elem.appendChild(inp);
    if(myitem===''){
        alert('item must have some name');
    }
    else if(myprice===''){
        alert('what is the price');
    }
    else{
        var span=document.createElement("SPAN");
        var txt=document.createTextNode("\u00D7");
        span.className="close";
        span.appendChild(txt);
        elem.appendChild(span);
        var x=document.getElementById('myul');
        x.appendChild(elem);
        document.getElementById('total').innerHTML=tot;
    }
    document.getElementById('item').value='';
    document.getElementById('price').value='';
}
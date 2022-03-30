
// let a = document.getElementById("text");
// console.log(a);

// let b= document.getElementsByTagName("h1");
// console.log(b);
// console.log(b[0].innerText);

// let c=document.getElementsByClassName("box");
// console.log(c);
// console.log(c[0].innerText);

document.getElementById("click").onclick = function(){
    document.getElementById("text").innerText = "hello world"
}

document.getElementById("click2").onclick = function(){
    document.getElementById("container").style.flexDirection = "column";
}

//Q6 difference between Window and document

// Window object : It is the top most object and outermost element of the object hierarchy as shown in Figure 1.
// Document object : Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page. Using document object, JavaScript can modify, add and delete the HTML elements, attributes CSS styles in the page
// The window  object represents a window/tab containing a DOM document where as document object is property of window object that points to the DOM document loaded in that window.
// You can access a document object either using window.document property or using document object directly as window is global object.
// The other major difference is that both window object and document object have properties and methods. Few method names are same in both objects but with different behavior. In the below example window.open() opens a new tab or window and document.open() creates a blank document within the window

document.getElementById("click3").onclick = function(){
    document.getElementById("text2").style.color="red";
}

document.getElementById("click4").onclick = function(){
    document.getElementById("text3").innerHTML="welcome to EA";
}

function clock(){
    
    let time=new Date();
    let h= time.getHours();
    let m= time.getMinutes();
    let s=time.getSeconds();
    ampm.innerText="PM"
    if(h<12){
        ampm.innerText="AM"
    }
    if(h==0){
        h=12;
    }
    if(h>12){
        h=h-12;
    }
    if(h<10){
        h="0"+h
    }
    if(s<10){
        s="0"+s
    }
    if(m<10){
        m="0"+m
    }
    
    hour.innerText=h;
    min.innerText=m;
    sec.innerText=s
    }
    setInterval(clock,1)



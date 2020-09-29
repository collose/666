var jk = document.getElementsByClassName("btn1");
        jk.onclick=function $root(){
           var ni=Document.getElementsById("ni").style.left;
           ni=ni.replace("px"," ");
           ni=Number(ni)+ 5;
          document.getElementsById("ni").style.left=ni+"px";
        }
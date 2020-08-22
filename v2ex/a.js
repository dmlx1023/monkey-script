document.addEventListener("click",function(e){
   if(e.target.nodeName=='A'){
       e.target.setAttribute("target",'_blank')
   }
 })
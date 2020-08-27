const drp_btn=document.querySelector(".drp-btn")
const drp_list=document.querySelector(".drp-list")

var i=true;
function showDropLists(){
    if(i){
        drp_list.style.display="block"
        i=false
    }
    else{
        drp_list.style.display="none"
        i=true
    }
}
drp_btn.addEventListener("click",showDropLists)


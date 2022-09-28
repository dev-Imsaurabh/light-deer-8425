document.querySelector("#toggle").addEventListener("click",slideTop);
document.querySelector("#close").addEventListener("click",hideSlideLayout);
// let body = document.querySelector("body");


let toggle =0
function slideTop(event){

    // console.log("invoked")
    let slideLayout = document.querySelector("#accordian>div:nth-child(1)");

    let tbtn = document.querySelector("#toggle");

    if(toggle==0){
        slideLayout.style.maxHeight="120px";
        slideLayout.style.transition="max-Height 0.2s";
        toggle=1
        tbtn.style.transform="rotate(180deg)"
        tbtn.style.transition="transform 0.2s"

    }else{

        slideLayout.style.maxHeight="35px";
        slideLayout.style.transition="max-Height 0.2s";
        toggle=0
        tbtn.style.transform="rotate(0deg)"
        tbtn.style.transition="transform 0.2s"
    }

}

function hideSlideLayout(event){
    let slideLayout = document.querySelector("#accordian>div:nth-child(1)");
    slideLayout.style.display="none";
}

let allTabs = document.querySelectorAll("#tabs>div>p");
let hideMenu =document.querySelectorAll("#tabs>div>p");
hideMenu.forEach(function(el){
    el.addEventListener("mouseout",function(){
        hideTheMenu(event)
    })
})

allTabs.forEach(function(el){
    el.addEventListener("mouseover",function(){
        showDropDown(event)
    })
})


function showDropDown(event){
    event.target.nextElementSibling.style.visibility="visible"
    // body.style.backgroundColor="rgba(0, 0, 0, 0.5)";
}

function hideTheMenu(event){
    event.target.nextElementSibling.style.visibility="hidden"
    // body.style.backgroundColor="white";


}
const contactItems = document.getElementsByClassName("contact-item");
const contactDivs = document.getElementsByClassName("contact-div");

    for (const item of contactItems) {

       /* hide all individual contact items*/

        if (item.getAttribute("data-should-copy") == "false") continue;
        const copyUnder = item.querySelector(".clipboard-hold").querySelector(".copied-under");
 
        item.addEventListener("pointerup",()=>{
            navigator.clipboard.writeText(item.getAttribute("value"))
            copyUnder.style.visibility = "visible";
            setTimeout(()=>{
                copyUnder.style.visibility = "hidden";
            }, 1200);
        })
    }
    

    for (const item of contactDivs) item.classList.add("contact-hidden");
/* contact tab show */
function contactButton() {
    document.getElementById("aboutme").style.display = "none";
   
    for (const item of contactDivs) 
        item.classList.remove("contact-shown");
        
    
    document.getElementById("contact-list").style.display = "flex";
    for (var i = 0; i < contactDivs.length; i++) {
        const item = contactDivs[i];
        
        setTimeout(() => {
            
             item.classList.add("contact-shown");
            
            
    }, i * 100);
    }
}

const contactItems = document.getElementsByClassName("contact-item");
    
    for (const item of contactItems) {
        if (item.getAttribute("data-should-copy") == "false") continue;
        const copyUnder = item.querySelector(".clipboard-hold").querySelector(".copied-under");
        console.log(copyUnder);
        item.addEventListener("pointerup",()=>{
            navigator.clipboard.writeText(item.getAttribute("value"))
            copyUnder.style.display = "inline";
            setTimeout(()=>{
                copyUnder.style.display = "none";
            }, 1200);
        })
    }
    
/* contact tab show */
function contactButton() {
    document.getElementById("contact-list").style.display = "flex";
}


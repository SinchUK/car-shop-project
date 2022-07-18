
const accordion = () => {
    const acc = document.getElementsByClassName("accordion");
    let i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
    
            const icon = this.querySelector('i');
    
            const plus = document.createElement('I');
            plus.setAttribute('aria-hidden', 'true');
            plus.classList.add('fa', 'fa-plus');
    
            const minus = document.createElement('I');
            minus.setAttribute('aria-hidden', 'true');
            minus.classList.add('fa', 'fa-minus');
    
    
    
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
    
            if (panel.style.display === "block") {
                this.classList.remove('accordion_active');
                panel.style.display = "none";
                icon.remove();
                this.appendChild(plus);
    
            } else {
                this.classList.add('accordion_active');
                panel.style.display = "block";
    
                icon.remove();
                this.appendChild(minus);
            }
        });
    }
};


export default accordion;



//Sort select
export const customSelect = (selector) => {

    let x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName(selector);
    l = x.length;

    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;

        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        
        if (selector === 'custom-select') {
            a.setAttribute("class", "select-selected");
        } else if (selector === 'custom-select2') {
                a.setAttribute("class", "select-selected2");
            }
        
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);

        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");

        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                let y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                }
                }
                h.click();
            });
            b.appendChild(c);
        }

        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        let x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
            arrNo.push(i);
            } else {
            y[i].classList.remove("select-arrow-active");
            }
        }

        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
            }
        }
    }

    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);

};

//Filter select
export const customSelect2 = (selector) => {

    let x, i, j, l, ll, selElmnt, a, b, c;

    /*look for any elements with the class in "selector":*/
    x = document.getElementsByClassName(selector);
    l = x.length;
    
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected2");
        a.setAttribute("id", i);
        
        const inner = document.createElement("DIV");
        inner.classList.add("selected-item2");
        inner.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        
        a.appendChild(inner);
        x[i].appendChild(a);
        
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items2 select-hide");
        
        for (j = 1; j < ll; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            
            c.addEventListener("click", function(e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
            
                let y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;

                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;

                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;

                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.parentNode.classList.remove('select-arrow-active');
                // console.log(this, "this");
                this.parentNode.parentNode.parentNode.style.border = '1px solid #df4e3c';
            });
            b.appendChild(c);
        }
        a.appendChild(b);
        
        a.addEventListener("click", function(e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            
            e.stopPropagation();
            // console.log(this, "from click");
            closeAllSelect(this);
            // if(i === 1) {
            //     console.log(this, "this");
            // }
            
            
            this.querySelector('.select-items2').classList.toggle("select-hide");
            // console.log(this.querySelector('.select-items2'));
            this.classList.toggle("select-arrow-active");
            });
    }

    function closeAllSelect(elmnt) {
        // console.log(elmnt, "elmnt in close");
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        let x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items2");
        // console.log(x, "x");
        y = document.getElementsByClassName("select-selected2");
        xl = x.length; //5
    
        yl = y.length; //5 
        for (i = 0; i < yl; i++) {
           
            if (elmnt == y[i]) {
                console.log(y[i], "y[i]");
                arrNo.push(i);
            } else {
                 y[i].classList.remove("select-arrow-active");
            }
        }
        // console.log(arrNo, 'arrNo');
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
            }
        }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
};
let addbtn = document.querySelector("#add");
// counter for item counting
let count = 1;
const arr = []
addbtn.addEventListener("click", (e) => {
    e.preventDefault();
    //put value from user 
    let textbox = document.querySelector(".textbox");
    let popup = document.querySelector(".popup");
    popup.style.opacity = "0";

    if (textbox.value == "") {
        popup.innerHTML = "empty field.....";
        popup.style.opacity = "1";
    }
    else {

        arr.push(textbox.value)

        let display = document.querySelectorAll(".display")

        display[0].innerHTML += `<span class="item">
        <textarea  class="list"  rows="1" readonly=readonly>${textbox.value}</textarea>

             <button id="dlt" class="dlt" type='button'>Dlt </button>
             <button class="edit" type='button'>Edit </button>
             <button class="save" type='button'>save </button>
        </span>
        `;
        textbox.value = "";  //to clear the text in textbox



        // delete section
        const delt = document.querySelectorAll('.dlt');
        const editbtn = document.querySelectorAll('.edit');
        const edit = document.querySelector('.list ');

        for (var i = 0; i < delt.length; i++) {
            delt[i].addEventListener('click', function () {
                this.parentNode.remove();
                const index = arr.indexOf(i);
                  arr.splice(index, 1);               
                  console.log(arr)

            })


        }
        editbtn.forEach((e, i) => {
            editbtn[i].addEventListener('click', () => {
                console.log(display[0]);
                // display[0].children[i].children[0].removeAttribute('readonly', 'readonly');
                if (editbtn[i].innerHTML === "Edit") {
                    display[0].children[i].children[0].removeAttribute('readonly', 'readonly');
                    editbtn[i].innerHTML = "save"
                    const index = arr.indexOf(display[0].children[i].children[0].value   );
                    // const index=            
                    console.log(index)


                }
                else {
                    display[0].children[i].children[0]
                        .setAttribute('readonly', 'readonly');
                    editbtn[i].innerHTML = "Edit"

                }


            })
        })




        // for (let j = 0; j < editbtn.length; j++) {
        //     editbtn[j].addEventListener('click', function () {
        //         if (editbtn[0].innerHTML === "Edit") {
        //             edit.removeAttribute('readonly', 'readonly');
        //             editbtn[0].innerHTML = "save"
        //         } else {
        //             edit.setAttribute('readonly', 'readonly');
        //             editbtn[0].innerHTML = "Edit"
        //         }





        // const editingValue = this.parentNode.children[0].innerHTML;
        // textbox.value = editingValue;

        // const donebtn= 
        // const done = document.querySelector('.done ');
        // done.style.display = "inline"
        // addbtn.style.display = "none"

        // done.addEventListener('click', function () {
        //     const span = document.querySelector('.item')
        // display.children[j].children[0].innerHTML = textbox.value;
        //     console.log(display.children[j].children[0].innerHTML = textbox.value ,j );

        //     edit.textContent = textbox.value;
        //     done.style.display = "none"
        //     addbtn.style.display = "inline"
        //     textbox.value = ""

        // });

        //    console.log( addbtn.textContent )
        //     });

        // }
        // popup section
        let popup = document.querySelector(".popup");
        popup.innerHTML = "Item added succefully..";
        popup.style.opacity = "1";
        setInterval(() => {
            popup.style.opacity = "0"; 4
        }, 2500);

    }
    console.log(arr);

});




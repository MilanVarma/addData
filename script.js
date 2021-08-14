var form = document.getElementById("form");
var table = document.getElementById("table");
var fname = document.getElementById('firstName');
var lname = document.getElementById("lastname");
var ares = document.getElementById("add");
var pin = document.getElementById("pin");
var gender = document.getElementById("gender");
var food = document.getElementById("food");
var state = document.getElementById("state");
var country = document.getElementById("country");

form.addEventListener('submit',a)

function a(e){

    if(fname.value == ''||lname.value == ''||ares.value == ''||pin.value == ''||state.value == ''|| country.value == ""){
        e.preventDefault()
        let error = document.getElementById("error")
        error.innerText = "Fill all the fields";
        error.style.backgroundColor = 'red';
        error.style.color = 'white';
        error.style.textAlign = 'center';

        setInterval(() => error.innerText="",2000)
    }
    else{
        e.preventDefault()

        let error = document.getElementById("error")
        error.innerText = "Success";
        error.style.backgroundColor = 'Green';
        error.style.color = 'white';
        error.style.textAlign = 'center';

        setInterval(() => error.innerText="",2000)
    

    
    let td = document.createElement("td")
    td.appendChild(document.createTextNode(fname.value))

    let td1 = document.createElement("td")
    td1.appendChild(document.createTextNode(lname.value))

    let td2 = document.createElement("td")
    td2.appendChild(document.createTextNode(ares.value))

    let td3 = document.createElement("td")
    td3.appendChild(document.createTextNode(pin.value))

    let td4 = document.createElement("td")
    td4.appendChild(document.createTextNode(gender.value))

    let td5 = document.createElement("td")
    td5.appendChild(document.createTextNode(food.value))

    let td6 = document.createElement("td")
    td6.appendChild(document.createTextNode(state.value))

    let td7 = document.createElement("td")
    td7.appendChild(document.createTextNode(country.value))

    let tr = document.createElement("tr")
   
    tr.appendChild(td)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    
    table.appendChild(tr)

    fname.value = "";
    lname.value = "";
    ares.value = "";
    pin.value = "";
   
    state.value = "";
    country.value = "";


    
}
}
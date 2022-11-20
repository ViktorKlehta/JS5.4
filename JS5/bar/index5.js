


//Функция отображения PopUp
function PopUpShow(){
    let stateObj = {
        index: "bar",
    }
    console.log("hi");
    history.pushState(null, 'page 2', 'bar.html');
    console.log("hi2");
    $("#popup1").show(); 
    
    history.pushState(null, null, '/bar.html');anypath
}



function openForm() {
    document.getElementById("popup1").style.display="block";
    history.pushState(null, 'page 2', 'bar/index7.html');
}

function closeForm() {
    history.pushState(null, null, '/bar/index7.html');
}





function open_addForm(){
    document.getElementById("add_form").style.display = "block";
}

function open_modifyForm(){
    document.getElementById("delete_form").style.display = "block";
    document.getElementsById("foodName").innerHTML = document.getElementById("food_itemName");
}

function close_addForm(){
    document.getElementById("add_form").style.display = "none";
}

function close_deleteForm(){
    document.getElementById("delete_form").style.display = "none";
}


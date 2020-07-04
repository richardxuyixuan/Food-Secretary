

$(document).ready( function () {
    $('#foodtable').DataTable(
        {
            "columnDefs": [ {
                "targets": -1,
                "data": null,
                // for some reason, have to keep the default content to one row, otherwise it doesn't work
                "defaultContent": "<img class=\"trash_icon\" src=\"https://cdn0.iconfinder.com/data/icons/green-sustainability/96/recycle_bin-512.png\"><img class=\"cooked_icon\" src=\"https://tse4.mm.bing.net/th?id=OIP.3tJX_G7Erjd3-Lo02Yxo0wHaHa&pid=Api&P=0&w=300&h=300\">"
            } ]
        } 
    );

    var table = $('#foodtable').DataTable();
    
    function dele() {
        $('.trash_icon').on('click', function () {
            
            console.log("clicked");
            table
            .row($(this).parents('tr'))
            .remove()
            .draw();
        } );
    }
    dele();

    
    $('#submit_btn').on( 'click', function () {
        table.row.add( [
            id("fdName").value, 
            id("fdQuantity").value, 
            id("fdUnit").value, 
            id("fdCategory").value, 
            id("fdStorage").value, 
            id("fdExpire").value,
            "edit"
        ] ).draw();

        id("fdName").value = "";
        id("fdQuantity").value = ""; 
        id("fdUnit").value = "";
        id("fdCategory").value = ""; 
        id("fdStorage").value = "";
        id("fdExpire").value = "";
        dele();
    } );
    
    function id(idName) {
        return document.getElementById(idName);
       }

} );




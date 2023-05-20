$(document).ready(function(){

    //Adding a task
    $('#button').click(
        function() {
            var toAdd = $('input[name=ListItem]').val();
            $('ul').append('<li>' + toAdd + '</li>')
        }
    )
        //Remove a task on double click
    $(document).on('dblclick', 'li',function(){
        $(this).toggleClass('remove').fadeOut('slow')

    })

    //Reset input field
    $('input').focus(function(){

        $(this).val(' ');


    })

    //Make the list sortable
    $('#list').sortable();

    //Remove all button
    $('.removeButton').click(function() {
            $('li').toggleClass('remove').fadeOut('slow');
        })



    //Dark Mode switch
    $("#flexSwitchCheckDefault").on("click",function(){
        $("body").toggleClass("dark-mode");
     });


})




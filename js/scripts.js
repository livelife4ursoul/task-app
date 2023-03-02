//Add new item to list
function newItem() {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!');
    } else {
        $('#list').append(li);
        $('#input').val('');
    }


//Crossout an item

    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    //add delete button

    let crossOutButton = $('<crossOutButton></crossOutButton>');

    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    function deleteListItem() {
        li.addClass('delete');
    }

    crossOutButton.on('click', deleteListItem);

    // add reordering of itemes

    $('#list').sortable().draggable;

    // add draggable function  

    // $('#list').draggable();
}
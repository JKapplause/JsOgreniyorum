$(document).ready(function () {
    function addItemToList(e) {
        var addItem = $('#item').val();
        var $li = $('<li>' + '<button class="uibutton"></button>' + addItem + '</li>').appendTo('.shopping');

        $li.find('.uibutton').button({
            icons: {
                primary: "ui-icon-close"
            },
            text: false
        });
        $('#item').val('');
    }
    $('ul.shopping').on('click', '.uibutton', function () {
        $(this).closest('li').remove();
    });

    $('#toadd').click(function (e) {
        addItemToList(e);
    });

    $('#item').keydown(function (e) {
        if (e.which == 13) {
            addItemToList(e);
        }
    });
    $('#clear').click(function (e) {
        $(".shopping").empty();
    });
});

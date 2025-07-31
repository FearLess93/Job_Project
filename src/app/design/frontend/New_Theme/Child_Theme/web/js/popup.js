require(['jquery'], function($) {
    // log to confirm file is running
    console.log('popup.js running');

    $(function() {
        // show the popup
        $('#custom-popup').show();

        // bind click
        $('#close-popup').on('click', function() {
            $('#custom-popup').hide();
        });
    });
});

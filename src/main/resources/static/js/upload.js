$(document).ready(function() {

    // enable fileuploader plugin
    var input = $('input[name="files"]').fileuploader({
        enableApi: true,
        addMore: true
    });
    // get API methods
    window.api = $.fileuploader.getInstance(input);

    console.log('var api = $.fileuploader.getInstance(input);');
    console.info('Here are the API methods:', api);
    console.info('Type in the console for example: api.disable()');

    $('button').click(function(){

        var formData = new FormData();
        api.getFiles().forEach(function(element) {
            console.log(element);
            formData.append('files', element.file);
        });

        $.ajax({
            url: '/uploads',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function success(response) {
                console.log(response);
                response.forEach(function (url) {
                    $('ul#uploadedUrl').append('<li><a href=\'' + url + '\' target=\'_blank\'>' + url + '</a></li>');
                });
            },
            error: function error(_error) {
                console.log(_error);
            }
        });

    });
});
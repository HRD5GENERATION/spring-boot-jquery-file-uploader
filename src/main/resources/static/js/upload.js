$(document).ready(function() {

    // enable fileuploader plugin
    var input = $('input[name="files"]').fileuploader({
    	extensions: ['jpg', 'jpeg', 'png'],
        enableApi: true,
        addMore: true,
        files: [{
		        	name: 'jai.png',
					size: 67287,
					type: 'image/png',
					file: 'http://localhost:9999/images/jai.png'
			  	},
			  	{
					name: '1517286423846.jpg',
					size: 6720,
					type: 'image/jpg',
					file: 'http://localhost:9999/resources/assets/1517286423846.jpg'
			  	}],
    });
    
    // get API methods
    window.api = $.fileuploader.getInstance(input);
    
    console.log('API Document: https://innostudio.de/fileuploader/documentation/');
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
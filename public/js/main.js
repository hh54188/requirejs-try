requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: [
            "lib/jquery-1.10.0.min",
            "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min"
        ]
    },
    shim: {
        jquery: {
            // exports: '$'
        }
        // jquery: 'js/lib/jquery-1.10.0.min.js',
        // handlebars: 'js/lib/handlebars.js'
    }
});

// require(["module/moduleA", "jquery"], function (A, $){
require(["module/moduleA"], function (A){
    console.info(A);
});
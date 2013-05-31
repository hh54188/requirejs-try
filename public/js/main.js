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
            
        }
    }
});

// require(["module/moduleA", "jquery"], function (A, $){
require(["module/moduleA", "module/moduleB", "module/moduleC"], function (A, B){
    console.info(A);
    console.info(B);
});
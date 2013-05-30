module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
              options: {
                baseUrl: "public/js",
                paths: {
                    jquery: "lib/jquery-1.10.0.min" // 不支持main.js中的数组形式，不支持多个地址，不支持url
                },                
                name: "main",
                out: "main-min.js"
              }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs']);

};
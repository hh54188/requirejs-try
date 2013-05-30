module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compileSingle: {
              options: {
                baseUrl: "public/js",
                paths: {
                    jquery: "lib/jquery-1.10.0.min" 
                    // 不支持main.js中的数组形式，不支持多个地址，不支持url
                    // 如果config中使用的是URL，则jquery: 'empty'
                },                
                name: "main",
                out: "build/main-min.js"
              }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['requirejs']);

};
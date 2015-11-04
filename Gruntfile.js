module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({

        // Task configuration
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./public/js",
                    dir: "public/js/tmp",
                    modules: [
                        {
                            "name": "scripts"
                        }
                    ],
                    "paths": {
                        "jquery": "../../bower_components/jquery/dist/jquery.min",
                        "jquery-color": "../../bower_components/jquery-color/jquery.color"
                    }
                }
            }
        },
        less: {
            development: {
                options: {
                    compress: true,  //minifying the result
                },
                files: {
                    "public/css/style.css":"less/bootstrap.less",
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            js_frontend: {
                src: [
                    'bower_components/jquery/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'js/scripts.js'
                ],
                dest: 'public/js/scripts.js',
            },
        },
        uglify: {
            options: {
                mangle: true  // Use false if you want the names of your functions and variables unchanged
            },
            frontend: {
                files: {
                    'public/js/scripts.js': 'public/js/scripts.min.js',
                }
            }
        },
        watch: {
            js_frontend: {
                files: [
                    //watched files
                    'public/js/scripts.js'
                ],
                tasks: ['requirejs'],     //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            },
            less: {
                files: ['less/*.less'],  //watched files
                tasks: ['less'],                          //tasks to run
                options: {
                    livereload: true                        //reloads the browser
                }
            },
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    // Task definition
    grunt.registerTask('default', ['watch']);

};
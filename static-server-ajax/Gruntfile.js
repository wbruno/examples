module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*Minified JavaScript of <%= pkg.name %> */\n'
            },
            my_target: {
                files: {
                    'public/javascript/all.js': ['src/javascript/xhr.js', 'src/javascript/all.js']
                }
            }
        },
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* \n' +
                        '<%= pkg.name %> \n' +
                        '*/'
                },
                files: {
                    'public/css/main.css': ['src/css/main.css']
                }
            }
        },
        watch: {
            css: {
                files: 'src/css/*.css',
                tasks: ['cssmin'],
                options: {
                    livereload: true,
                }
            } 
        }

    });
 
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'cssmin']);

};

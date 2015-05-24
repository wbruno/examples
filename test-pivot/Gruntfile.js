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
                    'javascript/all.js': ['src/javascript/slideshow.js', 'src/javascript/main.js']
                }
            }
        },
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* \n' +
                        'Minified CSS of <%= pkg.name %> \n' +
                        '*/'
                },
                files: {
                    'css/all.css': ['src/css/normaset.css', 'src/css/main.css', 'src/css/form.css', 'src/css/carrossel.css']
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

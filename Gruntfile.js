'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },
    copy: {
      dev: {
        expand: true,
        cwd: 'app/',
        src: ['*.html', 'css/*.css', 'css/*.css.map', 'img/*.jpg', 'js/*.js',
        'fonts/**/*.eot', 'fonts/**/*.svg', 'fonts/**/*.ttf', 'fonts/**/*.woff'],
        dest: 'build/',
        filter: 'isFile'
      }
    },
    sass: {
        dev: {
            files: {
                'app/styles.css': 'app/sass/styles.scss'
            }
        }
    },
    browserify: {
      dev: {
        options: {
          transform: ['debowerify'],
          debug: true
        },
        src: ['app/*.js'],
        dest: 'build/bundle.js'
      }
    }
  });
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev', 'sass:dev']);
};

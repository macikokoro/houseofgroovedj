'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');

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
        src: ['*.html', 'css/*.css', 'img/*.jpg', 'js/*.js', 'fonts/**/*.eot', 'fonts/**/*.svg', 'fonts/**/*.ttf', 'fonts/**/*.woff'],
        dest: 'build/',
        filter: 'isFile'
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
  grunt.registerTask('build:dev', ['clean:dev', 'browserify:dev', 'copy:dev']);
};

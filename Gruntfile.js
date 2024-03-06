module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: {
          'style.css': ['style.css']
        }
      }
    },
    watch: {
      styles: {
        files: ['*.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};

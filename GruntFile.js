module.exports = function(grunt) {
	//grunt.loadNpmTasks('grunt-sass');
	//grunt.loadNpmTasks('grunt-contrib-concat');

	//All installed grunt modules  are loaded here
	require('load-grunt-tasks')(grunt);

	var config = grunt.file.readYAML('GruntFile.yml');

	grunt.initConfig({
		sass: {
			dist: {
				src: config.scssDir + 'style.scss',
				dest: config.cssDir + 'style.css'
			}
		},

		concat: {
			dist: {
				src: config.jsSrcDir + '*.js',
				dest: config.jsConcatDir + 'app.js'
			}
		}
	});

	grunt.registerTask('default', [
		'sass',
		'concat'
	]);
};
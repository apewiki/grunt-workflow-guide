module.exports = function(grunt) {
	//grunt.loadNpmTasks('grunt-sass');
	//grunt.loadNpmTasks('grunt-contrib-concat');

	//All installed grunt modules  are loaded here
	require('load-grunt-tasks')(grunt);
	

	var config = grunt.file.readYAML('GruntFile.yml');
	require('./grunt_tasks/sass.js')(grunt, config);
	require('./grunt_tasks/javascript.js')(grunt, config);


	grunt.registerTask('default', [
		'sass',
		'concat',
		'jshint',
		'watch'
	]);
};
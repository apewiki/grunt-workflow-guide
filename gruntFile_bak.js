/* grunt is configuration file, gulp has more functionalities
   grunt is a large json file, gulp is javascript
   more packages in grunt
   gulp is faster than grunt
   there are unit test plugins in grunt as well as gulp
 */
module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	//grunt.loadNpmTasks('grunt-sass');
	//grunt.loadNpmTasks('grunt-contrib-concat');

	var config = grunt.file.readYAML('Gruntconfig.')

	grunt.initConfig({
		sass: {
			dist: {
				src: config.scssDir + 'style/scss',
				dest: config.cssDir + 'css/style.css'
			}
		},
		concat: {
			dist: {
				src: 'src/js/*.js',
				//src: ['src/js/script1.js', 'src/js/script2.js'],
				dest: 'dist/js/app.js'
			}
		},
		jshint: {
			options:[
				"eqeqeq": true
			],
			all: [
				'gruntfile.js',
				config.jsSrcDir + '*.js'
			]
		},
		watch: {
			sass:{
				files: config.scssDir+'**/*.scss'
			}
		}
	});


	grunt.registerTask('default', [
		'sass',
		'concat'
	]);
};

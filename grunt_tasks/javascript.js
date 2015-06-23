module.exports = function(grunt, config) {
	grunt.config.merge({
		concat: {
			dist: {
				src: config.jsSrcDir + '*.js',
				dest: config.jsConcatDir + 'app.js'
			}
		},

		jshint: {
			options: {
				//prohibit use of '=='
				'eqeqeq': true
			},
			all: [
					'GruntFile.js',
					config.jsSrcDir + '*.js'
			],
		},

		watch: {
			js: {
				files: "<%= concat.dist.src %>",
				tasks: [
					'jshint',
					'concat'
				]
			}
		},
	});
};
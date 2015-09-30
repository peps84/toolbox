	module.exports = function (grunt){

	grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),



/////////////////////////////////////////// Hashing

	hashres: {
		options: {
			encoding: 'utf8',
			fileNameFormat: '${hash}.${ext}',
			renameFiles: true
		},
		prod: {
			src: [
				// WARNING: These files will be renamed!
				'*.{png,jpg,gif}'
			],
			dest: '/',
		}
	},

/////////////////////////////////////////// Uploading

	ftp_push: {
		your_target: {
			options: {
				username: '',
				password: '!',
				host: 'ftp.net',
				dest: '/friday_funnies',
				port: 21,
				debug: true,
			},
			files: [
				{
					expand: true,
					cwd: '.',
					src: ['*.{png,jpg,gif}']
				}
			]
		}
	}
});
	grunt.loadNpmTasks('grunt-hashres');
	grunt.loadNpmTasks('grunt-ftp-push');

	/////////////////////////////////////////// Default builds the ad from local tamplates and updates attributes from JSON files
	grunt.registerTask('default', [
		'hashres:prod',
		'ftp_push'
	]);
};

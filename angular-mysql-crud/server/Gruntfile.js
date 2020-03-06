module.exports = function(grunt) {
    grunt.initConfig({	
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            build : {
                tsconfig: './tsconfig.json',
                options: { fast: 'never' }
            },
            serve : {
                tsconfig: './tsconfig.json',
                watch: '.',
                options: { fast: 'never' }
            },
        },   
        nodemon: {
            serve: {
                script: 'build/index.js',
                options: {
                    nodeArgs: ['--require', 'source-map-support/register'],
                    watch: ['./build/*'],
                    ext: 'js',
                    delay: 1000
              }
            }
        }, 
        concurrent: {
            serve: ['ts:serve', 'nodemon:serve'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    // Load the plugin that provides the "" task.
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    // Tasks
    grunt.registerTask('refresh_token', ['shell:refreshToken']);

    // Commands
    grunt.registerTask('serve', ['concurrent:serve']);
}
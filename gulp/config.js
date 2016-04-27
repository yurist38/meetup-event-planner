var config = {
    paths: {
        js: './assets/js/',
        scss: './assets/scss/',
        distJs: './public/dist/js/',
        distCss: './public/dist/css/',
        bower: './bower_components/'
    },
    tasks: [
        'serveJs',
        'serveCss',
        'watch',
        'polymer'
    ]
};

module.exports = config;

/* Configuration Variables */
module.exports = {
  path: {
    initial: './src_init',
    base: './src',
    assets: '/assets',
    src: [
      './src',
      './src/m'
    ],
    build: [
      './build',
      './build/m'
    ],
    tmp: [
      './.tmp',
      './.tmp/m'
    ],
    html: '',
    js: '/js',
    scss: '/scss',
    css: '/css',
    images: '/images',
    font: '/fonts',
    swf: '/swf',
    depth: "/**/**/**/**/**/**"
  },
  extension: {
    html: '/*.html',
    js: '/*.js',
    scss: '/*.scss',
    css: '/*.css',
    images: '/*'
  },
  setBasePath: function(folder) {
    this.path.src[0] = './' + folder + '';
    this.path.src[1] = './' + folder + '/m';
  },
  getFullPath: function(folder, fileExt) {
    return [
      folder[0] + this.path[fileExt] + '/**' + this.extension[fileExt],
      folder[1] + this.path[fileExt] + '/**' + this.extension[fileExt]
    ];
  }
};

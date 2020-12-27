module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Kai\'s Blog'
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kxw07.github.io/'
    : '/'
}

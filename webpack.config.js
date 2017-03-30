module.exports = {
  entry: './src/rxjs-example/main.ts',
  output: {
    filename: './src/rxjs-example/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader?configFileName=./src/tsconfig.app.json'
      }
    ]
  }
};

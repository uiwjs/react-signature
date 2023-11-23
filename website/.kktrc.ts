import webpack from 'webpack';
import { WebpackConfiguration, LoaderConfOptions } from 'kkt';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import pkg from './package.json';

export default (conf: WebpackConfiguration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = mdCodeModulesLoader(conf);
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );

  conf.module!.exprContextCritical = false;
  /**
   * fix failed to parse source map issue
   * https://github.com/kktjs/kkt/issues/446
   */
  conf.ignoreWarnings = [{ module: /node_modules[\\/]parse5[\\/]/ }];
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
          refractor: {
            test: /[\\/]node_modules[\\/](refractor)[\\/]/,
            name: 'refractor-prismjs-vendor',
            chunks: 'all',
          },
        },
      },
    };
  }

  return conf;
};

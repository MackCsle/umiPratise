import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/api': {
      target: 'http://public-api-v1.aspirantzhang.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  // plugins: [
  //   ['babel-plugin-import', {
  //     libraryName: '@alifd/next',
  //     style: true
  //   }]
  // ]
});

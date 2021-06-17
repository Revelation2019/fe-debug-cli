const path = require('path');
// tsconfig.json配置路径映射仅仅在编译时生效，在运行时不会起作用，因此这里需要引入module-alias库帮助在运行时解析路径映射
const moduleAlias = require('module-alias');

(function run() {
  moduleAlias.addAlias('@src', path.resolve(__dirname, './dist'));
  require('./dist/app');
})();
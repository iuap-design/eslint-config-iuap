# eslint-config
### ESlint配置

依赖 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb),具体规范可参照[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)。（[中文版本点这里](https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md)）

并根据目前项目es5/6混合使用情况，做以下调整：

* 取消es6配置
* 字符串使用双引号

目前此规范为基本版本，后续会根据项目中使用反馈，对`rule`进行调整。

### 使用方法

* 安装

  ```shell
  npm install --save-dev eslint-config-iuap
  ```

* 根目录创建配置文件`.eslintrc.json`

  ```json
  {
      "extends": [
          "eslint-config-iuap"
      ],
      "rules": {
          "comma-dangle": 0
      }
  }
  ```

* 使用：以`gulp`举例，创建`gulpfile.js`

  ```
  var gulp = require('gulp');
  var eslint = require('gulp-eslint');

  gulp.task('lint', function() {
  	return gulp.src('./test/*.js')
  		.pipe(eslint())
  		.pipe(eslint.format());
  });
  ```

  执行`gulp lint`可查看对应`js`文件的报错信息

### 待补充

* eslint在其他环境中配置
* eslint配置完善
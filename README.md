## Postcss-2rem

### Usage

#### Gulp
```js
var gulp = require('gulp');
var postcss = require('postcss');
var toRem = require('2rem');

gulp.task('css', function() {
  var processors = [
    toRem({
        base: 100,
        mini: 1
    })];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});
```

### Options
+ `base` number 默认值为50
+ `mini` number 小于等于改值的px不转换

### Tips
如果css中定义了变量，确保使用改模块前已经有其他模块对变量进行转换

## LICENSE

MIT.
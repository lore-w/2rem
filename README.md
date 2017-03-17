## 2rem

2rem is a postcss plugin that convert `px` to `rem` in your css

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

### Input
```css
#demo {
    width: 100px;
    height: 200px;
    border: 1px solid #fafafa;
}
```
### Output
```css
#demo {
    width: 1rem;
    height: 2rem;
    border: 1px solid #fafafa;
}
```
### Options
+ `base` number default: 50
+ `mini` number default: 1 (if one `px` value `<=` mini you set will not to be converted)

## LICENSE

MIT.
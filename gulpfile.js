const { dest, series, src, watch } = require("gulp");
const minifyCSS = require("gulp-clean-css");

const sass = require("gulp-sass");
      sass.compiler = require("node-sass");

const styles = () => {
    return src("scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(minifyCSS())
        .pipe(dest("css"));
};

const watchStyles = () => watch("scss/**/*.scss", styles);

module.exports = {
    default: series(styles, watchStyles),
    sass: styles,
    watch: watchStyles
};
const { dest, series, src } = require("gulp");
const cleanCSS = require("gulp-clean-css");

const sass = require("gulp-sass");
      sass.compiler = require("node-sass");

const styles = () => {
    return src("scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(dest("css"));
};

exports.default = series(styles);
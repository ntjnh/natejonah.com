const { dest, series, src } = require("gulp");

const sass = require("gulp-sass");
      sass.compiler = require("node-sass");

const styles = () => {
    return src("scss/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("css"));
};

exports.default = series(styles);
const { dest, series, src, watch } = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const cssmin = require("gulp-clean-css");

const styles = () => {
    return src("scss/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cssmin())
        .pipe(dest("css"));
};

const watchSass = () => watch("./scss/**/*.scss", styles);

module.exports = {
    default: series(styles, watchSass),
    sass: styles,
    watch: watchSass
};
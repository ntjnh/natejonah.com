const { dest, series, src, watch } = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const cssmin = require("gulp-clean-css");
const browserSync = require("browser-sync");

const styles = () => {
    return src("scss/style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cssmin())
        .pipe(dest("css"))
        .pipe(browserSync.stream());
};

const serve = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    watch("scss/**/*.scss", styles);
    watch("index.html").on("change", browserSync.reload);
};

const watchSass = () => watch("./scss/**/*.scss", styles);

module.exports = {
    default: series(styles, watchSass),
    sass: styles,
    watch: watchSass,
    serve: serve
};
const { src, dest } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

exports.minify = () => src(["themes/*.css", "!themes/*.min.css"])
    .pipe(cleanCSS())
    .pipe(rename({suffix: ".min"}))
    .pipe(dest("themes/"));
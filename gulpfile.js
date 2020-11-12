


let { src, dest } = require('gulp'),
	fs = require('fs'),
	gulp = require('gulp'),
	browsersync = require("browser-sync").create(),
	fileinclude = require('gulp-file-include'),
	concat = require('gulp-concat'),
	rename = require("gulp-rename"),
	del = require("del"),
	scss = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	group_media = require("gulp-group-css-media-queries"),
	clean_css = require("gulp-clean-css"),
	cssmin = require('gulp-cssmin'),
	uglify = require("gulp-uglify-es").default,
	imagemin = require("gulp-imagemin"),
	// webp = require('gulp-webp'),
	// webphtml = require('gulp-webp-html'),
	// webpcss = require("gulp-webpcss"),
	svgSprite = require('gulp-svg-sprite'),
	ttf2woff = require('gulp-ttf2woff'),
	ttf2woff2 = require('gulp-ttf2woff2');

let project_folder = require("path").basename(__dirname),
	source_folder = "source";

let path = {
	build: {
		html: project_folder + "/",
		css: project_folder + "/css/",
		js: project_folder + "/js/",
		img: project_folder + "/images/",
		fonts: project_folder + "/fonts/",
	},
	src: {
		html: [source_folder + "/views/pages/*.html", "!" + source_folder + "/**/_*.html"],
		css: source_folder + "/styles/main.scss",
		js: source_folder + "/js/main.js",
		img: source_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: source_folder + "/fonts/*.ttf",
	},
	watch: {
		html: source_folder + "/views/**/*.html",
		css: source_folder + "/styles/**/*.scss",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}"
	},
	clean: "./" + project_folder + "/"
}

function browserSync(params) {
	browsersync.init({
		server: {
			baseDir: "./" + project_folder + "/"
		},
		port: 3000,
		notify: false
	})
}

function html() {
	return src(path.src.html)
		.pipe(fileinclude())
		// .pipe(webphtml())
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream())
}

function css() {
	return src(path.src.css)
		.pipe(
			scss({
				outputStyle: "expanded"
			})
		)
		.pipe(
			group_media()
		)
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 5 versions"],
				cascade: true
			})
		)
		// .pipe(webpcss())
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream())
}

function cssLibs() {
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		'node_modules/swiper/swiper-bundle.css',
		'node_modules/overlayscrollbars/css/OverlayScrollbars.css',
		'node_modules/rateyo/src/jquery.rateyo.css'
	])
		.pipe(concat('libs.min.css'))
		.pipe(cssmin())
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream())
}

function js() {
	return src(path.src.js)
		.pipe(fileinclude())
		.pipe(dest(path.build.js))
		.pipe(
			uglify()
		)
		.pipe(
			rename({
				extname: ".min.js"
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream())
}

function jsLibs() {
	return gulp.src([
		'node_modules/swiper/swiper-bundle.js',
		'node_modules/overlayscrollbars/js/jquery.OverlayScrollbars.js',
		'node_modules/rateyo/src/jquery.rateyo.js',
		'node_modules/mixitup/dist/mixitup.js'
	])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream())
}

function images() {
	return src(path.src.img)
		// .pipe(
		// 	webp({
		// 		quality: 70
		// 	})
		// )
		// .pipe(dest(path.build.img))
		.pipe(src(path.src.img))
		.pipe(
			imagemin({
				progressive: true,
				svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3 // 0 to 7
			})
		)
		.pipe(dest(path.build.img))
		.pipe(browsersync.stream())
}

function fonts() {
	src(path.src.fonts)
		.pipe(dest(path.build.fonts));
	src(path.src.fonts)
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts))
		.pipe(browsersync.stream());
}

gulp.task('svgSprite', function () {
	return gulp.src([source_folder + '/iconsprite/*.svg'])
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: "../icons/icons.svg",  //sprite file name
					example: true
				}
			},
		}
		))
		.pipe(dest(path.build.img))
})

function watchFiles(params) {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.img], images);
}

function clean(params) {
	return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, jsLibs, css, cssLibs, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

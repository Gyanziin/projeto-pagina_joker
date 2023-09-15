// antes de tudo vc tem que chamar os pugglis para essa pagina, configuralos e somente depois executar as funções
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')


function styles() {
    // é aonde ele vai pegar os codigos iniciais para mandar pro main.css
    return gulp.src('./src/styles/*.scss')
    // antes de lançar no css ele vai ser comprimido
        .pipe(sass({ outputStyle: 'compressed'}))
        // aqui é ande é mandado para o css (dest-destino)
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    // é aonde ele vai pegar os codigos iniciais para mandar pro main.css
    return gulp.src('./src/images/*')
    // antes de lançar no css ele vai ser comprimido
        .pipe(imagemin())
        // aqui é ande é mandado para o css (dest-destino)
        .pipe(gulp.dest('./dist/images'));
}

// aqui exporta a função e manda pro npm run gulp
exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
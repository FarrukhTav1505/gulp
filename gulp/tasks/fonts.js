import fonter from 'gulp-fonter'  /* преобразует из otf в ttf */



export const otfToTtf = () => {
    // ищем файлы с форматом ttf
    return app.gulp.src(`${app.path.folder}/fonts/*.otf`, {}) /* обращение к папке с исходниками */
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "FONTS",
        message: "Error: <%= error.message %>"
    })))  /* обработка ошибок */
    
    // конвертируем в формате otf
    .pipe(fonter({
        formats: ['ttf']
    }))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.folder}/fonts/*.ttf`, {})
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "FONTS",
        message: "Error: <%= error.message %>"
    })))  /* обработка ошибок */
    .pipe(fonter({
        formats: ['woff']
    }))
    .pipe(app.gulp.dest(app.path.build.fonts))
}
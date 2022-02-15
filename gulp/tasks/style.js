import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries'  /* группировка meida запросов */
import autoPrefixer from 'gulp-autoprefixer';                        /* добавления префиксов */
import rename from 'gulp-rename'                                /* изменения названия */

const sass = gulpSass(dartSass);

export const style= () =>{
    return app.gulp.src(app.path.src.style, {sourcemaps: true})  /* sourcemaps = нужен чтобы видеть ошибки. Карты исходников*/
    .pipe(app.plugins.plumber(app.plugins.notify({
        title: "CSS",
        message: "Error: <%= error.message %>"
    })))
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserlist: ['least 3 version'], /* Поддержка версий браузера. Последнии 3 версии */
        cascade: true
    }))
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.style))
    .pipe(app.plugins.browsersync.stream())
}

    
       
            
                
                   
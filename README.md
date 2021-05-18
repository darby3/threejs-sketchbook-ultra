# Ready Set Fractal

Just a project to help quick start development using [Fractal](https://fractal.build/), as driven by npm scripts.

## Getting started

* Edit fractal.js to set a project title.
* nvm use
* npm install
* npm run dev

## What's this good for?

Ideally it's great for setting up a pattern library _and_ for setting up iterable sketchbooks. I'm slightly concerned my focus for this repo has shifted more to the sketchbook side, as I set those up far more regularly than I do pattern libraries. I'll see what happens the next time I try to set up a pattern library, though.

## Notes

* favicon.ico is a placeholder because, for some reason, for me, when fractal looks for a file, and can't find it, it crashes and burns.
* ./public/global.css will fill itself up on the first run.
* There's a couple js scripts in the `package.json` file. The "basic" versions justc copy components over; the others run the files through shell scripts to browsersify/babelify them. For a pattern library, or a sketchbook, those are probably unnecessary, but they're here for reference's sake, because if I ever do need them again, I don't want to figure out how to do all that again. (I should convert them to node scripts, but.)

## Thanks

All props and thanks to Rachel Andrew and [this post on Smashing Magazine](https://www.smashingmagazine.com/2018/07/pattern-library-first-css/); this repo is basically just the results of that, tweaked to taste, and shifted to use npm scripts instead of Gulp.


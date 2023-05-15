# Phaser 3 Tutorial Project

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm run watch` | Build project and open web server running project, watching for changes |
| `npm run dev` | Builds project and open web server, but do not watch for changes |
| `npm run build` | Builds code bundle with production settings (minification, no source maps, etc..) |

## Writing Code

After cloning the repo, run `npm install` from your project directory. Then, you can start the local development
server by running `npm run watch`. The first time you run this you should see the following demo run:

After starting the development server with `npm run watch`, you can edit any files in the `src` folder
and Rollup will automatically recompile and reload your server (available at `http://localhost:10001`
by default).

## Configuring Rollup

* Edit the file `rollup.config.dev.js` to edit the development build.
* Edit the file `rollup.config.dist.js` to edit the distribution build.

## Versions Used

* Phaser 3.60
* TypeScript 5.0.3
* Rollup 3.20.2
* Rollup Plugins:
  * @rollup/plugin-commonjs 24.0.1
  * @rollup/plugin-node-resolve 15.0.2
  * @rollup/plugin-replace 5.0.2
  * @rollup/plugin-terser 0.4.0
  * @rollup/plugin-typescript 11.1.0
  * rollup-plugin-serve 2.0.2

## Rollup Template
Rollup Template used from Richard Davey
https://github.com/photonstorm/phaser3-typescript-project-template

Projekt Based on the Modern Javascript Phaser 3 Tutorial from Tommy Leung
https://blog.ourcade.co/posts/2020/make-first-phaser-3-game-modern-javascript-part1/
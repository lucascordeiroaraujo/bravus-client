const withPlugins = require("next-compose-plugins");

const withTypescript = require("@zeit/next-typescript");

const withImages = require("next-images");

const withFonts = require("next-fonts");

const withCSS = require("@zeit/next-css");

module.exports = withPlugins([
  [withTypescript],
  [withImages],
  [withFonts],
  [withCSS]
]);

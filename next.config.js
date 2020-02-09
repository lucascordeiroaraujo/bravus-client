const withPlugins = require("next-compose-plugins");

const withImages = require("next-images");

const withFonts = require("next-fonts");

const withCSS = require("@zeit/next-css");

const nextConfig = {
  webpack: config => {
    config.node = {
      fs: "empty"
    };
    return config;
  }
};

module.exports = withPlugins(
  [[withImages], [withFonts], [withCSS]],
  nextConfig
);

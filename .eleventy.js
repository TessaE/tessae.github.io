module.exports = function(eleventyConfig) {
  // Copy css over to `_site/css`
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy fonts over to `_site/fonts`
  eleventyConfig.addPassthroughCopy("src/fonts/RibeyeMarrow-Regular.ttf");
  eleventyConfig.addPassthroughCopy("src/fonts/Raleway-Regular.ttf");
  eleventyConfig.addPassthroughCopy("src/fonts/FiraMono-Regular.ttf");
  eleventyConfig.addPassthroughCopy("src/fonts/recoleta-regular.otf");

  // Copy images over to `_site/images`
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy js over to `_site/js`
  eleventyConfig.addPassthroughCopy("src/js");

  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
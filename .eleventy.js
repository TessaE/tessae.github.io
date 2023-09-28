module.exports = function(eleventyConfig) {
  // Copy css over to `_site/css`
  eleventyConfig.addPassthroughCopy("src/css/reset.css");
  eleventyConfig.addPassthroughCopy("src/css/style.css");

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
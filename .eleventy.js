module.exports = function(eleventyConfig) {
  // Copy css over to `_site/css`
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy fonts over to `_site/fonts`
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Copy images over to `_site/images`
  eleventyConfig.addPassthroughCopy("src/images");

  // Copy js over to `_site/js`
  eleventyConfig.addPassthroughCopy("src/js");

  // Copy favicon over to `root
  eleventyConfig.addPassthroughCopy({"src/images/favicons/favicon.ico": "favicon.ico"});

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
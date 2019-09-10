const moment = require('moment');
var util = require('util');
var md = require('markdown-it')();

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images')

  eleventyConfig.addNunjucksFilter("cuteDate", (rawDate) => {
    return moment(rawDate).format("ddd D MMM, YYYY");
  });

  eleventyConfig.addNunjucksFilter("markdown", (rawText) => {
    return md.render( rawText );
  });

  eleventyConfig.addNunjucksFilter("markdownInline", (rawText) => {
    return md.md.renderInline( rawText );
  });

  

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}

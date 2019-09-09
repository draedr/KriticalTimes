const moment = require('moment');
var util = require('util');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images')

  eleventyConfig.addNunjucksFilter("cuteDate", (rawDate) => {
    return moment(rawDate).format("ddd D MMM, YYYY");
  });

  eleventyConfig.addNunjucksFilter("dumpCircular", (myObj) => {
    return util.inspect(myObj);
  });

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  }
}

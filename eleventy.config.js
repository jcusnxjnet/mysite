import { DateTime } from "luxon";

export default function(eleventyConfig) {
	
	// method creates a file/folder copy in the output directory
	eleventyConfig.addPassthroughCopy("views/assets/css");
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");

	// FILTERS
	eleventyConfig.addFilter("postDate", (dateObj, format = "DDD", locale = "en-GB") => {
		return DateTime.fromJSDate(dateObj).setLocale(locale).toFormat(format);
	  });

	// EXCERPTS
	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		// Optional, default is "---"
		excerpt_separator: "<!-- excerpt -->",
	});

};

export const config = {
    dir: {
      input: "views",  
      layouts: "_layouts",
      output: "dist"
    },

	markdownTemplateEngine: "njk",
  	htmlTemplateEngine: "njk",
  };
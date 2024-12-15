import { DateTime } from "luxon";
import 'dotenv/config';

export default function (eleventyConfig) {

  // method creates a file/folder copy in the output directory
  eleventyConfig.addPassthroughCopy("views/assets/css");
  eleventyConfig.addPassthroughCopy("views/assets/img");
  eleventyConfig.addPassthroughCopy("views/assets/js");

  // SHORTCODES
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // FILTERS

  // Post Date
  eleventyConfig.addFilter("postDate", (dateObj, format = "LLL d") => {
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Date (to format string dates fetched via API)
  eleventyConfig.addFilter("date", function (dateVal, options = { year: "numeric", month: "short", day: "numeric" }) {
    var theDate = new Date(dateVal);
    const locale = "en-GB"; // Default locale
    return theDate.toLocaleDateString(locale, options);
});

  //withinDateRange (for daily running workouts)
  eleventyConfig.addFilter("withinDateRange", (dateStr, startDateStr, endDateStr) => {
    const date = new Date(dateStr);
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    return date >= startDate && date <= endDate;
  });

  // COLLECTIONS
  // Posts by year
  eleventyConfig.addCollection("postsByYear", (collection) => {
    const posts = collection.getFilteredByTag('post').reverse();
    const years = posts.map(post => post.date.getFullYear());
    const uniqueYears = [...new Set(years)];

    const postsByYear = uniqueYears.reduce((prev, year) => {
      const filteredPosts = posts.filter(post => post.date.getFullYear() === year);

      return [
        ...prev,
        [year, filteredPosts]
      ]
    }, []);

    return postsByYear;
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
import remark from "remark";
import html from "remark-html";

// process markdown to html and return
const processMarkdown = async (markdown) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

export default processMarkdown;

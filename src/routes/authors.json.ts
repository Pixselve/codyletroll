import pages from "./_pages";

export function get({ params }) {
  let result = [];
  for (const pagesKey in pages) {
    result = [...result, { ...pages[pagesKey], author: pagesKey }];
  }
  return {
    body: result
  };
}

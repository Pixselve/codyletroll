import pages from "./_pages";

export function get({ params }) {
  let result = [];
  for (let pagesKey in pages) {
    result = [...result, { ...pages[pagesKey], author: pagesKey }];
  }
  return {
    body: result
  };
}

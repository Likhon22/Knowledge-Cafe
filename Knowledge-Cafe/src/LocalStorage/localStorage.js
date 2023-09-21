const gettingItem = () => {
  const itemString = localStorage.getItem("blog");
  if (itemString) {
    return JSON.parse(itemString);
  }
  return [];
};
const setItem = (blogItem) => {
  const itemStringified = JSON.stringify(blogItem);
  localStorage.setItem("blog", itemStringified);
};
const addToLS = (blogId) => {
  const item = gettingItem();
  item.push(blogId);
  setItem(item);
};
export { gettingItem, addToLS, setItem };

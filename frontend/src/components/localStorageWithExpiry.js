// localStorageWithExpiry.js

export const setItemWithExpiry = (key, value, ttl) => {
    const now = new Date();
  
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  };
  
  export const getItemWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
  
    // If the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
  
    const item = JSON.parse(itemStr);
    const now = new Date();
  
    // Compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage and return null
      localStorage.removeItem(key);
      return null;
    }
  
    return item.value;
  };
  
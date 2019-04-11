module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  // console.log(item);
  if (item.enhancement < 20) {
    let newItem = {
      name: item.name,
      enhancement: item.enhancement + 1,
      durability: item.durability
    }
    return newItem;
  }
  
}

function fail(item) {
  let newItem = {
    name: item.name,
    enhancement: item.enhancement,
    durability: item.durability
  }
  if (item.enhancement < 15) {
    newItem.durability =  item.durability - 5
  }
  else if (item.enhancement >= 15 && item.enhancement < 16) {
    newItem.durability = item.durability - 10
  }
  else {
    newItem.durability = item.durability -  1
  }
  return newItem;
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}

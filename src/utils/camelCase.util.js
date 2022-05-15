function convertToCamelCase(data) {
  Object.keys(data).forEach(key => {
    let snakeValue = data[key];

    if(typeof data[key] === 'object'){
      snakeValue= convertToCamelCase(data[key]);
    }
    const camelKey = key.split('_').map((e, i) => {
      if (i === 0) return e;
      return e[0].toUpperCase() + e.slice(1);
    }).join('');

    if (camelKey !== key) {
      data[camelKey] = snakeValue;
      data[key] = undefined;
    }
  });

  return data;
}

module.exports = convertToCamelCase;
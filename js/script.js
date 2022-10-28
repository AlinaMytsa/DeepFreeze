'use strict';

let user = {
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: {
      a1: 1,
      b1: 2,
      c1: 3,
      d1: {
        a2: 3,
        b2: 3,
        c2: 3,
      }
    },
  }
}

function deepFreeze(obj) {
  const objectProperties = Object.keys(obj)
  for (let key of objectProperties) {
    const value = obj[key];

    if (typeof value && value === 'object') {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);

}
deepFreeze(user);
console.log(Object.isFrozen(user));



// ReturnType<typeof setTimeout> : Obtain the return type of a function type

/**
 * ignore subsequent events then execute
 */
function debounce(func, delay: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

/**
 *  execute at a maximum of once per delay
 */
function throttle(func, delay: number) {
  let wait: boolean = false;

  return (...args) => {
    if (wait) {
      return;
    }

    func(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
}

/**
 * execute only once
 */
function once(func) {
  let ran: boolean = false;
  let result: unknown;
  return function () {
    if (ran) return result;

    result = func.apply(this, arguments);
    ran = true;
    return result;
  };
}

/**
 * cache the operation
 */
function memoize(func) {
  const cache: Map<string, unknown> = new Map();

  return function () {
    // return cache if exists
    const key: string = JSON.stringify(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }

    // cache
    const result: unknown = func.apply(this, arguments);
    cache.set(key, result);
    return result;
  };
}

// advance js
function curry(func, arity = func.length) {
  return function curried(...args) {
    if (args.length >= arity) return func(...args);
    return function (...moreArgs) {
      return curried(...args, ...moreArgs);
    };
  };
}

function partial(func, ...args) {
  return function partiallyApplied(...moreArgs) {
    return func(...args, ...moreArgs);
  };
}


// utilities - pipe 2 or more functions (just chain it)
function pipe(...funcs) {
  return function piped(...args) {
    return funcs.reduce(
      (result, func) => [func.call(this, ...result)],
      args
    )[0];
  };
}

// same as pipe but reversed
function compose(...funcs) {
  return function composed(...args) {
    return funcs.reduceRight(
      (result, func) => [func.call(this, ...result)],
      args
    )[0];
  };
}

// same as laravel pluck

function pick(obj, keys) {
  return keys.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

function omit(obj, keys) {
  return Object.keys(obj)
    .filter((key) => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}

function zip(...arrays) {
  const maxLength = Math.max(...arrays.map((array) => array.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, j) => arrays[j][i]);
  });
}

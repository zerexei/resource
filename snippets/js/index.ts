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

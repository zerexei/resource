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


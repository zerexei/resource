// break up camel casing, using a space between words.
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

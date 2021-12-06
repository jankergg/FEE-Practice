// implement immer.produce function
/**
 *  e.g:
 *  const state = [
 * 		{name: 'aaaa'},
 *      {name: 'bbbbb}
 * ]
 *  const produce = (state, (draft)=>{
 * 		draft[0].name = 'xxxx';
 * 		draft.push({name: 'hello'})
 * })
 */

const produce = (state, reducer) => {
  const prxHandler = {
    get: function (target, prop, receiver) {
      console.log(target, prop, receiver);
      return "hello";
    },
    set: function (target, prop, value) {
      console.log(target, prop, value);
      return "world";
    },
  };
  let new_state = typeof state === "object" ? (Array.isArray(state) ? [] : {}) : null;
  const prx = new Proxy(base, prxHandler);
  return prx;
};

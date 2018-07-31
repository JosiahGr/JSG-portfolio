export default store => next => (action) => {
  const result = next(action);
  const state = store.getState();

  // Disabled lint because airbnb lintr does not allow like for...in loop itterating over the
  // entire prototype chain. From what I can tell, this is necessary for this middleware. 

  for (const key in state) { //eslint-disable-line
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      localStorage[key] = JSON.stringify(state[key]);
    }
  }
  return result;
};

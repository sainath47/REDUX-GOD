// WE NEED A REDUCER (ROOTREDUCER)
//WE NEED SOME REDUX STORE
// WE NEED SOME WAY OF CHANGING THE STATE

const initialState = {
  count: 0,
};

function rootReducer(state = initialState, action) {
    let newState = Object.assign({}, state);
  switch (action.type) {
    case "INCREMENT":
      // state.count++
      // return state
      newState.count++;
      return newState;
    case "DECREMENT":
      // state.count--
      // return state
      newState.count--;
      return newState;
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);

$(document).ready(function () {
  $("#increment").on("click", function () {
    store.dispatch({ type: "INCREMENT" });
    let currentState = store.getState();
    $("#counter").text(currentState.count);
    //dispatch some action to increment the count!
  });
  $("#decrement").on("click", function () {
    //dispatch some action to decrement the count!

    store.dispatch({ type: "DECREMENT" });
    let currentState = store.getState();
    $("#counter").text(currentState.count);
  });
});

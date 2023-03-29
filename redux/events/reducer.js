const INIT_STATE = {
  allEvents: [],
  item: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_ALL_EVENTS':
      return {...state, allEvents: action.payload};
    case 'SET_ITEM':
      return {...state, item: action.payload};

    default:
      return {...state};
  }
};

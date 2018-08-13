const userReducer = (
  state = {
    _id: null,
    name: null,
    email: null
  },
  action
) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        _id: action.user._id,
        name: action.user.name,
        email: action.user.email,
        photo: action.user.photo
      };
    case "REMOVE_USER":
      return {
        ...state,
        _id: null,
        name: null,
        email: null
      };
    default:
      return state;
  }
};
export default userReducer;

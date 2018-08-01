import * as ActionTypes from "./ActionTypes";
const baseUrl = "http://localhost:5000/";

export const addPosts = posts => ({
  type: ActionTypes.ADD_POST,
  data: posts
});

export const fetchPosts = () => dispatch => {
  return fetch(baseUrl)
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(posts => {
      console.log(JSON.stringify(posts));
      return dispatch(addPosts(posts));
    })
    .catch(error => {
      console.log(error);
    });
};

//user action creator

export const addUser = user => ({
  type: ActionTypes.ADD_USER,
  user
});
export const login = (email, password) => dispatch => {
  const userObj = {
    email,
    password
  };
  return fetch(`${baseUrl}login`, {
    mode: "cors",
    method: "post",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(user => {
      console.log(user);
      return dispatch(addUser(user));
    })
    .catch(error => {
      console.log(error);
    });
};

export const register = ({ email, name, password }) => dispatch => {
  const userObj = {
    name,
    email,
    password
  };
  return fetch(`${baseUrl}register`, {
    mode: "cors",
    method: "post",
    body: JSON.stringify(userObj),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(user => {
      console.log(user);
      return dispatch(addUser(user));
    })
    .catch(error => {
      console.log(error);
    });
};

export const removeUser = () => ({
  type: ActionTypes.REMOVE_USER
});

export const logout = () => dispatch => {
  return fetch(`${baseUrl}logout`)
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(user => {
      console.log(user);
      return dispatch(removeUser());
    })
    .catch(error => {
      console.log(error);
    });
};

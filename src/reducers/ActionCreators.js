import * as ActionTypes from "./ActionTypes";
const baseUrl = "http://localhost:5000/";

export const addPosts = posts => ({
  type: ActionTypes.ADD_POST,
  data: posts
});

export const postsLoading = () => ({
  type: "POSTS_LOADING"
});

export const fetchPosts = postCount => dispatch => {
  console.log("fetch posts action" + postCount);
  postsLoading();
  return fetch(baseUrl + postCount, {
    mode: "cors",
    credentials: "include",
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
    .then(posts => {
      console.log("recieved posts" + JSON.stringify(posts));
      return dispatch(addPosts(posts));
    })
    .catch(error => {
      console.log("dbjabd");
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
    credentials: "include",
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
      console.log(JSON.stringify(user));
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
  return fetch(`${baseUrl}logout`, {
    mode: "cors",
    credentials: "include"
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
      return dispatch(removeUser());
    })
    .catch(error => {
      console.log(error);
    });
};

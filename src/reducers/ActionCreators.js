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
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(posts => {
      console.log(JSON.stringify(posts));
      if (posts.length > 0) return dispatch(addPosts(posts));
      return;
    })
    .catch(error => {
      console.log("dbjabd");
      console.log(error);
    });
};
export const addSinglePost = post => ({
  type: "ADD_SINGLE_POST",
  data: post
});

//newPost
export const newPost = (body, authorid) => dispatch => {
  const postObj = {
    body,
    authorid
  };
  return fetch(`${baseUrl}post`, {
    mode: "cors",
    method: "post",
    body: JSON.stringify(postObj),
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
    .then(post => {
      console.log(JSON.stringify(post));
      return dispatch(addSinglePost(post));
    })
    .catch(error => {
      console.log("Add new post error");
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
export const heartPost = postid => dispatch => {
  console.log(postid);
  return fetch(`${baseUrl}post/${postid}/heart`, {
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
    .then(heartedPost => {
      console.log("action ceator " + JSON.stringify(heartedPost));
      return dispatch(addHeartStatus(heartedPost));
    })
    .catch(error => {
      console.log(error);
    });
};

export const addHeartStatus = heartedPost => ({
  type: ActionTypes.HEART_POST,
  data: heartedPost
});

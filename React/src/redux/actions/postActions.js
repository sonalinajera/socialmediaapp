import { ADD_POST, FETCH_POST } from './types';
import config from '../../config';
import axios from 'axios';

const apiUrl = config.API;

export const createPost = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/`, {title, body})
      .then(response => {
        dispatch(createPostSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  }
};

// export const deletePostSuccess = id => {
//   return {
//     type: DELETE_POST,
//     payload: {
//       id
//     }
//   }
// }

// export const deletePost = id => {
//   return (dispatch) => {
//     return axios.get(`${apiUrl}/delete/${id}`)
//       .then(response => {
//         dispatch(deletePostSuccess(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
};


export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/getAllPosts`)
      .then(response => {
        dispatch(fetchPosts(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

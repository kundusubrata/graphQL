import React, { useContext } from "react";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const GET_ALL_POSTS = gql`
  {
    allPosts {
      id
      title
      description
    }
  }
`;

const Home = () => {
  const { data, loading } = useQuery(GET_ALL_POSTS);
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS);
  // access context
  const { state, dispatch } = useContext(AuthContext);

  let navigate = useNavigate();

  const updateUserName = () => {
    dispatch({
      type: "LOGGED_IN_USER",
      payload: "Hare Krishna",
    });
  };

  if (loading) return <p className="p-5">Loading...</p>;

  return (
    <div className="container">
      <div className="row p-5">
        {data.allPosts.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h4>{p.title}</h4>
                </div>
                <p className="card-text">{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row p-5">
        <button
          onClick={() => fetchPosts()}
          className="btn-btn-raised btn-primary"
        >
          Fetch posts
        </button>
      </div>
      <hr />
      {JSON.stringify(posts)}
      <hr />
      {JSON.stringify(state.user)}
      <hr />
      <button className="btn btn-primary" onClick={updateUserName}>
        Change user name
      </button>
      <hr />
      {JSON.stringify(navigate)}
    </div>
  );
};

export default Home;

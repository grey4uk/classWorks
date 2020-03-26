import React from "react";
import { Link, Route } from "react-router-dom";
const ContentPage = props => {
  console.log("content page",props);
  return (
    <>
      <h2>{props.history.location.state}</h2>
      <Link
        to={{
          pathname: `/home/:${props.match.params.id}/content`,
          state: "ha-ha"
        }}
      >
        Content
      </Link>
      <Route
        exact
        path={`/home/:${props.match.params.id}/content`}
        // component={ContentPage}
      />
    </>
  );
};

export default ContentPage;
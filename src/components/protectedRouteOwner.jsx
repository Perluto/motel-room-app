import React from "react";
import auth from "../service/authService";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutedOwner = ({
  path,
  component: Component,
  render,
  ...rest
}) => {
  const user = auth.getCurrentUser();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user || !user.isOwner)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoutedOwner;

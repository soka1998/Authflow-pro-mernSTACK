// import { useSelector } from 'react-redux';
// import { Navigate, Route } from 'react-router-dom';

// // Define the function expression
// export const PrivateRoute = ({ component: Component, roles, ...rest }) => {
//   // Use the useSelector hook to access the isAuthenticated state
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const userRoles = useSelector(state => state.auth.user.roles);

//   if (!isAuthenticated) {
//     // If the user is not authenticated, navigate to the login page
//     return <Navigate to="/login" />;
//   }

//   if (roles && roles.length > 0 && !roles.some(role => userRoles.includes(role))) {
//     // If the user does not have the required role, navigate to a different page or show an error message
//     return <Navigate to="/" />;
//   }

//   // If the user is authenticated and has the required role, render the component
//   return <Route {...rest} element={<Component />} />;
// }

// // Define the variable
// export const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

// // Export the function and the variable
// export default PrivateRoute;

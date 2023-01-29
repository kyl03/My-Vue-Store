import { RouteLocation } from "vue-router";

const loggedInGuard = (
  to: RouteLocation,
  from: RouteLocation,
  next: () => void
) => {
  console.log(to, from, next);
  const token = localStorage.getItem("token");
  if (token) {
    next();
  } else {
    // alert('You must be logged in first')
  }
};

export default loggedInGuard;

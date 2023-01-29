import { RouteComponent, RouteLocation } from "vue-router";

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
export const notLoggedInGuard = (
  to: RouteLocation,
  from: RouteLocation,
  next: (route: RouteComponent) => void
) => {
  console.log(to, from, next);
  const token = localStorage.getItem("token") ?? "";
  if (token == "") {
    next({});
  } else {
    // alert('You must be logged in first')
    next({ name: "home" });
  }
};

export default loggedInGuard;

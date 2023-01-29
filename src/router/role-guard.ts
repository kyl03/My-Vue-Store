import { RouteLocation } from "vue-router";

const haveRoleGuard = (
  to: RouteLocation,
  from: RouteLocation,
  next: ()=> void
) => {
  console.log(to, from, next);
  const userRole = localStorage.getItem("userRole");
  if (userRole === "Admin") {
    next();
  } else {
    alert("No eres admin! no puedes pasar!");
    // next({ name: "login" });
  }
};

export default haveRoleGuard;

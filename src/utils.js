import { redirect } from "react-router-dom";
export async function requestAuth() {
  console.log("Auth function running");
  const userIsAuthenticated = false; 
  console.log("User is authenticated:", userIsAuthenticated);
  
  if (!userIsAuthenticated) {
    console.log("Redirecting to login");
    return redirect("/login");
  }
  
  console.log("User is authenticated, continuing");
  return null;
}
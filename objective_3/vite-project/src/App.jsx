import React from "react";
import { ProfileProvider } from "./context/ProfileContext";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <ProfileProvider>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1 style={{
          fontSize: "36px",
          color: "#4a4a4a",
          fontWeight: "bold",
          marginBottom: "20px",
          letterSpacing: "2px"
        }}>
          HEY MATE
        </h1>
        <UserProfile />
      </div>
    </ProfileProvider>
  );
}

export default App;
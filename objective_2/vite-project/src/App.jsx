import React from "react";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <h1 style={{
  textAlign: "center",
  fontSize: "36px",
  color: "#4a4a4a",
  fontWeight: "bold",
  marginBottom: "20px",
  letterSpacing: "2px"
}}>
  HEY MATE
</h1>
      <UserProfile
        initialName="Narayan Devgan"
        initialBio="Software Developer at XYZ"
        initialAvatar="https://avatar.iran.liara.run/public/36"
      />
    </div>
  );
}

export default App;
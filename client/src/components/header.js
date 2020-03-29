import React from "react";


const headerStyle = {
  "maxWidth": "100vw",
  height: "calc(100vw * .43333)",
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Google Books Search</h1>
            <p>Search for Books and save your favorites!</p>
        </header>
    );
}

export default Header;
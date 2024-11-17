import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const token = localStorage.getItem("token"); // Ensure a valid token is retrieved

    axios
      .get("http://localhost:5000/users", {
        params: { searchUser: searchInput }, // Pass searchUser parameter as expected by the backend
        headers: {
          Authorization: `Bearer ${token}`, // Include token for authentication
        },
      })
      .then((response) => {
        if (response.data.success) {
          setSearchResults(response.data.User); // Update state with results
          alert("User(s) found!"); // Display success message using alert
        }
      })
      .catch((error) => {
        if (error.response) {
          // Handle specific backend error responses
          if (error.response.status === 404) {
            alert("User does not exist."); // Display warning message
          } else if (error.response.status === 403) {
            alert("Unauthorized. Please log in again."); // Display error message
          } else {
            alert("An error occurred while searching."); // General error message
          }
        } else {
          alert("Server error. Please try again later."); // If no response from the server
        }
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a user"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((user, index) => (
              <li key={index}>
                <strong>{user.userName}</strong> - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;

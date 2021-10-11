import { React } from "react";



function SearchBar() {

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="rounded-right"
        
          style={{
            backgroundColor: "#EEF3F8",
            border: "0",
            height: "38px",
            width: "180px",
            
            
          }}
          />
        </div>
    </div>
  );
}

export default SearchBar;
import React, {useState} from "react";


function SearchBar(props) {
    const [inputText, setText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);
    }

    function submitSearch(event) {
        props.Search(inputText);
        setText("");
        event.preventDefault();
    }

    return (
    <div>
      <form>
        <h2>Search for Crypto</h2>
        <input
          onChange={handleChange}
          value={inputText}
          name="SearchBar"
          placeholder="Search"
        />
        <button onClick={submitSearch}>Search</button>
      </form>
    </div>
    );
}

export default SearchBar;
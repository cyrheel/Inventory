import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    props.callback_filters({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };

  return (
    <div className="searchBar-container">
      <h2>Search for an Item</h2>
      <div className="searchParams-container">
        <div className="filters">
          <label htmlFor="name-field">Name: </label>
          <input
            id="name-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="filters">
          <label htmlFor="price-field">Max Price: </label>
          <input
            id="price-field"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="filters">
          <label htmlFor="type-field">Type: </label>
          <input
            id="type-field"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="filters">
          <label htmlFor="brand-field">Brand: </label>
          <input
            id="brand-field"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <button type="button" className="btn" onClick={searchButtonPressed}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;

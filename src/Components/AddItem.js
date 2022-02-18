import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.callback_addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="addItem-container">
      <h2>Add a Item</h2>
      <div className="addParams-container">
        <div className="left">
          <label htmlFor="name-field">Name: </label>
          <input
            id="name-field"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="price-field">Price: </label>
          <input
            id="price-field"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="right">
          <label htmlFor="type-field">Type: </label>
          <input
            id="type-field"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="brand-field">Brand: </label>
          <input
            id="brand-field"
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
      </div>
      <button type="button" className="btn" onClick={addItemButtonPressed}>
        Add Item
      </button>
    </div>
  );
}

export default AddItem;

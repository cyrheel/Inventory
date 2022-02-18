import "./App.css";
import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import AddItem from "./Components/AddItem";
import ItemsDisplay from "./Components/ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  // On the first load page only (cause of the [] at the end)
  // this send a request to the json server to load the data
  useEffect(() => {
    fetch("http://127.0.0.1:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);

  // Take the filters from the SearchBar component
  // and set them to the App component's props
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  // Send a request to json server who gonna add the item to the db
  // And then update app's props for display
  const addItemToData = (item) => {
    let items = data["items"];

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch("http://127.0.0.1:3000/items", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((item) => {
        items.push(item);
        setData({ items: items });
      });
  };

  // Delete item on the json server and update props for display
  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE",
    };

    fetch(`http://127.0.0.1:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items });
        }
      }
    );
  };

  // Very basic filtering
  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name) {
      return data;
    }

    for (let i = 0; i < data.length; i++) {
      if (filters.name !== "" && data[i].name !== filters.name) {
        continue;
      }
      if (filters.price !== 0 && data[i].price > filters.price) {
        continue;
      }
      if (filters.type !== "" && data[i].type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && data[i].brand !== filters.brand) {
        continue;
      }

      filteredData.push(data[i]);
    }

    return filteredData;
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Inventory Management System</h1>
        <SearchBar callback_filters={updateFilters} />
      </div>
      <ItemsDisplay deleteItem={deleteItem} items={filterData(data["items"])} />
      <AddItem callback_addItem={addItemToData} />
    </div>
  );
}

export default App;

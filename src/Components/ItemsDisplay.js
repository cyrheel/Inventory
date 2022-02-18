function ItemsDisplay({ items, deleteItem }) {
  return (
    <div className="item-display">
      <h2>Items</h2>
      <table className="items-container">
        <thead>
          <tr className="table-header">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Brand</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr className="item">
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.price}</th>
                <th>{item.type}</th>
                <th>{item.brand}</th>
                <th>
                  <button
                    className="del-btn"
                    onClick={() => {
                      deleteItem(item);
                    }}
                  >
                    X
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsDisplay;

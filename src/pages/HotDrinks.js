import React from 'react';

function HotDrinks() {
  return (
      <div>
          <h1 className="mainName">Hot Drinks</h1>
          <ItemList items={['Tea', 'Coffee', 'Hot Wine', 'Hot Apple Juice', 'Hot Chocolate']} />
      </div>
  );
}

function ItemList({ items }) {
    return (

        <ul className="ulList">
            {items.map((user, index) => (
                <button className="btn btn-success me-3 " key={index}>{user}</button>
            ))}
        </ul>
  );
}

export default HotDrinks;



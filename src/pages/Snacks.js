import React from 'react';

function Snacks() {
  return (
      <div>
        <h1 className="mainName">Snacks</h1>
        <ItemList items={['Fries', 'Nuts', 'Chlebicek', 'Mozarella Sticks', 'Nachos', 'Hot-Dog']} />
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

export default Snacks;

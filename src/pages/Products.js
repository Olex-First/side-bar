import React from 'react';

function Products() {
  return (
      <div>
          <h1 className="mainName">Beers</h1>
          <ItemList items={['Pilsner', 'Kozel', 'Bernard', 'Unetice', 'Staropramen', 'Hoegarden']} />
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

export default Products;

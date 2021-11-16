import React from 'react';

function Beers() {
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
            {items.map((item, index) => (
                <button className="btn btn-success me-3 " key={index}>{item}</button>
            ))}
        </ul>
  );
}

export default Beers;

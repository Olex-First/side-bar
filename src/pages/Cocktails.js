import React from 'react';

function Cocktails() {
  return (
      <div>
          <h1 className="mainName">Cocktails</h1>
          <ItemList items={['Mojito', 'Gin&Tonic', 'Cuba Libre', 'Caipirinha', 'Pina Colada']} />
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

export default Cocktails;

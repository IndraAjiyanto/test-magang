import "../styles/MenuList.css";

const MenuList = ({ menu, addToOrder }) => {
  return (
    <div className="menu">
      <h2>Daftar Menu</h2>
      <div className="menu-grid">
        {menu.map((item) => (
          <div key={item.id} className="menu-card">
            <div className="menu-info">
              <h4 className="menu-name">{item.nama}</h4>
              <p className="menu-price">Rp{item.harga.toLocaleString()}</p>
              <button
                onClick={() => addToOrder(item)}
                className="btn btn-green"
              >
                Pesan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;

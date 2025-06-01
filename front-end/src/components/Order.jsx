import "../styles/Order.css";

const Order = ({ order, removeFromOrder, submitOrder }) => {
  return (
    <div className="order">
      <h2>Pesanan</h2>
      {order.length === 0 ? (
        <p className="empty">Belum memesan</p>
      ) : (
        <ul className="list-order">
          {order.map((item, index) => (
            <li key={index} className="item-order">
              <span>
                {item.nama} x {item.jumlah} -
                <strong> Rp{(item.harga * item.jumlah).toLocaleString()}</strong>
              </span>
              <button
                onClick={() => removeFromOrder(index)}
                className="btn btn-red"
              >
                -
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={submitOrder}
        disabled={order.length === 0}
        className={`btn btn-blue full ${order.length === 0 ? "disabled" : ""}`}
      >
        Kirim Pesanan
      </button>
    </div>
  );
};

export default Order;

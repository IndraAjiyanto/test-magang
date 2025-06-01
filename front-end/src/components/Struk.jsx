import "../styles/Struk.css";

const Struk = ({ struk, saveStruk }) => {
  return (
    <div className="struk">
      <h3 className="struk-title">Struk Pembayaran</h3>
      <ul className="list">
        {struk.pesanan.map((item, i) => (
          <li key={i} className="struk-item">
            <span className="label">
              {item.nama} x {item.jumlah ?? 1}
            </span>
            <span className="price">
              Rp{(item.harga * (item.jumlah ?? 1)).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
      <hr />
      <p className="struk-item">
        <span className="label">Subtotal:</span>
        <span className="price">Rp{struk.subtotal.toLocaleString()}</span>
      </p>
      <p className="struk-item">
        <span className="label">Diskon:</span>
        <span className="price">Rp{struk.diskon.toLocaleString()}</span>
      </p>
      <p className="struk-item">
        <span className="label">Pajak (10%):</span>
        <span className="price">Rp{struk.pajak.toLocaleString()}</span>
      </p>
      <p className="struk-item total">
        <span className="label">Total:</span>
        <span className="price">Rp{struk.total.toLocaleString()}</span>
      </p>

      <button 
        className="btn btn-blue full" 
        onClick={saveStruk}
      >
        Simpan Struk
      </button>
    </div>
  );
};

export default Struk;

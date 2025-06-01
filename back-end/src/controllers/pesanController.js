const menus = require('../data/menus');

const getDataMenu = (req, res) => {
    res.json(menus);
}

const postDataMenu = (req, res) => {
  const { pesanan } = req.body;
  if (!Array.isArray(pesanan) || pesanan.length === 0) {
    return res.status(400).json({ message: 'Pilih pesanan' });
  }

  const pilihPesanan = pesanan.map(id => menus.find(m => m.id === id)).filter(Boolean);
  const subtotal = pilihPesanan.reduce((acc, item) => acc + item.harga, 0);

  const diskon = subtotal > 50000 ? 0.1 * subtotal : 0;
  const pajak = (subtotal - diskon) * 0.1;
  const total = subtotal - diskon + pajak;

  const struk = ({
    pesanan: pilihPesanan,
    subtotal,
    diskon,
    pajak: pajak,
    total,
  });

  res.json(struk);
}


module.exports = {getDataMenu, postDataMenu}
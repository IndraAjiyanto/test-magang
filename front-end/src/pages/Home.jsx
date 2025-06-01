import { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import Order from "../components/Order";
import Struk from "../components/Struk";
import { fetchMenu, postOrder } from "../services/Api";

const Home = () => {
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState([]);
  const [struk, setStruk] = useState(null);

  useEffect(() => {
    fetchMenu().then(setMenu);
  }, []);

  const addToOrder = (item) => {
    const index = order.findIndex((orderItem) => orderItem.id === item.id);
    if (index >= 0) {
      const newOrder = [...order];
      newOrder[index].jumlah += 1;
      setOrder(newOrder);
    } else {
      setOrder([...order, { ...item, jumlah: 1 }]);
    }
    setStruk(null);
  };

  const removeFromOrder = (index) => {
    const newOrder = [...order];
    if (newOrder[index].jumlah > 1) {
      newOrder[index].jumlah -= 1;
    } else {
      newOrder.splice(index, 1);
    }
    setOrder(newOrder);
    setStruk(null);
  };

  const submitOrder = async () => {
    const itemIds = order.flatMap((item) => Array(item.jumlah).fill(item.id));
    const data = await postOrder(itemIds);
    setStruk(data);
  };

const saveStruk = () => {
  if (!struk) return;

  let textContent = "=== Struk Pembayaran ===\n";
  struk.pesanan.forEach((item, index) => {
    textContent += `${index + 1}. ${item.nama} x1 - Rp${item.harga}\n`;
  });
  textContent += `\nSubtotal   : Rp${struk.subtotal}`;
  textContent += `\nPajak (10%): Rp${struk.pajak}`;
  textContent += `\nDiskon (10% jika subtotal > 50000): Rp${struk.diskon}`;
  textContent += `\nTotal      : Rp${struk.total}`;
  textContent += `\n\nTerima kasih atas pesanan Anda!`;

  const blob = new Blob([textContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "struk_pembayaran.txt";
  a.click();
  URL.revokeObjectURL(url);
};

  return (
    <div className="container">
      <h1 className="title">Menu Restoran</h1>
      <div className="section">
        <MenuList menu={menu} addToOrder={addToOrder} />
        <Order
          order={order}
          removeFromOrder={removeFromOrder}
          submitOrder={submitOrder}
        />
      </div>
      {struk && <Struk struk={struk} saveStruk={saveStruk}/>}
    </div>
  );
};

export default Home;

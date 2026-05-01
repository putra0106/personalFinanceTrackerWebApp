import { getFromLocal, saveToLocal } from "../shared/localStorgeData.js";

// simpan data
export function saveDataIncome(id, pemasukan, category, ctt, dataIncome) {
  // simpan data input sebagai object
  const dataSaveObject = {
    id: id,
    pemasukan: pemasukan,
    category: category,
    ctt: ctt,
  };

  // ambil data lama
  const dataIncomeLama = getFromLocal("income");

  // push data baru object ke array
  dataIncomeLama.push(dataSaveObject);

  // simpan ke data lama
  saveToLocal("income", dataIncomeLama);
}

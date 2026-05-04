import { getFromLocal, saveToLocal } from "../shared/localStorgeData.js";

// simpan data
export function saveDataIncome(id, tgl, pemasukan, category, ctt) {
  const currentData = getFromLocal("income") || [];

  // simpan data input sebagai object
  const dataSaveObject = {
    id: id,
    tgl: tgl,
    pemasukan: pemasukan,
    category: category,
    ctt: ctt,
  };

  // push data baru object ke array
  currentData.push(dataSaveObject);

  // simpan ke data lama
  saveToLocal("income", currentData);
}

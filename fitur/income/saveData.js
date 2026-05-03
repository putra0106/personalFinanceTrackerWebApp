import { getFromLocal, saveToLocal } from "../shared/localStorgeData.js";

// simpan data
export function saveDataIncome(id, tgl, pemasukan, category, ctt, dataIncome) {
  // simpan data input sebagai object
  const dataSaveObject = {
    id: id,
    tgl: tgl,
    pemasukan: pemasukan,
    category: category,
    ctt: ctt,
  };

  // push data baru object ke array
  dataIncome.push(dataSaveObject);

  // simpan ke data lama
  saveToLocal("income", dataIncome);
}

// simpan data
export function saveDataIncome(pemasukan, category, ctt, dataIncome) {
  // simpan data input sebagai object
  const dataSaveObject = {
    pemasukan: pemasukan,
    category: category,
    ctt: ctt,
  };

  // push data object ke array
  dataIncome.push(dataSaveObject);
}

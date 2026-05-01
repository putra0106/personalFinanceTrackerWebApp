import { saveDataIncome } from "./saveData.js";
import { renderTableIncome } from "./renderTable.js";
import { saveToLocal } from "../shared/localStorgeData.js";

export function deleteIncome(id, data) {
  //filter semua data kecuali yang dipilih
  const updatedData = data.filter((item) => item.id !== id);

  //   simpan kembali ke local storage
  saveToLocal("income", updatedData);

  // render ulang dengan data terupdate
  renderTableIncome(updatedData);
}

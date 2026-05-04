import { saveDataIncome } from "../income/saveData.js";
import { renderTableIncome } from "../income/renderTable.js";
import { saveToLocal } from "./localStorgeData.js";
import { renderTableBudgeting } from "../budgeting/renderTable.js";
import { renderTableExpense } from "../expense/renderTable.js";
import { Total } from "../total/total.js";

export function deleteFeatures(id, data, storage) {
  //filter semua data kecuali yang dipilih
  const updatedData = data.filter((item) => item.id !== id);

  if (storage === "income") {
    //   simpan kembali ke local storage
    saveToLocal("income", updatedData);

    // render ulang dengan data terupdate
    renderTableIncome(updatedData);
  }

  if (storage === "budgeting") {
    //   simpan kembali ke local storage
    saveToLocal("budgeting", updatedData);

    // render ulang dengan data terupdate
    renderTableBudgeting(updatedData);
  }

  if (storage === "expense") {
    // simpan kembali ke local storage
    saveToLocal("expense", updatedData);

    // render ulang dengan data terupdate
    renderTableExpense(updatedData);
  }

  Total();
}

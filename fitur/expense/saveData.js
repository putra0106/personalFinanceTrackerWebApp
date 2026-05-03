import { saveToLocal } from "../shared/localStorgeData.js";

export function saveDataExpense(
  id,
  tgl,
  pengeluaran,
  category,
  dataExpenseExist,
) {
  const dataObjectPengeluaran = {
    id: id,
    tgl: tgl,
    pengeluaran: pengeluaran,
    category: category,
  };

  dataExpenseExist.push(dataObjectPengeluaran);

  saveToLocal("expense", dataExpenseExist);
}

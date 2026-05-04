import { getFromLocal } from "../shared/localStorgeData.js";
import { convertStringRpToNumber } from "../shared/convertStringRpToNumber.js";
import { saveToLocal } from "../shared/localStorgeData.js";

export function saveDataExpense(id, tgl, pengeluaran, category) {
  const currentData = getFromLocal("expense") || [];
  const dataBudgeting = getFromLocal("budgeting") || [];

  // cari budget kategori
  const categoryBudgeting = dataBudgeting.find(
    (item) => item.category === category,
  );

  const budget = categoryBudgeting ? categoryBudgeting.budgeting : 0;

  const budgetNew = convertStringRpToNumber(budget);
  const pengeluaranNew = convertStringRpToNumber(pengeluaran);

  // total pengeluaran SEBELUM ini (kategori sama)
  const totalPengeluaranSebelumnya = currentData
    .filter((item) => item.category === category)
    .reduce((total, item) => {
      return total + convertStringRpToNumber(item.pengeluaran);
    }, 0);

  //total setelah ditambah pengeluaran baru
  const totalPengeluaranBaru = totalPengeluaranSebelumnya + pengeluaranNew;

  // validasi
  if (totalPengeluaranBaru > budgetNew) {
    alert("Pengeluaran melebihi budget!");
    return;
  }

  //sisa budget yang
  const sisaBudget = budgetNew - totalPengeluaranBaru;

  const dataObjectPengeluaran = {
    id: id,
    tgl: tgl,
    budget: budget,
    pengeluaran: pengeluaran,
    category: category,
    sisaBudget: sisaBudget,
  };

  currentData.push(dataObjectPengeluaran);
  saveToLocal("expense", currentData);
}

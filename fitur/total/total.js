import { convertStringRpToNumber } from "../shared/convertStringRpToNumber.js";
import { getFromLocal } from "../shared/localStorgeData.js";
import { formatRupiah } from "../shared/formatRupiah.js";

export function Total() {
  const totalIncome = document.getElementById("total-income");
  const totalBudget = document.getElementById("total-budget");
  const totalExpense = document.getElementById("total-expense");
  const totalSisaIncome = document.getElementById("total-sisa-income");
  const sisaBudgetTotal = document.getElementById("total-sisa-budget");

  // total income
  const getDataIncome = getFromLocal("income") || [];

  const totalDataIncome = getDataIncome.reduce((total, item) => {
    return total + Number(convertStringRpToNumber(item.pemasukan));
  }, 0);

  totalIncome.textContent = formatRupiah(totalDataIncome);

  // total budgeting
  const getDataBudgeting = getFromLocal("budgeting") || [];

  const totalDataBudgeting = getDataBudgeting.reduce((total, item) => {
    return total + Number(convertStringRpToNumber(item.budgeting));
  }, 0);

  totalBudget.textContent = formatRupiah(totalDataBudgeting);

  // total expense
  const getDataExpense = getFromLocal("expense") || [];

  const totalDataExpense = getDataExpense.reduce((total, item) => {
    return total + Number(convertStringRpToNumber(item.pengeluaran));
  }, 0);

  totalExpense.textContent = formatRupiah(totalDataExpense);

  // total sisa income
  const sisaIncome = totalDataIncome - totalDataBudgeting;
  totalSisaIncome.textContent = formatRupiah(sisaIncome);

  // total sisa budget
  const totalSisaBudget = totalDataBudgeting - totalDataExpense;
  sisaBudgetTotal.textContent = formatRupiah(totalSisaBudget);
}

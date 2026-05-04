import { getFromLocal, saveToLocal } from "../shared/localStorgeData.js";
import { convertStringRpToNumber } from "../shared/convertStringRpToNumber.js";

export function saveDataBudgeting(id, budgeting, category) {
  const currentData = getFromLocal("budgeting") || [];

  // ambil data income
  const getDataIncome = getFromLocal("income") || [];

  // total pemasukan
  const totalIncome = getDataIncome.reduce((total, item) => {
    const value = Number(convertStringRpToNumber(item.pemasukan)) || 0;
    return total + value;
  }, 0);

  const budgetingNumber = Number(convertStringRpToNumber(budgeting)) || 0;

  // console.log("TOTAL:", totalIncome);
  // console.log("BUDGET:", budgetingNumber);

  if (budgetingNumber > totalIncome) {
    alert("Budgeting melebihi total pemasukan!");
    return;
  }

  // data baru input budgeting
  const data = {
    id: id,
    budgeting: budgeting,
    category: category,
  };

  // push ke data exist
  currentData.push(data);

  // save to local storage
  saveToLocal("budgeting", currentData);
}

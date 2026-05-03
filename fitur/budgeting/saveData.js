import { saveToLocal } from "../shared/localStorgeData.js";

export function saveDataBudgeting(id, budgeting, category, dataBudgetingExist) {
  // data baru input budgeting
  const data = {
    id: id,
    budgeting: budgeting,
    category: category,
  };

  // push ke data exist
  dataBudgetingExist.push(data);

  // save to local storage
  saveToLocal("budgeting", dataBudgetingExist);
}

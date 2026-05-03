import { formatRupiah } from "../shared/formatRupiah.js";
import { getFromLocal, saveToLocal } from "../shared/localStorgeData.js";
import { renderTableBudgeting } from "./renderTable.js";
import { saveDataBudgeting } from "./saveData.js";

const inputBudgeting = document.getElementById("input-budgeting");
const categoryBudgeting = document.getElementById("category-budgeting");
const btnBudgeting = document.getElementById("btn-budgeting");

// simpan data sementara
let dataBudgetingExist = [];

export function Budgeting() {
  document.addEventListener("DOMContentLoaded", () => {
    const data = getFromLocal("budgeting") || [];

    renderTableBudgeting(data);
  });
  btnBudgeting.addEventListener("click", () => {
    // ambil valuenya
    const id =
      Date.now().toString(36) + Math.random().toString(36).substring(2); // id
    const budgeting = formatRupiah(inputBudgeting.value.trim());
    const category = categoryBudgeting.value.trim();

    if (!budgeting || !category) {
      alert("SEMUA FIELD HARUS DIISI");
      return;
    }

    saveDataBudgeting(id, budgeting, category, dataBudgetingExist);

    renderTable(dataBudgetingExist);
    // balik ke input kosong lagi
    inputBudgeting.value = "";
    categoryBudgeting.value = "";
    return;
  });
}

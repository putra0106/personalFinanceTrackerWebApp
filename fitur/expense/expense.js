import { saveToLocal } from "../shared/localStorgeData.js";
import { renderTableExpense } from "./renderTable.js";
import { saveDataExpense } from "./saveData.js";
import { getFromLocal } from "../shared/localStorgeData.js";
import { formatRupiah } from "../shared/formatRupiah.js";
import { Total } from "../total/total.js";

const tglPengeluaran = document.getElementById("tanggal-pengeluaran");
const categoryPengeluaran = document.getElementById("category-pengeluaran");
const inputPengeluaran = document.getElementById("input-pengeluaran");
const btnPengeluaran = document.getElementById("btn-pengeluaran");

// simpan data sementara
let dataExpenseExist = getFromLocal("expense") || [];

export function Expense() {
  document.addEventListener("DOMContentLoaded", () => {
    dataExpenseExist = getFromLocal("expense") || [];
    renderTableExpense(dataExpenseExist);
  });
  btnPengeluaran.addEventListener("click", () => {
    // ambil valuenya
    const id =
      Date.now().toString(36) + Math.random().toString(36).substring(2); // id
    const pengeluaran = formatRupiah(inputPengeluaran.value.trim());
    const category = categoryPengeluaran.value.trim();
    const tgl = tglPengeluaran.value.trim();

    // validasi input
    if (!pengeluaran || !category || !tgl) {
      alert("SEMUA FIELD HARUS DIISI");
      return;
    }

    saveDataExpense(id, tgl, pengeluaran, category);

    dataExpenseExist = getFromLocal("expense") || [];
    renderTableExpense(dataExpenseExist);

    Total();

    // balik ke input kosong lagi
    inputPengeluaran.value = "";
    categoryPengeluaran.value = "";
    tglPengeluaran.value = "";
  });
}

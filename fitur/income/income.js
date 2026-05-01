// import
import { formatRupiah } from "../shared/formatRupiah.js";
import { getFromLocal } from "../shared/localStorgeData.js";
import { renderTableIncome } from "./renderTable.js";
import { saveDataIncome } from "./saveData.js";

// input / btn income
const inputPemasukan = document.getElementById("input-pemasukan");
const categoryPemasukan = document.getElementById("category-pemasukan");
const cttPemasukan = document.getElementById("ctt-pemasukan");
const btnPemasukan = document.getElementById("btn-pemasukan");
const id = Date.now().toString(36) + Math.random().toString(36).substring(2); // id

// save data income
let dataIncomeBaru = [];

export function Income() {
  // render pertama akan muncul
  document.addEventListener("DOMContentLoaded", () => {
    const data = getFromLocal("income");

    renderTableIncome(inputPemasukan, categoryPemasukan, cttPemasukan, data);
  });

  // klik tambah data
  btnPemasukan.addEventListener("click", () => {
    // ambil valuenya
    const pemasukan = formatRupiah(inputPemasukan.value.trim()); // ubah format ke rupiah
    const category = categoryPemasukan.value.trim();
    const ctt = cttPemasukan.value.trim();

    if (!pemasukan || !category || !ctt) {
      alert("SEMUA FIELD HARUS DIISI");
      return;
    }

    // simpan data
    saveDataIncome(id, pemasukan, category, ctt, dataIncomeBaru);

    // ambil data baru dari local
    const dataBaru = getFromLocal("income");

    // render body table
    renderTableIncome(dataBaru);
    // setelh tombol di klik value kembali kosong
    pemasukan.value = "";
    category.value = "";
    ctt.value = "";
  });
}

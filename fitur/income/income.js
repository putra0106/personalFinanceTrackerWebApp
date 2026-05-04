// import
import { formatRupiah } from "../shared/formatRupiah.js";
import { getFromLocal } from "../shared/localStorgeData.js";
import { Total } from "../total/total.js";
import { renderTableIncome } from "./renderTable.js";
import { saveDataIncome } from "./saveData.js";

// input / btn income
const inputPemasukan = document.getElementById("input-pemasukan");
const categoryPemasukan = document.getElementById("category-pemasukan");
const cttPemasukan = document.getElementById("ctt-pemasukan");
const tglPemasukan = document.getElementById("tanggal-pemasukan");
const btnPemasukan = document.getElementById("btn-pemasukan");

// save data income
let dataIncomeBaru = getFromLocal("income") || [];

export function Income() {
  // render pertama akan muncul
  document.addEventListener("DOMContentLoaded", () => {
    dataIncomeBaru = getFromLocal("income") || [];

    renderTableIncome(dataIncomeBaru);
  });

  // klik tambah data
  btnPemasukan.addEventListener("click", () => {
    // ambil valuenya
    const id =
      Date.now().toString(36) + Math.random().toString(36).substring(2); // id
    const pemasukan = formatRupiah(inputPemasukan.value.trim()); // ubah format ke rupiah
    const category = categoryPemasukan.value.trim();
    const ctt = cttPemasukan.value.trim();
    const tgl = tglPemasukan.value.trim();

    if (!pemasukan || !category || !ctt || !tgl) {
      alert("SEMUA FIELD HARUS DIISI");
      return;
    }

    // simpan data
    saveDataIncome(id, tgl, pemasukan, category, ctt);

    // ambil data baru dari local
    const dataBaru = getFromLocal("income") || [];

    // render body table
    renderTableIncome(dataBaru);

    Total();
    // setelh tombol di klik value kembali kosong
    inputPemasukan.value = "";
    categoryPemasukan.value = "";
    cttPemasukan.value = "";
    tglPemasukan.value = "";
  });
}

// import
import { formatRupiah } from "../shared/formatRupiah.js";
import { renderTableIncome } from "./renderTable.js";
import { saveDataIncome } from "./saveData.js";

// input / btn income
const inputPemasukan = document.getElementById("input-pemasukan");
const categoryPemasukan = document.getElementById("category-pemasukan");
const cttPemasukan = document.getElementById("ctt-pemasukan");
const btnPemasukan = document.getElementById("btn-pemasukan");

// save data income
let dataIncomeBaru = [];

export function Income() {
  btnPemasukan.addEventListener("click", () => {
    // ambil valuenya
    const pemasukan = formatRupiah(inputPemasukan.value.trim()); // ubah format ke rupiah
    const category = categoryPemasukan.value.trim();
    const ctt = cttPemasukan.value.trim();

    // simpan data
    saveDataIncome(pemasukan, category, ctt, dataIncomeBaru);

    // render body table
    renderTableIncome(
      inputPemasukan,
      categoryPemasukan,
      cttPemasukan,
      dataIncomeBaru,
    );
  });
}

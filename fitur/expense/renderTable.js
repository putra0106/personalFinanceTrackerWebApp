// ui

import { getFromLocal } from "../shared/localStorgeData.js";
import { formatRupiah } from "../shared/formatRupiah.js";
import { deleteFeatures } from "../shared/deleteFeatures.js";
import { Expense } from "./expense.js";
const tBodyPengeluaran = document.getElementById("t-body-pengeluaran");

export function renderTableExpense() {
  const data = getFromLocal("expense") || [];
  let no = 1;
  // Perbaikan typo dari toBodyPemasukan ke tBodyPemasukan
  tBodyPengeluaran.innerHTML = "";
  if (data.length === 0) return;

  let rows = ""; // Simpan string di variabel dulu
  data.forEach((item) => {
    rows += `
    <tr class="border-b hover:bg-gray-50 transition">
      <td class="px-4 py-3 text-sm text-gray-700">${no++}</td>
      <td class="px-4 py-3 text-sm font-medium text-gray-900">${item.tgl}</td>
      <td class="px-4 py-3 text-sm text-gray-700">${item.category}</td>
      <td class="px-4 py-3 text-sm text-gray-700">${item.budget}</td>
      <td class="px-4 py-3 text-sm font-medium text-gray-900">${item.pengeluaran}</td>
      <td class="px-4 py-3 text-sm font-medium text-gray-900">${formatRupiah(item.sisaBudget)}</td>
      <td class="px-4 py-3 text-center">
        <button class="delete bg-red-500 hover:bg-red-600 transition px-3 py-1.5 text-sm text-white rounded-lg shadow-sm" data-id="${item.id}">
          Delete
        </button>
      </td>
    </tr>`;
  });

  tBodyPengeluaran.innerHTML = rows;
}

tBodyPengeluaran.addEventListener("click", (e) => {
  // targetnykan .delete income class
  const btn = e.target.closest(".delete");
  if (!btn) return;

  // ambil data set
  const id = btn.dataset.id;

  // Ambil data terbaru dari localStorage sebelum diolah
  const currentData = getFromLocal("expense") || [];

  // validasi
  if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
    deleteFeatures(id, currentData, "expense");
  }
});

const tBodyBudgeting = document.getElementById("t-body-budgeting");
import { getFromLocal } from "../shared/localStorgeData.js";
import { deleteFeatures } from "../shared/deleteFeatures.js";

export function renderTableBudgeting(data) {
  let no = 1;

  //   selalu reset terlebih dahulu jika saat ingin menampilkan data berikutnya
  tBodyBudgeting.innerHTML = "";

  let rows = "";
  data.forEach((item) => {
    rows += `
            <tr class="border-b hover:bg-gray-50 transition">
      <td class="px-4 py-3 text-sm text-gray-700">${no++}</td>
            <td class="px-4 py-3 text-sm text-gray-700">${item.category}</td>
                  <td class="px-4 py-3 text-sm font-medium text-gray-900">${item.budgeting}</td>
 <td class="px-4 py-3 text-center">
        <button class="delete bg-red-500 hover:bg-red-600 transition px-3 py-1.5 text-sm text-white rounded-lg shadow-sm" data-id="${item.id}">
          Delete
        </button>
      </td>

            </tr>
    `;
  });

  tBodyBudgeting.innerHTML = rows;
}

tBodyBudgeting.addEventListener("click", (e) => {
  // targetnykan .delete income class
  const btn = e.target.closest(".delete");
  if (!btn) return;

  // ambil data set
  const id = btn.dataset.id;

  // Ambil data terbaru dari localStorage sebelum diolah
  const currentData = getFromLocal("budgeting") || [];

  // validasi
  if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
    deleteFeatures(id, currentData, "budgeting");
  }
});

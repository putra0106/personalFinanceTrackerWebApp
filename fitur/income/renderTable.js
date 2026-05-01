// ui
// body table
const toBodyPemasukan = document.getElementById("t-body-pemasukan");
export function renderTableIncome(pemasukan, category, ctt, data) {
  // nomor
  let no = 1;

  // reset render atau nilai awal inner html string kosong
  toBodyPemasukan.innerHTML = "";

  // looping data munculin ke ui
  data.forEach((item) => {
    toBodyPemasukan.innerHTML += `
    <tr class="border-b hover:bg-gray-50 transition">
      <td class="px-4 py-3 text-sm text-gray-700">${no++}</td>

      <td class="px-4 py-3 text-sm font-medium text-gray-900">
        ${item.pemasukan}
      </td>

      <td class="px-4 py-3 text-sm text-gray-700">
        ${item.category}
      </td>

      <td class="px-4 py-3 text-sm text-gray-600">
        ${item.ctt}
      </td>

      <td class="px-4 py-3 text-center">
        <button
          class="bg-red-500 hover:bg-red-600 transition px-3 py-1.5 text-sm text-white rounded-lg shadow-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  `;
  });

  // setelh tombol di klik value kembali kosong
  pemasukan.value = "";
  category.value = "";
  ctt.value = "";
}

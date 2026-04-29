// ui
export function renderTableIncome(pemasukan, category, ctt, data) {
  // body table
  const toBodyPemasukan = document.getElementById("t-body-pemasukan");

  // nomor
  let no = 1;

  // reset render atau nilai awal inner html string kosong
  toBodyPemasukan.innerHTML = "";

  // looping data munculin ke ui
  data.forEach((item) => {
    toBodyPemasukan.innerHTML += `
      <tr >
      <td>${no++}</td>
        <td>${item.pemasukan}</td>
        <td>${item.category}</td>
        <td>${item.ctt}</td>
      </tr>
    `;
  });

  // setelh tombol di klik value kembali kosong
  pemasukan.value = "";
  category.value = "";
  ctt.value = "";
}

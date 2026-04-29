const btnPemasukan = document.getElementById("btn-pemasukan");

document.addEventListener("DOMContentLoaded", () => {
  btnPemasukan.addEventListener("click", () => {
    const inputPemasukan = document.getElementById("input-pemasukan");
    const categoryPemasukan = document.getElementById("category-pemasukan");
    const cttPemasukan = document.getElementById("ctt-pemasukan");

    const input = formatRupiah(inputPemasukan.value.trim());
    const category = categoryPemasukan.value.trim();
    const ctt = cttPemasukan.value.trim();

    // cek data masuk atau engga
    console.log(input, category, ctt);
  });
});

// ubah format ke rupiah
function formatRupiah(angka) {
  const clean = String(angka).replace(/\./g, "").replace(/,/g, "");

  const number = Number(clean);

  if (isNaN(number)) return "Rp0";

  return number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
}

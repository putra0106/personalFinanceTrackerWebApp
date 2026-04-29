export function formatRupiah(angka) {
  const clean = String(angka).replace(/\./g, "").replace(/,/g, "");

  const number = Number(clean);

  if (isNaN(number)) return "Rp0";

  return number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
}

import { renderTableBudgeting } from "../budgeting/renderTable.js";
import { renderTableExpense } from "../expense/renderTable.js";
import { renderTableIncome } from "../income/renderTable.js";
import { Total } from "../totalAndReset/total.js";
export function Reset() {
  const btnReset = document.getElementById("btn-reset");
  btnReset.addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin mereset semua data?")) {
      localStorage.removeItem("income");
      localStorage.removeItem("budgeting");
      localStorage.removeItem("expense");
      renderTableIncome();
      renderTableBudgeting();
      renderTableExpense();
      Total();

      alert("Semua data telah direset.");
    }
  });
}

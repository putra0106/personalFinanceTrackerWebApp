import { Income } from "./fitur/income/income.js";
import { Budgeting } from "./fitur/budgeting/budgeting.js";
import { Expense } from "./fitur/expense/expense.js";
import { Total } from "./fitur/totalAndReset/total.js";
import { Reset } from "./fitur/totalAndReset/reset.js";

Income();
Budgeting();
Expense();
Total();
Reset();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./service-worker.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope,
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      },
    );
  });
}

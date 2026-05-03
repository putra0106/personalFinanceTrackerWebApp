export function saveToLocal(save, data) {
  if (save === "income") {
    return localStorage.setItem("income", JSON.stringify(data));
  }

  if (save === "budgeting") {
    return localStorage.setItem("budgeting", JSON.stringify(data));
  }

  if (save === "expense") {
    return localStorage.setItem("expense", JSON.stringify(data));
  }
}

export function getFromLocal(get) {
  if (get === "income") {
    return JSON.parse(localStorage.getItem("income"));
  }

  if (get === "budgeting") {
    return JSON.parse(localStorage.getItem("budgeting"));
  }

  if (get === "expense") {
    return JSON.parse(localStorage.getItem("expense"));
  }
}

export function saveToLocal(save, data) {
  if (save === "income") {
    return localStorage.setItem("income", JSON.stringify(data));
  }
}

export function getFromLocal(get) {
  if (get === "income") {
    return JSON.parse(localStorage.getItem("income"));
  }
}

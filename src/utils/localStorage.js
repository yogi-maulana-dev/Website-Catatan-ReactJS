// utils/localStorage.js

export const saveToLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Gagal menyimpan ke localStorage", error);
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  } catch (error) {
    console.error("Gagal membaca dari localStorage", error);
    return [];
  }
};

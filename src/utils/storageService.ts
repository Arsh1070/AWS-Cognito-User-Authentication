/**
 * @description This function set data to desired storage
 * @param {string} keyName
 * @param {Object} value
 * @returns void
 */
export const setLocaleStorageData = (keyName: string, value: any): void => {
  localStorage.setItem(keyName, JSON.stringify(value));
};
/**
 * @description This function delete all data from desired storage
 * @returns {void} void
 */
export const deleteLocaleStorageData = (): void => {
  window.localStorage.clear();
};
/**
 * @description This function get data from desired storage
 * @param {string} keyName
 * @returns {Object} value
 */
export const getLocaleStorageData = (keyName: string): object | null => {
  let data = null;
  try {
    const storageData = localStorage.getItem(keyName);
    if (storageData) {
      data = JSON.parse(storageData);
    } else {
      deleteLocaleStorageData();
    }
  } catch (error) {
    deleteLocaleStorageData();
    location.reload();
  }
  return data;
};

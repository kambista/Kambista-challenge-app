import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};

const getStoreData = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value) as T;
    }
    return null;
  } catch (e) {
    return null;
  }
};

const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

export { storeData, getStoreData, removeData };

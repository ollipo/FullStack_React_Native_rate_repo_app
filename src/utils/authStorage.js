import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getKey(key) {
    return `${this.namespace}:${key}`;
  }

  getAccessToken() {
    return AsyncStorage.getItem(this.getKey('accessToken'));
  }

  setAccessToken(accessToken) {
    return AsyncStorage.setItem(this.getKey('accessToken'), accessToken);
  }

  removeAccessToken() {
    return AsyncStorage.removeItem(this.getKey('accessToken'));
  }

  /* async getAccessToken() {
    console.log('pöö');
    const token = await AsyncStorage.getItem(
        `${this.namespace}:tokens`,
      );
      console.log('getAccessToken: ', token);
    return token ? JSON.parse(token) : [];
  } 

  async setAccessToken(accessToken) {
    const currentTokens = await this.getAccessToken();
    const newTokens = [...currentTokens, accessToken];
    console.log('setAccessToken: ', accessToken);
    await AsyncStorage.setItem(
      `${this.namespace}:tokens`,
      JSON.stringify(newTokens),
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:tokens`);
  } */
}

export default AuthStorage;
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(
        `${this.namespace}:tokens`,
      );
      console.log('getAccess token: ', token);

    return token ? JSON.parse(token) : [];
  }

  async setAccessToken(accessToken) {
    const currentTokens = await this.getAccessToken();
    const newTokens = [...currentTokens, accessToken];

    await AsyncStorage.setItem(
      `${this.namespace}:tokens`,
      JSON.stringify(newTokens),
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:tokens`);
  }
}

export default AuthStorage;
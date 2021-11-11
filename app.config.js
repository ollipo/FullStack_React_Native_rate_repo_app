import 'dotenv/config';

export default {
    name: "react-native-rate-repo-app",
    slug: "react-native-rate-repo-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    updates: {
      "fallbackToCacheTimeout": 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      "supportsTablet": true
    },
    android: {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    web: {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      // eslint-disable-next-line no-undef
      env: process.env.ENV,
      // eslint-disable-next-line no-undef
      uri: process.env.APOLLO_URI
    }
};

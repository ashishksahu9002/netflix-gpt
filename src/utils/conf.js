const conf = {
  apiKey: String(process.env.REACT_APP_FIREBASE_APIKEY),
  authDomain: String(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
  projectId: String(process.env.REACT_APP_FIREBASE_PROJECT_ID),
  storageBucket: String(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: String(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
  appId: String(process.env.REACT_APP_FIREBASE_APP_ID),
  measurementId: String(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID),
  tmdbApiAccessToken: String(process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN),
  openaiApiKey: String(process.env.REACT_APP_OPENAI_API_KEY),
};

export default conf;

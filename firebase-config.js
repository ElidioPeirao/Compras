// firebase-config.js

// 1. Importações (mantendo as mesmas versões que você já usava)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-storage.js";

// 2. Sua Configuração
const firebaseConfig = {
    apiKey: "AIzaSyAHAO1ZJrc5JYgut4tjcJX-vbKlEaFn6cQ",
    authDomain: "comprassenai-40755.firebaseapp.com",
    projectId: "comprassenai-40755",
    storageBucket: "comprassenai-40755.firebasestorage.app",
    messagingSenderId: "592503297730",
    appId: "1:592503297730:web:cb40e3711d1f9647908d5b",
    measurementId: "G-74W14C81WX"
};

// 3. Inicialização e Exportação (O "export" permite que o index.html use essas variáveis)
let app, auth, db, storage;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    // setLogLevel('debug'); // Remova ou comente para produção
    storage = getStorage(app);
} catch (e) {
    console.error("Erro na inicialização do Firebase:", e);
}

// Exportamos o que o seu sistema precisa
export { app, auth, db, storage };
export const appId = firebaseConfig.appId;

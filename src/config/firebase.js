import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyAuaSQNw0Ufkaf4tRFIN_w4BcpHZuYpXZY",
  authDomain: "chat-app-477ab.firebaseapp.com",
  projectId: "chat-app-477ab",
  storageBucket: "chat-app-477ab.firebasestorage.app",
  messagingSenderId: "935178616442",
  appId: "1:935178616442:web:68d252c166e080c67285c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email,password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey",
            lastSeen:Date.now()
        })
        await setDoc(doc(db, "chats", user.uid),{
            chatData:[]
        })
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password) =>{
    try {
        await signInWithEmailAndPassword(auth, email,password);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async () => {
    try {
        await signOut(auth)   
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

export {signup, login, logout, auth, db}
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, 
    signInWithEmailAndPassword, signOut, updateEmail } from "firebase/auth";
import { auth, firestore, storage } from "./firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// user is an object with user info and userRef is a DocumentReference to the user object
let user;
let userRef;
let profilePic = null;

/**
 * Registers a user with the database using their email and password
 * @param {String} email 
 * @param {String} password 
 */
const register = async (email, password, imageAssets) => {
    // create user and update users collection with the new user
    let url = ""
    if (imageAssets) {
        url = await uploadProfileImage(imageAssets[0].uri, email);
    }
    await createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            user = userCredentials.user;
            userRef = doc(firestore, "users", user.uid);
            setDoc(userRef, {
                email: email,
                profile: [],
                profilePic: url
            })
            profilePic = url;
            if (profilePic === "") {
                profilePic = "none"
            }
        }).catch(error => {
            // alert user appropriately if there are errors
            let errorStr = error.code.split("/")[1].replaceAll("-", " ")
            alert("Error: " + errorStr)
        })
    
}

/**
 * Logs in the user using their email and password
 * @param {String} email 
 * @param {String} password 
 */
const login = async (email, password, onLogin) => {
    // logs in user using email and password
    await signInWithEmailAndPassword(auth, email, password)
    .then(async userCredentials => {
        user = userCredentials.user;
        userRef = doc(firestore, "users", user.uid);
        profilePic = (await getDoc(userRef)).data().profilePic
        if (!profilePic) {
            profilePic = "none"
        }
        onLogin()
    }).catch(error => {
        // if there is an error alert the user
        console.log(error)
        alert("Incorrect email or password")
    })
}
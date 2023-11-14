import { doc, addDoc, updateDoc, arrayUnion, collection, deleteDoc, arrayRemove, getDoc, onSnapshot } from "firebase/firestore";
import { userRef, user } from "./authentication";
import { firestore } from "./firebase-config";
import { storage } from "./firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * Takes in paramaters and creates a profile
 * @param {String} name
 * @param {String} university
 * 
 * idk what other parameters we want to add
 * @returns the id of the newly created profile
 */
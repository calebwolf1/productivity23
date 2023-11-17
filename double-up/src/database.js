import { doc, addDoc, updateDoc, arrayUnion, collection, deleteDoc, arrayRemove, getDoc, onSnapshot } from "firebase/firestore";
import { userRef, user } from "./authentication";
import { firestore } from "./firebase-config";
import { storage } from "./firebase-config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * Takes in paramaters for the event
 * @param {String} title
 * @param {String} description
 * @param {Number} startTime
 * @param {Number} endTime
 * @param {Number} currID
 * @returns the id of the newly created event
 */
const createEvent = async(title, description, startTime, endTime, currID) => {
    const eventRef = await addDoc(collection(firestore, "events"), {
        title: title,
        description: description,
        startTime: startTime,
        endTime: endTime,
        currID: currID
    })

    await updateDoc(userRef, {
        events: arrayUnion(eventRef.id)
    })

    return eventRef.id;
}
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

export const LogIn = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("user: ", user, "\n Loggin");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error Autenticacion", error.code, error.message)
        });
}

export const SignIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("SignIN");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error: ", error.code, error.message)
        });
}

export const SignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Session cerrada");
    }).catch((error) => {
        // An error happened.
        console.log("Error: ", error)
    });

}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Firebase Google Auth</title>
</head>
<body>
    <header>
        <h1>Welcome to GoAround</h1>
    </header>

    <main>
        <h2>Login with Google</h2>
        <button onclick="signInWithGoogle()">Sign in with Google</button>
        <button onclick="signOutUser()">Sign Out</button>

        <h3>User Info:</h3>
        <p id="user-info">Not signed in</p>
    </main>

    <script type="module">
        // Import Firebase SDKs
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
        import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCyiHHLJeqygENGGAdKlKL2es3Y7qJ4MNM",
            authDomain: "goaround1-f7a84.firebaseapp.com",
            projectId: "goaround1-f7a84",
            storageBucket: "goaround1-f7a84.appspot.com",
            messagingSenderId: "901999773807",
            appId: "1:901999773807:web:cf07e3deaf7b0f0bef659a",
            measurementId: "G-K182FF54Y9"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

        // Google Sign-In function
        window.signInWithGoogle = async () => {
            try {
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
                document.getElementById("user-info").textContent = `Signed in as: ${user.displayName} (${user.email})`;
            } catch (error) {
                console.error("Sign-in Error:", error);
            }
        };

        // Logout function
        window.signOutUser = async () => {
            try {
                await signOut(auth);
                document.getElementById("user-info").textContent = "Not signed in";
                alert("Signed out successfully!");
            } catch (error) {
                console.error("Sign-out Error:", error);
            }
        };
    </script>
</body>
</html>

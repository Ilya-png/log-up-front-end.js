const user1 = "colin.jaffe@codeimmersives.com";
const password1 = "Hotforhimself";
const user2 = "mesuara@codeimmersives.com";
const password2 = "Console.logger";
const user3 = "anthony@codeimmersives.com";
const password3 = "like a BOSS";

const userEmail = process.argv[2];
const userPassword = process.argv[3];

if (passwordMatches(userEmail, userPassword)) {
  console.log("Logged In");
}

if (isRegisteredUser(userEmail)) {
  if (!passwordMatches(userEmail, userPassword)) {
    console.log("Password Incorrect");
  }
} else {
  if (isValidEmail(userEmail) && isValidPassword(userPassword)) {
    console.log("Signed Up");
  } else if (!isValidEmail(userEmail)) {
    console.log("Invalid Email");
  } else if (!isValidPassword(userPassword)) {
    console.log("Invalid Password");
  }
}

// Solution to the back-end portion of this app.
// Don't need to touch this, but you can check it out!

function isValidEmail(email) {
  return email.endsWith("@codeimmersives.com") && email.length >= 20;
}

function isValidPassword(password) {
  return (
    password.length >= 8 &&
    password.toUpperCase() !== password &&
    password.toLowerCase() !== password
  );
}

function isRegisteredUser(email) {
  return email === user1 || email === user2 || email === user3;
}

function passwordMatches(email, password) {
  return (
    (email === user1 && password === password1) ||
    (email === user2 && password === password2) ||
    (email === user3 && password === password3)
  );
}

// Don't touch the code below!
// These are two utility functions that you can use if
// you don't want to use `process.argv` directly.

function getEmail() {
  return getEmail[2];
}

function getPassword() {
  return getPassoword[3];
}

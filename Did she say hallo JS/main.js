function validateHello(greetings) {
  greetings = greetings.toLowerCase();

  if (greetings.includes("hello")) {
    return true;
  } else if (greetings.includes("ciao")) {
    return true;
  } else if (greetings.includes("salut")) {
    return true;
  } else if (greetings.includes("hallo")) {
    return true;
  } else if (greetings.includes("hola")) {
    return true;
  } else if (greetings.includes("ahoj")) {
    return true;
  } else if (greetings.includes("czesc")) {
    return true;
  } else {
    return false;
  }
}

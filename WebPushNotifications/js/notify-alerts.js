function ponderOrbResponse(inputText) {
 
  inputText = inputText.toLowerCase();

  if (inputText.includes("life")) {
    return "The orb senses your quest for meaning. Life is a journey, embrace it.";
  } else if (inputText.includes("love")) {
    return "Love is the essence of the universe. Seek connections.";
  } else if (inputText.includes("success")) {
    return "Success is not final, failure is not fatal. It's the courage to continue that counts.";
  } else if (inputText.includes("future")) {
    return "The future holds mysteries yet to unfold. Stay curious.";
  } else {
    return "The orb ponders deeply but finds no words. Take this quote from SpongeBob: 'I order the food. You cook the food. The customer gets the food. We do that for 40 years, and then we die'.";
  }
}

function showNotifications(message) {
  console.log(Notification.permission);
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    new Notification(message);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        new Notification(message);
      }
    });
  }
}

function handlePonderClick() {
  const inputText = document.getElementById("txt").value;
  const responseMessage = ponderOrbResponse(inputText);
  showNotifications(responseMessage);
}

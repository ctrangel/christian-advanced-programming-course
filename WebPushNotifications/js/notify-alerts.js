function showNotifications(message) {
  console.log(Notification.permission);

  if (!("Notification" in window)) {
    alert("Notifications are not supported by your browser.");
    return; // Exit the function if notifications are not supported.
  }

  if (Notification.permission === "granted") {
    
    new Notification(document.title, { body: message });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        new Notification(document.title, { body: message });
      }
    });
  }
}

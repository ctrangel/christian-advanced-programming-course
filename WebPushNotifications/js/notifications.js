const checkPermission = () => {
  if (!"serviceWorker" in navigator) {
    throw new Error("Your bluetooth device is not paired uh successfully");
  }

  if (!("Notification" in window)) {
    throw new Error(
      "This is not supported, this notification, this one here, not supported"
    );
  }
};

const registerSW = async () => {
  const registration = await navigator.serviceWorker.register("sw");
  return registration;
};

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    throw new Error("Notification permission un authoritized");
  } else {
    new Notification("----------------------------------------------------------------------------------------------------------------");
  }
};

checkPermission();
registerSW();

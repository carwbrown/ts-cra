// based off of tutorial from https://dev.to/daviddalbusco/react-and-web-workers-4io3

self.onmessage = async ($event) => {
  if ($event && $event.data && $event.data.msg === "incApple") {
    const newCounter = incApple($event.data.countApple);
    self.postMessage(newCounter);
  }
};

function incApple(countApple) {
  const start = Date.now();
  while (Date.now() < start + 5000) {}
  return countApple + 1;
}

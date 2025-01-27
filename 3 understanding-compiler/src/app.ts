let appId = "abc";
const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHanlder(message: string) {
  // let userName = "Ugnius";
  console.log("Clicked" + message);
}

// comment
if (button) {
  button.addEventListener("click", clickHanlder.bind(null, "You're welcome"));
}

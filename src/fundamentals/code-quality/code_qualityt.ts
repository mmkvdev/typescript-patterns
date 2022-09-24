let globalUser = "true";

function codeQuality(i: string) {
  let user = "max";
  console.log("code", user, i);
}

function addNumbersForCodeQuality(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

addNumbersForCodeQuality(2, 3);

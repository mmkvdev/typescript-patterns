let logged;

function dataLog(data: string) {
  console.log(data);
  logged = "true";
  logged = true;
  console.log(logged);
}

dataLog("any type");

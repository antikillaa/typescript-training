let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

//Simple loop

for (let tempSport of sportsOne) {
    console.log(tempSport);
}

for (let tempSport of sportsOne) {

    if (tempSport == "Cricket") {
        console.log(tempSport + " <<<<< My favorite sport");
    }

    console.log(tempSport);
}
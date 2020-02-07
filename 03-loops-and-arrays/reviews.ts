let reviews: number[] = [5, 5, 3, 4, 2];
let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i]
}

let avarage: number = total / reviews.length;

console.log(avarage);
let statistics = {
    redCars: 21,
    blueCars : 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

const keys = Object.keys(statistics);
for (var k in keys){
    if ((keys[k] > 'r')||(statistics[keys[k]]%2 == 0)){
        console.log(statistics[keys[k]]);
    }
}
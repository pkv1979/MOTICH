const room1Length = +prompt("Введите длину 1 комнаты.", 0);
const room1Height = +prompt("Введите ширину 1 комнаты.", 0);
const room1Square = room1Length * room1Height;

const room2Length = +prompt("Введите длину 2 комнаты", 0);
const room2Height = +prompt("Введите ширину 2 комнаты", 0);
const room2Square = room2Length * room2Height;

const houseSquare = room1Square + room2Square;

console.log(
  `1 комната. Длина: ${room1Length}, Ширина: ${room1Height}, Площадь: ${room1Square}`
);
console.log(
  `2 комната. Длина: ${room2Length}, Ширина: ${room2Height}, Площадь: ${room2Square}`
);
console.log(`Площадь дома: ${houseSquare}`);

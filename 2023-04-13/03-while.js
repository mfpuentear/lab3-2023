let i = 0;

while (i < 10) {
  i++;
}
console.log(i);

i = 0;
do {
  i++;
} while (i < 10);
console.log(i);

i = 0;
const a = i++;
const b = ++i;
console.log(a);
console.log(b);

console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");

const buffer = new ArrayBuffer(16);
const uint8Array = new Uint8Array(buffer);
const int8Array = new Int8Array(buffer);
const uint16Array = new Uint16Array(buffer);
const int16Array = new Int16Array(buffer);
const uint32Array = new Uint32Array(buffer);
const int32Array = new Int32Array(buffer);
const float32Array = new Float32Array(buffer);
const float64Array = new Float64Array(buffer);

uint8Array[0] = 10;
uint8Array[1] = 20;
uint8Array[2] = 30;
uint8Array[3] = 40;
uint8Array[4] = 50;
uint8Array[5] = 60;
uint8Array[6] = 70;
uint8Array[7] = 80;

int8Array[0] = -10;
int8Array[1] = -20;
int8Array[2] = -30;
int8Array[3] = -40;
int8Array[4] = -50;
int8Array[5] = -60;
int8Array[6] = -70;
int8Array[7] = -80;

uint16Array[0] = 100;
uint16Array[1] = 200;

int16Array[0] = -100;
int16Array[1] = -200;

uint32Array[0] = 1000;
uint32Array[1] = 2000;

int32Array[0] = -1000;
int32Array[1] = -2000;

float32Array[0] = 1.1;
float32Array[1] = 2.2;

float64Array[0] = 1.111111111111111;
float64Array[1] = 2.222222222222222;

console.log("1. Uint8Array:", uint8Array);
console.log("\n\n2. Int8Array:", int8Array);
console.log("\n\n3. Uint16Array:", uint16Array);
console.log("\n\n4. Int16Array:", int16Array);
console.log("\n\n5. Uint32Array:", uint32Array);
console.log("\n\n6. Int32Array:", int32Array);
console.log("\n\n7. Float32Array:", float32Array);
console.log("8. Float64Array:", float64Array);
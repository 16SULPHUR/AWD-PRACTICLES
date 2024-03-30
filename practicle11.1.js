console.log("\nName: Ankit Patil\nEnrollment No.: 202203103510124\n");
class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume.toFixed(4);
    }
}

const cylinder = new Cylinder(3, 5);
const volume = cylinder.getVolume();
console.log("Volume of the cylinder:", volume);
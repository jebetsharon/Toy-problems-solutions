// cylinder-volume.js

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calculateVolume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
}

// Example input and output
const radius = parseFloat(prompt('Enter radius: '), 10);
const height = parseFloat(prompt('Enter height: '), 10);

if (radius > 0 && height > 0) {
    const cylinder = new Cylinder(radius, height);
    console.log(`Volume of the cylinder: ${cylinder.calculateVolume().toFixed(4)}`);
} else {
    console.log('Please enter valid positive values for radius and height.');
}

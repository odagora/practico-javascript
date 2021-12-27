function calcularPromedioArmonico(movement){
    const velocityInverse = movement.map(function(velObject){
	    return 1 / velObject.velocity;
    });

    const sumOfVelocityInverse = velocityInverse.reduce(function(initialVal, sumVal){
        return initialVal + sumVal;
    }, 0);

    const harmonicAverave = velocityInverse.length / sumOfVelocityInverse;

    return harmonicAverave;
}


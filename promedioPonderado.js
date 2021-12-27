function calcularPromedioPonderado(notes){
    const notesWithCredits = notes.map(function(noteObject){
	    return noteObject.note * noteObject.credit
    });

    const sumNotesWithCredits = notesWithCredits.reduce(function(initialVal, sumVal) {
        return initialVal + sumVal;
    }, 0);

    const credits = notes.map(function(noteObject){
        return noteObject.credit
    });

    const sumOfCredits = credits.reduce(function(initialVal, sumVal){
        return initialVal + sumVal;
    }, 0);

    const weightedAverage = sumNotesWithCredits / sumOfCredits;

    return weightedAverage;
}


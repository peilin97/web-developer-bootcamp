function average(scores) {
	var num = scores.length;
	var sum = 0;
	scores.forEach(score => sum+=score);
	return Math.round(sum/num);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));
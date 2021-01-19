const gradeCalc = (score) => {
        let grade;
        switch (true) {
            case score >= 90 || score === 100:

                grade = `You got a A ${score}%`;
                break;
            case score >= 80 || score === 89:

                grade = `You got a B ${score}%`;
                break;
            case score >= 70 || score === 79:
                grade = `You got a C ${score}%`;
                break;
            case score >= 60 || score === 69:
                grade = `You got a D ${score}%`;
                break;
            case score >= 50 || score === 59:

                grade = `You got a E ${score}%`;
                break;
            default:

                grade = `You got a F ${score}%`;
        }
        console.log(grade);
    }
    //this varable is hold the score
let score = 20;
// this variable is use to calculate the percentage scored;
let percent = (score / 100) * 100;
//the function name that accept  the value;
gradeCalc(score)
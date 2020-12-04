// Grading system

function grading(score) {
        if (score < 65){
                console.log("Grade is: F");      
        } else if (score >= 65 && score <= 66) {
              console.log("Grade is: D"); 
        } else if (score >= 67 && score <= 69) {
                console.log("Grade is: D+"); 
        } else if (score >= 70 && score <= 72) {
                console.log("Grade is: C-"); 
        } else if (score >= 73 && score <= 76) {
                console.log("Grade is: C"); 
        } else if (score >= 77 && score <= 79) {
                console.log("Grade is: C+"); 
        } else if (score >= 80 && score <= 82) {
                console.log("Grade is: B-"); 
        } else if (score >= 83 && score <= 86) {
                console.log("Grade is: B"); 
        } else if (score >= 87 && score <= 89) {
                console.log("Grade is: B+"); 
        } else if (score >= 90 && score <= 92) {
                console.log("Grade is: A-"); 
        } else if (score >= 93 && score <= 96) {
                console.log("Grade is: A"); 
        } else if (score >= 97 && score <= 100) {
                console.log("Grade is: A+"); 
        } 
}
grading(100);

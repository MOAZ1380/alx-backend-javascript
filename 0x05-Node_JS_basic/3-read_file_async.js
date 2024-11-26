const fs = require('fs');

function countStudents(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.split('\n').filter((line) => line.trim() !== '');
            if (lines.length <= 1) {
                reject(new Error('No students in the database'));
                return;
            }

            const arrCS = [];
            const arrSWE = [];
            let lenCS = 0;
            let lenSWE = 0;

            for (let i = 1; i < lines.length; i += 1) {
                const fields = lines[i].split(',').map((field) => field.trim());
                if (fields[3] === 'CS') {
                    arrCS.push(fields[0]);
                    lenCS += 1;
                } else if (fields[3] === 'SWE') {
                    arrSWE.push(fields[0]);
                    lenSWE += 1;
                }
            }

            console.log(`Number of students: ${lenCS + lenSWE}`);
            console.log(`Number of students in CS: ${lenCS}. List: ${arrCS.join(', ')}`);
            console.log(`Number of students in SWE: ${lenSWE}. List: ${arrSWE.join(', ')}`);

            resolve();
        });
    });
}

module.exports = countStudents;

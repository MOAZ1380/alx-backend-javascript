const fs = require('fs');

function countStudents(file_name) {
    return new Promise((resolve, reject) => {
        fs.readFile(file_name, 'utf8', (error, data) => {
            if (error) {
                reject(Error('Cannot load the database'));
            } else {
                const lines = data.split('\n').filter((line) => line.trim() !== '');
                const arr_CS = [];
                const arr_SWE = [];
                let len_CS = 0;
                let len_SWE = 0;

                for (let i = 1; i < lines.length; i += 1) {
                    const div = lines[i].split(',').map(field => field.trim());
                    if (div[3] === 'CS') {
                        arr_CS.push(div[0]);
                        len_CS += 1;
                    } else if (div[3] === 'SWE') {
                        arr_SWE.push(div[0]);
                        len_SWE += 1;
                    }
                }

                console.log(`Number of students: ${len_CS + len_SWE}`);
                console.log(`Number of students in CS: ${len_CS}. List: ${arr_CS.join(', ')}`);
                console.log(`Number of students in SWE: ${len_SWE}. List: ${arr_SWE.join(', ')}`);

                resolve();
            }
        });
    });
}

module.exports = countStudents;


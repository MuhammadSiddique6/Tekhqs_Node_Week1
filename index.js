const fs = require("fs");  // import file module


const newData = {      // create new data
  name: "Siddique",
  role: "Node.js Developer",
  age: 23,
};


// read and write file

fs.readFile("./docs/read.json", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    console.log('JSON read file successfully!');
    console.log(jsonData);
  } catch (parseErr) {
    console.error("Error parsing JSON:", parseErr);
  }
});


fs.writeFile('./docs/write.json', JSON.stringify(newData,null,2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }

  console.log('JSON file written successfully!');
});

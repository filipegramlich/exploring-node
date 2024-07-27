import fs from "node:fs"

function inspectFileStatus () {
  fs.stat('./test-doc.txt', (error, stats) => {

    if(error){ 
      console.log(error) 
    }

    console.log(stats)
    return
  });
}

function readAnyFile () {
  fs.readFile('./test-doc.txt', (error, content) => {

    if(error){ 
      console.log(error) 
    }

    const file_content = content.toString('utf-8');
    console.log(file_content)
    
    return file_content;
  });
}

function updateFileContent (new_content) {
  fs.writeFile('./test-doc.txt', new_content, (error) => {
    if(error){
      console.log(error)
    }
  
    console.log('The file content was updated!');
    return
  });
}

const new_content = 'hehehehe new content to my test doc.';
updateFileContent(new_content);



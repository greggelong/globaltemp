let data;
let table = [];
let cTable= [];
//https://data.giss.nasa.gov/gistemp/

// uses async and await and fetch in an async function

async function getData(){

    const response = await fetch('test.csv');
    data = await response.text();
    console.log(data)
    // loading this as .text()
    // data is one long string with rows separated by \n
    // and cols in each row separated by ","
    // you could use a library like p5 loadTable() and avoid this
    cleanData()


}

function cleanData(){
    table = data.split('\n').slice(1);
    console.log(table)
    for(let i = 0; i<table.length-1;i++){  // -1 because of the extra row left over from the last \n line break
        cTable[i] = table[i].split(',')
        
    }
    console.log(cTable);
    console.log(parseFloat(cTable[1][1])) // table is now a 2 dimensional array
}
  

getData();
 



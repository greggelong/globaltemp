let data;
let table = [];
let cTable= [];
let years = [];
let temps =[];
const canvas = document.getElementById('myChart');
const ctx = canvas.getContext('2d');
//https://data.giss.nasa.gov/gistemp/

// uses async and await and fetch in an async function

async function chartIt(){
    await getData(); 
    const labels =  years;
    const data = {
        labels: labels,
        datasets: [{
          label: 'Global Annual Temperature',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: temps,
        }]
      };

    const config = {
        type: 'line',  // 'line',
        data: data,
        options: {
             
        }
      };
    const myChart = new Chart(
        ctx,
        config
      );
    

    


}



async function getData(){

    const response = await fetch('ZonAnn.csv');
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
        cTable[i] = table[i].split(',');
        years[i] = parseFloat(cTable[i][0]);
        temps[i] = parseFloat(cTable[i][1])+14;  // global average temp
        
    }
    console.log(cTable);
    console.log(parseFloat(cTable[1][1])) // table is now a 2 dimensional array
}
  

getData();
chartIt();
 



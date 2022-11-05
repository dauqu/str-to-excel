import * as React from 'react';
var FileSaver = require('file-saver');


function App() {
  const [data, setData] = React.useState("");
  const [newData, setNewData] = React.useState([]);

  //Get string and replace each 4th character with a double inverted comma and comma

  const handleData = (e) => {
    setData(e.target.value);
    const newData = data.replace(/(.{4})/g, '"$1",');
    
    //Convert to uppercase
    const newData2 = newData.toUpperCase();
    setNewData(newData2);
  };

  //Download excel file 
  const downloadExcel = () => {
    const blob = new Blob([newData], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "data.csv");
  };


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <div class="card" style={{
        backgroundColor: '#656665',
        padding: '20px'
      }}>
        <textarea class="form-control" aria-label="With textarea" rows={5} value={data} onChange={(e) => {
          handleData(e);
        }}></textarea>
        <div class="card-body">
          <h5 class="card-title">Click button to download excel file all data you can see</h5>
          {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          <a href="#" class="btn btn-primary" onClick={
            downloadExcel
          }>Download File</a>
        </div>
      </div>
    </div>
  );
}

export default App;

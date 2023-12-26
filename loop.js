const Mydata = {
    "Name": "Rubika",
      "Email": "rubi133546@gmail.com",
      "MobileNo": "9945638295",
      "EmpID": "5695738",
  };
  
  
  //For Loop
  
  const entries = Object.entries(Mydata);
  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    console.log(`key: ${key}, : ${value}`);
  }
  
  //for in Loop
  
  for (let key in Mydata) {
    console.log(`Key: ${key}, Value: ${Mydata[key]}`);
  }
  
  //for of Loop
  
  const information = Object.entries(Mydata);
  
  for (const [key, value] of information) {
    console.log(`Key: ${key}, Value: ${value}`);
  }
  
  //for Each Loop
  
  Object.entries(Mydata).forEach(([key, value]) => {
    console.log(`Key: ${key}, Value: ${value}`);
  });
// TODO: add code here
function init() {
    // Add Code for retrieving comments using fetch() from https://jsonplaceholder.typicode.com/
    // Then code code for adding the comment JSON values to the <div id="comments"> div using a for loop
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            //console.log(json[0]);
            
            let div=document.getElementById("container");
            //let mostTimeInSpace=0;
              
            //json.sort(sortHrInSpace("hoursInSpace")); 
           /* data=json;
            data.sort(function (a, b) {
                return a.name.localeCompare(b.name);
            });
            document.write('<pre>' + JSON.stringify(data, 0, 4) + '</pre>');
            */
           data=json;
           function GetSortOrder(prop) {  
            return function(a, b) {  
                if (a[prop] > b[prop]) {  
                    return 1;  
                } else if (a[prop] < b[prop]) {  
                    return -1;  
                }  
                return 0;  
            }  
        }  
          
        data.sort(GetSortOrder("hoursInSpace")); 
        let astronautCount=0;   
         for(var item in data)
            {
                astronautCount+=1;
                let activeValueGreen;
                if (data[item].active === "true"){
                    //var activeValue="Active:" + data[item].active;
                    //console.log(activeValue);
                  //var activeValueGreen= "Active: " + data[item].active.fontcolor("green");
                   // console.log(activeValueGreen);
                    var activeValue= "Active: " + data[item].active;
                    activeValueGreen = activeValue.fontcolor("green");
                    
                }
                else{
                   activeValueGreen= "Active: " + data[item].active;
                    //console.log(activeValueGreen);
                }  
                
                div.innerHTML+=`
              <div id="container">
              
              
              <fieldset>
               <h1>${data[item].firstName}</h1>
               <ul>
                 <img class="avatar" src=${data[item].picture}>
                 <li><h3>Hours in space:${data[item].hoursInSpace}</h3></li>
                 <li><h3>${activeValueGreen}</h3></li>
                 <li><h3>Skills:${data[item].skills}</h3></li>
                
                </ul>
                
                </fieldset>
            </div> 
            `
            }
            div.innerHTML+=`<h1>Total Number of Astronauts:${astronautCount}</h1>`
        });
  });
  }
  function sortHrInSpace(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return 1;  
        } else if (a[prop] < b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
}
  window.onload = init;
  
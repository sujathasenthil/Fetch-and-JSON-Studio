// TODO: add code here
function init() {
    // Add Code for retrieving comments using fetch() from https://jsonplaceholder.typicode.com/
    // Then code code for adding the comment JSON values to the <div id="comments"> div using a for loop
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            console.log(json[0]);
            
            let div=document.getElementById("container");
            let mostTimeInSpace=0;
              
            json.sort(sortHrInSpace("hoursInSpace")); 
            for(let i=0;i<json.length;i++)
            {
              div.innerHTML+=`
              <div id="container">
              
              
              <fieldset>
               <h1>${json[i].firstName}</h1>
               <ul>
                 <li><h3>Hours in space:${json[i].hoursInSpace}</h3></li>
                 <li><h3>Active:${json[i].active}</h3></li>
                 <li><h3>Skills:${json[i].skills}</h3></li>
                 <img class="avatar" src=${json[i].picture}>
                </ul>
                
                </fieldset>
            </div> 
            `
            }
              
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
  
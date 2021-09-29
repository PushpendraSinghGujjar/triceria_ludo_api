const express = require('express');

const app = express();

     //rock --> 1
     //paper --> 2
     //scissor --> 3

app.get('/game/start', (req, res) => {
    var finalResult = [];
    var Results = new Array(4);  
    for (var x = 0; x < Results.length; x++) {
        Results[x] = new Array(4);
    } 
     
    for(var j=0;j<4;j++){
        for( var k=0;k<4;k++){
         Results[j][k] = 0;
        }
    }
    for(var i=1;i<=50;i++){
        
    var Player1 = Math.floor(Math.random()*3)+1;
    var Player2 = Math.floor(Math.random()*3)+1;
    var Player3 = Math.floor(Math.random()*3)+1;
    var Player4 = Math.floor(Math.random()*3)+1;
    
    for(var j=0;j<4;j++){
        for( var k=0;k<4;k++){
            var flag1 = 0;

            //row1
            if(j===0){

                if(k===0){
                    Results[j][k] = Results[j][k] + 0;
                }

        else if(k===1){
                        if(Player1-Player2 === 1 || Player1-Player2 === -2){
                            flag1 = flag1 + 1;
                        }

                    if(flag1 === 0){
                        Results[j][k] = Results[j][k] + 0;
                    }
                    else if(flag1 === 1){    
                        Results[j][k] = Results[j][k] + 1;   
                    }
                    else{
                        Results[j][k] = 0;
                    }
        }
            
        else if(k===2){
                    if(Player1-Player3 === 1 || Player1-Player3 === -2){
                        flag1 = flag1 + 1;
                    }

                if(flag1 === 0){
                    Results[j][k] = Results[j][k] + 0;
                }
                else if(flag1 === 1){    
                    Results[j][k] = Results[j][k] + 1;   
                }
                else{
                    Results[j][k] = 0;
                }
        }


        else if(k===3){
                        if(Player1-Player4 === 1 || Player1-Player4 === -2){
                            flag1 = flag1 + 1;
                        }

                    if(flag1 === 0){
                        Results[j][k] = Results[j][k] + 0;
                    }
                    else if(flag1 === 1){    
                        Results[j][k] = Results[j][k] + 1;   
                    }
                    else{
                        Results[j][k] = 0;
                    }
        }
    }

    //row2

    else if(j===1){

        if(k===0){
            if(Player2-Player1 === 1 || Player2-Player1 === -2){
                flag1 = flag1 + 1;
            }

        if(flag1 === 0){
            Results[j][k] = Results[j][k] + 0;
        }
        else if(flag1 === 1){    
            Results[j][k] = Results[j][k] + 1;   
        }
        else{
            Results[j][k] = 0;
        }
            
        }

    else if(k===1){
    Results[j][k] = Results[j][k] + 0;
}
    
    else if(k===2){
            if(Player2-Player3 === 1 || Player2-Player3 === -2){
                flag1 = flag1 + 1;
            }

        if(flag1 === 0){
            Results[j][k] = Results[j][k] + 0;
        }
        else if(flag1 === 1){    
            Results[j][k] = Results[j][k] + 1;   
        }
        else{
            Results[j][k] = 0;
        }
}


    else if(k===3){
                if(Player2-Player4 === 1 || Player2-Player4 === -2){
                    flag1 = flag1 + 1;
                }

            if(flag1 === 0){
                Results[j][k] = Results[j][k] + 0;
            }
            else if(flag1 === 1){    
                Results[j][k] = Results[j][k] + 1;   
            }
            else{
                Results[j][k] = 0;
            }
    }
}

        //row 3

        else if(j===2){

            if(k===0){
                if(Player3-Player1 === 1 || Player3-Player1 === -2){
                    flag1 = flag1 + 1;
                }
    
            if(flag1 === 0){
                Results[j][k] = Results[j][k] + 0;
            }
            else if(flag1 === 1){    
                Results[j][k] = Results[j][k] + 1;   
            }
            else{
                Results[j][k] = 0;
            }
                
            }
    
    else if(k===1){
                    if(Player3-Player2 === 1 || Player3-Player2 === -2){
                        flag1 = flag1 + 1;
                    }

                if(flag1 === 0){
                    Results[j][k] = Results[j][k] + 0;
                }
                else if(flag1 === 1){    
                    Results[j][k] = Results[j][k] + 1;   
                }
                else{
                    Results[j][k] = 0;
                }
    }
        
    else if(k===2){
        Results[j][k] = Results[j][k] + 0;
    }
    
    
    else if(k===3){
                    if(Player3-Player4 === 1 || Player3-Player4 === -2){
                        flag1 = flag1 + 1;
                    }
    
                if(flag1 === 0){
                    Results[j][k] = Results[j][k] + 0;
                }
                else if(flag1 === 1){    
                    Results[j][k] = Results[j][k] + 1;   
                }
                else{
                    Results[j][k] = 0;
                }
        }
    }

    //row 4
    
    else if(j===3){

        if(k===0){
            if(Player4-Player1 === 1 || Player4-Player1 === -2){
                flag1 = flag1 + 1;
            }

        if(flag1 === 0){
            Results[j][k] = Results[j][k] + 0;
        }
        else if(flag1 === 1){    
            Results[j][k] = Results[j][k] + 1;   
        }
        else{
            Results[j][k] = 0;
        }
            
        }

    else if(k===1){
                if(Player4-Player2 === 1 || Player4-Player2 === -2){
                    flag1 = flag1 + 1;
                }

            if(flag1 === 0){
                Results[j][k] = Results[j][k] + 0;
            }
            else if(flag1 === 1){    
                Results[j][k] = Results[j][k] + 1;   
            }
            else{
                Results[j][k] = 0;
            }
    }
    
    else if(k===2){
                if(Player4-Player3 === 1 || Player4-Player3 === -2){
                    flag1 = flag1 + 1;
                }

            if(flag1 === 0){
                Results[j][k] = Results[j][k] + 0;
            }
            else if(flag1 === 1){    
                Results[j][k] = Results[j][k] + 1;   
            }
            else{
                Results[j][k] = 0;
            }
    }

    else if(k===3){
    Results[j][k] = Results[j][k] + 0;        
    }
}
    }}

    var Str = JSON.stringify(Object.assign({}, Results));  // convert array to string
   var JsonFormat = JSON.parse(Str);  // convert string to json object
   
    //console.log(JsonFormat);
     finalResult.push(JsonFormat) 
   }
   res.send(finalResult);
});

app.listen(3000, () => {
    console.log("The server is up and running at port 3000");
});
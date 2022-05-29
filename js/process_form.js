window.onload = function(){
  btn.addEventListener("click", validateData);
  btn.addEventListener("click", removeElement);
  btn.addEventListener("click", newForm);


  //Form Element Array
  var elms = form.elements

  //Regex Array
  var regex = [

  //FIRST NAME REGEX
  /^[a-z ,.'-]+$/i,
  //LAST NAME REGEX
  /^[a-z ,.'-]+$/i,
  //PHONE NUMBER REGEX
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  //EMAIL REGEX
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  //WEBSITE ADDRESS REGEX
  /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    ]



  //Error Array
  var container = document.getElementsByClassName('error');

  //Error Text Array
  var text = ['Invalid first name ','Invalid last name ','Invalid phone number ', 'Invalid email', 'Invalid website address']


  function validateData() {
      //IF REGEX IS INVALID..
      for(var i = 0; i<container.length; i++) if(!regex[i].test(elms[i].value)) {
        if (container[i].childElementCount > 0) {
          container[i].removeChild(container[i].lastChild);}


                  var para = document.createElement('p');
                  container[i].appendChild(para);
                  para.appendChild(document.createTextNode(text[i]));
                  para.style.color= "red";
            
                  
                  
      //IF REGEX IS VALID
    } else  if(regex[i].test(elms[i].value)) {
              if (container[i].childElementCount > 0) {
                  container[i].removeChild(container[i].lastChild);}
                
                  var checkmark = document.createElement("img")
                  checkmark.src= "img/checkmark.png"
                  checkmark.setAttribute("id", "checkmark")
                  container[i].appendChild(checkmark);
                  


                  
    } else{
      //do nothin
  
    }
  }





  function removeElement(){ 
      for(var i = 0; i<container.length; i++) if (container[i].childElementCount > 1) {
              container[i].removeChild(container[i].lastChild);
          }
  } 

  function newForm(){
    if((regex[0].test(elms[0].value) == true && (regex[1].test(elms[1].value)) == true && (regex[2].test(elms[2].value)) ==true && (regex[3].test(elms[3].value)) ==true && (regex[4].test(elms[4 ].value))) == true){
      
      // Creating a form dynamically
      var div2 = document.getElementById('div2')
      var newFieldSet = document.createElement('fieldset')
      newFieldSet.className = 'custom-class';
      div2.appendChild(newFieldSet)

      var newLegend = document.createElement('legend')
      newFieldSet.appendChild(newLegend)
      newLegend.appendChild(document.createTextNode("Now answer!"));

      var form2 = document.createElement('form');
      form2.setAttribute("id", "form2")
      newFieldSet.appendChild(form2);
      
      

      //Creating first radio input question

      var q1 = document.createElement("p")
      q1.appendChild(document.createTextNode("Can you believe it is butter?"));

      //Creating answer 1
      var radio1 = document.createElement("input")
      radio1.setAttribute("class", "answer")
      radio1.setAttribute("id", "1")
      radio1.setAttribute("type", "radio");
      radio1.setAttribute("name", "radio1")
      radio1.setAttribute("value", "Yes")
      

      
      var Q1answer1= document.createElement("lable"); 
      Q1answer1.appendChild(document.createTextNode("Yes"))
      Q1answer1.setAttribute("class", "block")
      

      //Creating answer 2
      var radio2 = document.createElement("input")
      radio2.setAttribute("class", "answer")
      radio2.setAttribute("id", "2")
      radio2.setAttribute("type", "radio");
      radio2.setAttribute("name", "radio1")
      radio2.setAttribute("value", "No")


      var Q1answer2= document.createElement("lable"); 
      Q1answer2.appendChild(document.createTextNode("No"))

      //Creating  a divider 
      var divider = document.createElement("hr")
    


      //Creating second radio input question
      var q2 = document.createElement("p")
      q2.appendChild(document.createTextNode("Are you a butter person, a margarine person, or an oil person?"));

      //Creating answer 1 for question 2
      var radio11 = document.createElement("input")
      radio11.setAttribute("class", "answer")
      radio11.setAttribute("id", "3")
      radio11.setAttribute("type", "radio");
      radio11.setAttribute("name", "radio2")
      radio11.setAttribute("value", "butter person")
      

      
      var Q2answer1= document.createElement("lable"); 
      Q2answer1.appendChild(document.createTextNode("butter person"))
      Q2answer1.setAttribute("class", "block")
      


      //Creating answer 2 for question 2
      var radio12 = document.createElement("input")
      radio12.setAttribute("class", "answer")
      radio12.setAttribute("id", "4")
      radio12.setAttribute("type", "radio");
      radio12.setAttribute("name", "radio2")
      radio12.setAttribute("value", "margarine person")


      var Q2answer2= document.createElement("lable"); 
      Q2answer2.appendChild(document.createTextNode("margarine person"))

        //Creating answer 3 for question 2
        var radio13 = document.createElement("input")
        radio13.setAttribute("class", "answer")
        radio13.setAttribute("id", "5")
        radio13.setAttribute("type", "radio");
        radio13.setAttribute("name", "radio2")
        radio13.setAttribute("value", "oil person")
    
    
        var Q2answer3= document.createElement("lable"); 
        Q2answer3.appendChild(document.createTextNode("oil person"))



        // create a submit button
        var answerbtn = document.createElement("input");
        answerbtn.setAttribute("id", "btn2");
        answerbtn.setAttribute("type", "button");
        answerbtn.setAttribute("value", "Results");
        
    
      //Appending everything
      form2.appendChild(q1)
      form2.appendChild(radio1)
      form2.appendChild(Q1answer1)
      form2.appendChild(radio2)
      form2.appendChild(Q1answer2)
      form2.appendChild(divider)

      form2.appendChild(q2)
      form2.appendChild(radio11)
      form2.appendChild(Q2answer1)
      form2.appendChild(radio12)
      form2.appendChild(Q2answer2)
      form2.appendChild(radio13)
      form2.appendChild(Q2answer3)

      form2.appendChild(answerbtn)

      //Prevented the button from appending itself again by disabling it after it get clicked
      document.getElementById("btn").disabled = true
    } else{
      //do nothing
    }

  //Function below will only perform once all the questions have been answered.

    answerbtn.addEventListener("click", resultButton);

  function resultButton() {
    if((document.getElementById('1').checked == true || document.getElementById('2').checked == true) && (document.getElementById('3').checked == true || document.getElementById('4').checked == true) || document.getElementById('5').checked == true) {
      
      
      
    var oddCounter = 0
    var evenCounter = 0

      for(var i = 0; i<5; i++){

        if (document.getElementById('1').checked == true){
          oddCounter++;
          i+2;
        }else if(document.getElementById('2').checked == true){
          evenCounter++;
          i+2;
        }else if(document.getElementById('11').checked == true){
        oddCounter++;
        i++;
        }else if(document.getElementById('12').checked == true){
        oddCounter++;
        i++;
        }else if(document.getElementById('21').checked == true){
        oddCounter++;
        i++;
        }else if(document.getElementById('22').checked == true){
          oddCounter++;
          i++;
        }else if(document.getElementById('22').checked == true){
          oddCounter++;
          i++;
        }else{
          //do nothing
        }
        //Appending image 1 if odd counter is 3
        if (oddCounter == 3){


          var div2 = document.getElementById('div2')
          var div3 =  document.createElement("div")
          div2.appendChild(div3)

          var para1 = document.createElement('p')
          para1.appendChild(document.createTextNode("You got 'I Can't Believe It's Not Butter!'"))
          var img1 = document.createElement("img")
          img1.src= "img/notbutter.png"

          newFieldSet.appendChild(para1)
          newFieldSet.appendChild(img1)
        
        //Appending image 2 if even counter is 3
        }else if (evenCounter == 3) {

          var div2 = document.getElementById('div2')
          var div3 =  document.createElement("div")
          div2.appendChild(div3)

          var para1 = document.createElement('p')
          para1.appendChild(document.createTextNode("You got 'You'd Butter Believe It!'"))
          var img2 = document.createElement("img")
          img2.src= "img/butterbelieve.png"

          newFieldSet.appendChild(para1)
          newFieldSet.appendChild(img2)

        }
    
      

      }
      
          document.getElementById('1').checked
          document.getElementById('btn2').disabled = true
    }
  }
  }

}

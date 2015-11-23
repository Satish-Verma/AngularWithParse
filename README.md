# AngularWithParse
Demo to integrate Parse.com Data Services with AngularJS

#Add data to Parse.com
  Step1: Login to parse.com.
  
  Step2: Create a new App ex- 'ABC'.
  
  Step3: Click on Core to store data.
  
  Step4: Click on 'Add a Class', which is similiar to a table name, Choose Custom to make you own table like ex- LeaderBoard.
  
  Step5: Click on '+Col' to add column, choose type and enter name of columns one by one.
  
  Step6: Click on '+Row' to add rows.
  
  'Created At' and 'ObjectID' will be automatically generated.
  
  
#Add data to Parse.com
> Include the required libraries in your <HEAD> section:
   <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>
   <script src="http://www.parsecdn.com/js/parse-1.2.12.min.js"></script>

> Now it’s time to wire up this thing. In your Javascript, start by initializing Parse with your Application ID and Javascript Key. Alternatively, use my credentials while playing around:  

    Parse.initialize("XYZ", "MNP");
(where XYZ is your application id and MNP is your JavaScript key. You can get these IDs by clicking on Settings-> Keys.)

> Create a Parse Object by passing the class name as an argument.

  var object = new Parse.Object("LeaderBoard");
  
  use  object.fetch(fn()) to fetch the data from parse server.
  
  

> Send some value to server.

  - set the values to parse object.
  
      object.set("Name", 'aaaa');

		  object.set("Score", 34);

		  call object.save(null, fn()); to send data to server.
		  
		  
		   
> create object for query some data - 

  - var query = new Parse.Query("LeaderBoard");
  
  - set the searching data to query.
     query.equalTo("Name", 'aaaa');
  
  -  call query.find(fn()); to send query.
  

		   
  

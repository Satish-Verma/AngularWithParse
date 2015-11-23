Parse.initialize("Wo4ISHASDbMfiSSJrpnZaRhN3rwcsLWPea9JWwRo", "lobyMInbCWRfVehzv5IBGEADfCO3RNsiYkIqNH3G");

angular.module('AuthApp', [])
.run(['$rootScope', function($scope) {
	$scope.errors =[];
	$scope.leaderboard = [];
	$scope.choice= 3;
	$scope.sendQuery = function(){
		$scope.clearError();
		if($scope.postLeaderBoard.Name==''|| $scope.postLeaderBoard.Name==undefined)
		{
		  	$scope.errors.push('Please Enter Name!');
		  	return;
		  }
		$scope.leaderboard = [];
		var query = new Parse.Query("LeaderBoard");
	    query.equalTo("Name", $scope.postLeaderBoard.Name);
	    query.find({
	    success: function(results) {
	    	/*Actually "success" callback executes asynchronously and angular doesn't know when it happens. 
	    	To inform angular about the success callback I am calling $scope.$apply*/
	    	if(results.length==0)
	    		$scope.errors.push('No such leaderboard found!');
	    	$scope.$apply(function() {
	            for (var i = 0; i < results.length; i++)
	            {
	            	$scope.leaderboard.push(results[i]._serverData);
	            }
	        });
	     },
	    error: function(err) {
	    	if(!err._serverData)
	    		$scope.errors.push('Sorry, Some problem occured!');
	      console.log(err);
	    }
	  });
	    $scope.postLeaderBoard = {};
	}
	var object = new Parse.Object("LeaderBoard");
	var fetchAllData =function(){
		 
		  object.fetch({success: function(data) {
		    	/*Actually "success" callback executes asynchronously and angular doesn't know when it happens. 
		    	To inform angular about the success callback I am calling $scope.$apply*/
		    	$scope.$apply(function() {
		            	angular.copy(data._serverData.results, $scope.leaderboard);
		        });
		    },
		    error: function(err) {
		    	console.log(err);
		    }
		  });
	}
		$scope.fetch = function(){
			fetchAllData();
		}
		fetchAllData();
	 
	  
	  $scope.postLeaderBoard = {};
	  $scope.sendToParse = function(){
		  if($scope.postLeaderBoard.Name==''|| $scope.postLeaderBoard.Name==undefined || $scope.postLeaderBoard.Score==''|| $scope.postLeaderBoard.Score==undefined)
			  {
			  	$scope.errors.push('Please Enter both values!');
			  	return;
			  }
			 
		  object.set("Name", $scope.postLeaderBoard.Name);
		  object.set("Score", $scope.postLeaderBoard.Score);
		  object.save(null, {
			  success: function(leaderboard) {
			    // The object was saved successfully.
				  console.log(leaderboard);
				  $scope.$apply(function() {
			            	$scope.leaderboard.push(leaderboard._serverData);
			        });
				  $scope.postLeaderBoard = {};
			  },
			  error: function(leaderboard, error) {
			    // The save failed.
			    // error is a Parse.Error with an error code and message.
				  console.log(error);
			  }
			});
		  $scope.postLeaderBoard = {};
	  }
	  
	  $scope.clearError = function(){
		  $scope.errors = [];
	  }
}]);

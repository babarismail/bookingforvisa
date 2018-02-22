;(function() {
		var randomString = function(length) {
			
			var text = "";
		
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			
			for(var i = 0; i < length; i++) {
			
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			
			}
			
			return text;
		}

		// random string length
		var random = randomString(10);
		
		// insert random string to the field
		var elem = document.getElementById("id123-control37884622").value = random;
		
	})();
(function () {
	var app = angular.module('app', []);

	app.provider('books', function () {
		this.$get = function () {
			var appName = 'Book Logger';
			var appDesc = "Track which book you read";
			
			var version = '1.0';
			if (includeVersionInTitle) {
				appName += ' ' + version;
			}
			
			return {
				appName: appName,
				appDesc: appDesc
			};
		};
		var includeVersionInTitle = false;

		this.setIncludeVerionInTitle=function(value) {
			includeVersionInTitle = value;
		}
	});

	app.config(function(booksProvider) {
		booksProvider.setIncludeVerionInTitle(true);

	});
}());
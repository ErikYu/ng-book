var myApp=angular.module("myApp", []);
myApp.directive("myDirective", function(){
	return{
		restrict: "E",
		template: "<a href='http://www.zhihu.com'>Clik me to go to zhihu</a>",
		replace: true
	}
})

myApp.run(function($rootScope){
	$rootScope.rootProperty="root scope";
})
myApp.controller("ParentController", function($scope){
	$scope.parentProperty="parent scope";
})
myApp.controller("ChildController", function($scope){
	$scope.childProperty="child scope";
})


myApp.directive("secDirective", function(){
	return {
		restrict: "A",
		replace: true,
		scope: {
			myUrl: "@",//绑定策略
			myUrlText: "@"//绑定策略
		},
		template: '<a href={{myUrl}}>'+'{{myUrlText}}</a>'
	};
});
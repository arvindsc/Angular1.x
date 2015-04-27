******Angular Services******
****************************

Five different ways(functions) to create services
Provider versus services
Dependency annotations
	Provider()-->
	factory()-->
	service()-->
	value()-->wrapper on factory function
	constant()--> It is quite fundamentally different from the rest
	
Services are designed to be injected into the other component of your application
$provider knows that how to create the service. $provider service create a provider which contains a function 
which is used to create a service.

$provider.provider('book', function(){
	this.$get=function(){
		var appName='Book Logger';

	}	
});
Using $provider.provider()
* Call the "provider" function on the $provider service
	So the name of the service that we automatically injected into the other component is called "books".
	Name of the provider is BooksProvider
* Provider must define a "$get" function
	This is the fun called by the angular to create the service
* Service is the object returned from the $get function
* Configurable  via the underlying provider

Using $provider.factory()
	function factory(name,factoryFn,enforce){
		return provider(name,{
			$get:enforce !== false ? enforceReturnValue(name,factoryFn):factoryFn
		});
	}
* Simpler version of provider when additional configuration is unnecessary
* Register a service factory function that will return a service instance

Using $provider.service()
	function service(name,constructor){
		return factory(name,['$injector',function($injector){
			return $injector.instantiate(constructor);
		}]);
	}
* Calls factory function which calls provider function
* Treats function it is passed as a constructor
* Executes constructor function with "new" operator.


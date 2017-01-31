function ContactController() {
	var vm = this;
	vm.name = 'Steve Jobs';
 	vm.email = 'steve@apple.com';
 	vm.phone = '0987654321';

	this.changeName = function () {
		vm.name = 'Fred Fredburger! YES!'
	}
}

angular
	.module('app')
	.controller('ContactController', ContactController)
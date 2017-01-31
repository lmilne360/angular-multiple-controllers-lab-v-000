function StaffController() {
	var vm = this;
	vm.name = 'Some name';
	vm.email = "Some email";
	vm.phone = 'Phone'
}

angular.module('app').controller("StaffController", StaffController) 

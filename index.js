module.exports.validatePassword = function(str){
	 var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
     return re.test(str);
}
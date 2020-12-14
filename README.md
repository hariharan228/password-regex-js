## password-regex-js

### This package uses a regular expression, written in javascript to check the strength of a password.

#### Only function inside this pacakge is validatePassword(pwd), which takes password (string) as an argument.

Eg.
var reg = require('password-regex-js');

reg.validatePassword('Sample@123');

It returns true

reg.validatePassword('sample123');

It returns false.

Hence the first password is how a password should be.

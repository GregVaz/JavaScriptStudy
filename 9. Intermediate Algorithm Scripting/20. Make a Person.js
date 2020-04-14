/*


Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

TEST
Object.keys(bob).length should return 6.
Passed
bob instanceof Person should return true.
Passed
bob.firstName should return undefined.
Passed
bob.lastName should return undefined.
Passed
bob.getFirstName() should return "Bob".
Passed
bob.getLastName() should return "Ross".
Passed
bob.getFullName() should return "Bob Ross".
Passed
bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
Passed
bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
Passed
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
Passed
bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
Passed
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
*/

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFirstName = function() {
      return firstAndLast.split(' ')[0];
    };
    this.getLastName = function() {
      return firstAndLast.split(' ')[1];
    };
    
    this.setFirstName = function(first) {
      firstAndLast = first + ' ' + this.getLastName();
    }
  
    this.setLastName = function(last) {
      firstAndLast = this.getFirstName() + ' ' + last;
    }
  
    this.setFullName = function(full) {
      firstAndLast = full;
    }
  
    this.getFullName = function() {
      return firstAndLast;
    };
  
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFirstName());
  
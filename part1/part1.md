###Part 1a. A Quick Introduction
#question1
It will print 20.
This is because add is true, which means the code will go into the if statement at line 3. num1 is 10, num2 is also 10, therefore the result if the sum of the two, which is 20.

#question2
It will return 20. 
This is because we went through the if statement, so after the if statement we get to line 13, and the result value will stay the same.

#question3
It will print 20.

#question4
It will return an error.
This is because result is not defined. the variable result defined in line 5 uses let keyword, which means it is a block scope variable and only exists within the if statement.

#question5
It will return an error.
This is because result is not defined. the variable result defined in line 5 uses const keyword, which means it is a block scope variable and only exists within the if statement.

#question6
It will return an error.
This is because result is not defined. the variable result defined in line 5 uses const keyword, which means it is a block scope variable and only exists within the if statement.

###Part 1b. A Little More of a Challenge...
#question1
Line 12 will print 3. 
This is because in the for loop, i will begin with a value of 0 and increment until it gets to the value 
of prices.length. Because prices is [100, 200, 300], the length is 3. Therefore, after the for loop, the 
i ends with a value of 3. Because var keywords is a function scope variable, line 12 can find variable i and print out 3.

#question2
It will print 150. 
This is because each time the code go throught the if statement again, it will update the discountedPrice with the new i value. The last time the code go into the if statement, i is 2 and discount is 0.5, so discountedPrice will be prices[2]*(1-0.5) - 300 * 0.5 = 150.

#question3
It will print 150.
This is because finalPrice keeps getting updated each time the code goes into the for loop. The last time the code goes into the for loop, discountedPrice = 150, so finalPrice = Math.round(150*100)/100 = 15000/100 = 150.

#question4
This function will return [ 50, 100, 150 ].
This is because the returned value is a list, and each list contains the finalPrice with different i values, which is the disounted value for each element in the prices list.

#question5
It will run into an error.
This is because i is not defined. the let i only exists within the for loop becuase let keyword variables are block scoped.

#question6
It will run into an error.
This is because discountedPrice is not defined. the let discountedPrice degined on line 7 only exists within the for loop becuase let keyword variables are block scoped.

#question7
It will print 150.
This is because finalPrice keeps getting updated each time the code goes into the for loop. The last time the code goes into the for loop, discountedPrice = 150, so finalPrice = Math.round(150*100)/100 = 15000/100 = 150.

#question8
This function will return [ 50, 100, 150 ].
This is because the returned value is a list, and each list contains the finalPrice with different i values, which is the disounted value for each element in the prices list.

#question9
It will run into an error.
This is because i is not defined. the let i only exists within the for loop becuase let keyword variables are block scoped.

#question10
It will print 3.
This is because length = prices.length, and since prices = [100, 200, 300], it's length is 3 so variable length is 3.

#question11
This function will return [ 50, 100, 150 ].
This is because the returned value is a list, and each list contains the finalPrice with different i values, which is the disounted value for each element in the prices list.

#questiono12
A. student.name
B. student["Grad Year"]
C. student.greeting();
D. student["Favorite Teacher"].name
E. student.courseLoad[0]

#question13
A. '32'
Because integer 2 maps to their exact string representation '2', and '3'+'2' is '32'

B. 1
Because string 3 maps to integer value 3, and 3-2 = 1.

C. 3 
Because null converts to 0 in numeric conversion, and 3+0 = 3.

D. '3null'
Because null converts to string 'null', and '3' + 'null' = '3null'

E. 4
Because true maps to integer value 1, and 1 + 3 = 4.

F. 0
This is because false maps to number 0, and null maps to 0 as well. 0 + 0 = 0.

G. '3undefined'
Because undefined maps to string representation 'undefined', and '3' + 'undefined' = '3undefined'

H. NaN
Because there is a minus sign, the variables should be converted to numeric values. Since undefined becomes NaN, the output is also NaN.

#question14
A. true
When comparing values of different types, JavaScript converts the values to numbers. String '2' becaome a number 2, so this is true.

B. false
This is false because the string comparison uses "lexicographical" order and compared letter-by-letter. For the first letter, for the "lexicographical" order '2' is greater than '1', so this is false.

C. true
When comparing values of different types, JavaScript converts the values to numbers. String '2' becaome a number 2, so this is true because 2 == 2.

D. false
=== is a strict equality operator that checks the equality without type conversion. Because we have two different types here, this is false.

E. false
When comparing values of different types, JavaScript converts the values to numbers. true maps to numeric value 1, and 2 does not equal to 1, so this is false.

F. true
=== is a strict equality operator that checks the equality without type conversion. Because we uses Boolean on the left side, both side are Bollean values. Boolean(2) is true because 2 > 0, therefore true === true is true.

#question15
== is a regular equality check. It checks if two variables have the same value (the data type can be different).
=== is a strict equality operator that checks the equality without type conversion. 

#question17
[ 2, 4, 6 ]
The for loop will run 3 times, which is the length of the input array [1, 2, 3]. Each time in the for loop, doSomething is called with the input of the element 1, 2, and 3. doSomething doubles the input value, therefore this modifyArray just return a new array that with the value being the double of the value of the original input array.

#question19
1
4
3
2
This is because it will print out the values withoout setTimeout first in order. Then, it will print out the one with less timeout.


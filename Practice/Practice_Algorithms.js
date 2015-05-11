//Practice_Algorithms

// Introductory algorithm practice for bootcamp. These are my solutions prior to watching the instructor solutions.

/*(Random Array) Create an array X and fill the array with 10 values, 
each value being a random integer between 0 to 100.  For example when your program is done, X could be 
something like this: [35, 15, 3, 39, 53, 93, 25, 39, 59, 21].*/

function create_array()
{
	arr = [];

	for (i=0; i<10; i++)
	{
	    arr.push(Math.floor((Math.random() * 100) + 1));
	}
	console.log("This is array 1 [" + arr + "]");
	return arr;
}

/*(Swapping two values) Write a program that takes an array of numbers and returns an array where the 
first and last numbers in the array have been switched.For example say x = [2, 3, 5, 7, 6]. 
By the end of the program x, should be [6, 3, 5, 7, 2]. Do this without creating an empty array.*/

function swap_value()
{
	var swap_arr = create_array();
	var swap_num = swap_arr[0];
	
	swap_arr[0] = swap_arr[swap_arr.length-1];
	swap_arr[swap_arr.length-1] = swap_num;
	
	console.log("This is array 2 after the swap [" + swap_arr + "]");
}

/*(Reversing) Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), write a program that reverses the
 values in the array.  Once your program is done X should be in the reserved order.  Do this without creating 
 a temporary array.  Also do NOT use the reverse method but find a way to reverse the values in the array 
 (HINT: swap the first value with the last; second with the second to last and so forth).*/

 function rev_array()
 {
 	var rev_arr = create_array();
	var swap_num = 0;
	var j = rev_arr.length-1;

	 	for (var i=0; i<rev_arr.length/2; i++)
	 	{
	 		swap_num = rev_arr[i];
	 		rev_arr[i] = rev_arr[j];
	 		rev_arr[j] = swap_num;
	 		j--;
	 	}
	 	console.log("This is the array after being reversed [" + rev_arr + "]");
 }

 /*(Insert X in Y) Write a program that inserts a new number X at an index Y. 
 For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end of your 
 program array should be [1, 3, 10, 5, 7] (in other words we added '10' on index 2). 
 Check the output of your array once your program is completed to make sure it's working correctly.*/

 function insert_arr(x,y)
 {
 	var insert_arr = create_array();
 	var swap_num = 0;

 	insert_arr.push(y);

 	for (var i = insert_arr.length-1; i > x; i--)
 	{
 		swap_num = insert_arr[i];
 		insert_arr[i] = insert_arr[i-1];
 		insert_arr[i-1] = swap_num;
 	}
 	console.log("This is the array after inserting  " + y + " at " + x + " [" + insert_arr + "]");
 }

/*(Removing Negatives) Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), write a program that
 removes any negative values in the array.  Once your program is done X should be composed of just positive numbers.  
 Do this without creating a temporary array and only using pop method to remove any values in the array.*/

function create_array_range()
{
	arr = [];

	for (i=0; i<10; i++)
	{
	    arr.push(Math.floor((Math.random() * 110) -10));
	}
	console.log("This is array 1 [" + arr + "]");
	return arr;
}


function remove_neg()
{
	var arr = create_array_range();
	var swapNum = 0;

	for (var i = arr.length-1; i >=0; i--)
	{
		if (arr[i]<0)
		{
			for (var j = i; j < arr.length-1; j++) {
				swapNum = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = swapNum;
			}
			arr.pop();
		}
	}
	console.log("This is the array after removing negative numbers [" + arr + "]");
}

create_array();
swap_value();
rev_array();
insert_arr(3,999);
remove_neg();









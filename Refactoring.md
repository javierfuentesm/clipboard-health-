# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
I use a ternary operator to determine the value of data. If the input event is truthy, data is equal to the stringified version of the event. Otherwise, data is equal to the trivial partition key TRIVIAL_PARTITION_KEY.
I then use another ternary operator to determine the value of candidate. If the partitionKey of the input event exists, candidate is equal to it. Otherwise, candidate is equal to the hash of data.
Finally, I use a ternary operator to determine the value of partitionKey. If candidate is a string and its length is less than or equal to MAX_PARTITION_KEY_LENGTH, partitionKey is equal to candidate. If candidate is a string and its length is greater than MAX_PARTITION_KEY_LENGTH, partitionKey is equal to the hash of candidate. Otherwise, partitionKey is equal to TRIVIAL_PARTITION_KEY.
This refactored version of the function is more readable than the original in several ways:

I replaced multiple if statements with ternary operators, making the code more concise and easier to understand.
I made the code more modular by breaking it down into smaller expressions and using variables to store intermediate results.
I used meaningful variable names to clearly communicate the purpose of each variable.
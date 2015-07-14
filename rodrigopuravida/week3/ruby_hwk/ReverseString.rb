# Challenge 3 - Reverse a string

# Reverse a string in place. In other words, do not create a new string or use other methods on the string such as reverse. The goal of the problem is to use a loop and the string accessors to figure out which values to swap for other values. Below is the output.

# Enter a string:
# reverse_me
# em_esrever

def reverse_string()

	puts "Enter a string:"
	string_reverse = gets.chomp

    temp_letter = "";

    for i in 0..((string_reverse.length-1)/2)
    	# puts (string_reverse.length)/2

    	counter = (string_reverse.length-i-1).to_i
    	# puts counter
    	temp_letter = string_reverse[counter]
    	# puts temp_letter
    	string_reverse[counter] = string_reverse[i]
    	string_reverse[i] = temp_letter
   	
	end

	puts string_reverse


end

reverse_string()



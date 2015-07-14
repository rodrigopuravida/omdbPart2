# Create a simple calculator that first asks the user what method they would like to use (addition, subtraction, multiplication, division) and then asks the user for two numbers, returning the result of the method with the two numbers. Here is a sample prompt:

# What calculation would you like to do? (add, sub, mult, div)
# add
# What is number 1?
# 3
# What is number 2?
# 6
# Your result is 9

def calculator()

	puts "What kind of operation would you like to do - addition, subtraction, multiplication, division"
	choice = gets.chomp

	puts "What is number 1"
	num_1 = gets.chomp.to_i

	puts "What is number 2"
	num_2 = gets.chomp.to_i

	case choice
		when "addition"
			total = num_1 + num_2
			puts "Your result is #{total}"
		when "subtraction"
		  	total = num_1 - num_2
			puts "Your result is #{total}"
		when "multiplication"
		  	total = num_1 * num_2
			puts "Your result is #{total}"
		else
		  	total = num_1 / num_2
			puts "Your result is #{total}"
	end
end	

calculator()
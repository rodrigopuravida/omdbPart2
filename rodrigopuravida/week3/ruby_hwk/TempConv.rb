# Type '1' to convert from Celsius to Fahrenheit OR type '2' to convert from Fahrenheit to Celsius
# 1
# Enter Celsius Temperature:
# 24
# 24 degrees Celsius is equal to 75.2 degrees Fahrenheit

def temp_converter()

	puts "Enter 1 to convert from C to F or 2 to convert from F to C"
	choice = gets.chomp


	if choice == "1"
    	puts "Enter Celsius Temperature:"
    	temp = gets.chomp.to_i
    	temp_f = (temp * 1.8) + 32
    	puts "Fahrenheit Temperature: #{temp_f}"
	
	
	else
    	puts "Enter Fahrenheit Temperature:"
    	temp = gets.chomp.to_i
    	temp_c = (temp - 32) * 0.55
    	puts "Celsius Temperature: #{temp_c}"
	end
end

temp_converter()

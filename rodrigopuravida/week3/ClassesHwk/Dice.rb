# Dice

# Make a Dice class that takes a number_of_sides. Add a method called roll that randomly returns a number from 1 up to the number_of_sides.
# Create a get_rolls method that returns (not outputs) an array containing previous rolls.

class Dice

# Ask again on :  & difference between @ and @@
 attr_accessor :number_of_sides, :collection_rolls
 

  	def initialize number_of_sides
    	puts "Initializing"
    	@number_of_sides = number_of_sides
    	@collection_rolls = []
    
  	end

  	def roll  
		number = 1 + rand(@number_of_sides)
		get_rolls number
  	end

	def get_rolls rolled_number
		collection_rolls.push(rolled_number)
		return collection_rolls
	end

end
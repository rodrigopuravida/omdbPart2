# Starship

# Make a Starship class that takes a model and owner_name.

# Give your Starship a set_top_speed method and a get_top_speed that let you change and read the top_speed. Assume top_speed is just a number.

# Give your Starship an accelerate_to method that sets current_speed to some number, unless that number is greater than its top_speed.


class Starship

 attr_accessor :model,:owner_name
 attr_reader :current_speed

  def initialize model, owner_name
    puts "Initializing Starship"
    @model = model
    @owner_name = owner_name
    @top_speed = 100
    @current_speed = 50
  end

  def set_top_speed top_speed
    @top_speed = top_speed
  end

  def get_top_speed 
  	@top_speed   
  end

  def accelerate_to speed
  	return false unless @top_speed > speed
  	@current_speed = speed
    true
  end

 
end

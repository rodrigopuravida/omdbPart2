# Robot

# Create a class called Robot that takes name and purpose. Give each robot a greet method that returns "beep boop"

class Robot

  def initialize name, purpose
    puts "Initializing"
    @name = name
    @purpose = purpose  
  end

  def greet 
    puts "beep boop!"
  end
  
end
require_relative 'Item.rb'

# Bluray < Item
# Run time
# Director
# Producer


class Bluray < Item

	attr_accessor :name, :price, :director, :producer, :runTime

    def initialize name, price
        super(name,price)
        @director = 0
        @producer = ''
        @runTime = 0
        
    end
end
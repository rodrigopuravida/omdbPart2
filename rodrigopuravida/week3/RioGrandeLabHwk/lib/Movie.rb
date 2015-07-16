# You are on your own... good luck.
require_relative 'Bluray.rb'

class Movie < Bluray

	attr_accessor :name, :price

    def initialize name, price
        super(name,price)
        
    end
end
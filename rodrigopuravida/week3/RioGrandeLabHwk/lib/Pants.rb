require_relative 'ClothingItem.rb'

class Pants < ClothingItem


	attr_accessor :name, :price

	def initialize name, price
        super(name,price)

    end


end
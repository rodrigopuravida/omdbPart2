# You are on your own... good luck.
require_relative 'Book.rb'

class EBook < Book

	attr_accessor :name, :price

	def initialize name, price
        super(name,price)

    end

end

require_relative 'Item.rb'

# You are on your own... good luck.
class DigitalItem < Item

	attr_accessor :name, :price, :download_size
	attr_reader :quantity

	def initialize name, price, download_size = nil
        super(name,price)
        @quantity = 1
        @weight = -1
        @download_size = download_size || 0
    
    end

    def sell amount
        @quantity = 1
    end

    def stock amount
        @quantity = 1
    end

    def return amount
        @quantity = 1
    end

    
end

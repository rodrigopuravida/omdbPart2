require_relative 'Item.rb'
class ClothingItem < Item

	attr_accessor :name, :price
	attr_reader :sizes

	def initialize name, price
        super(name,price)
        @size = ["S", "M", "L", "XL"]
        @inventory = { "S" => 0, "M" => 0, "L" => 0, "XL" => 0 }
   end

   def sell amount, size
        if @quantity >= amount
            @quantity -= amount
            true
        else
            false
        end
    end

    def stock amount, size
        @quantity += amount
        true
    end

    def return amountReturned, size
        @quantity += amountReturned
    end

    def ship_price
        return false if weight == -1 
        ship_price_per_oz * @weight
    end

end




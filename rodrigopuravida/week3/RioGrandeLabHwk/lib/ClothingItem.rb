require_relative 'Item.rb'
class ClothingItem < Item

	attr_accessor :name, :price, :inventory
	attr_reader :size

	def initialize name, price
        super(name,price)
        @size = ["S", "M", "L", "XL"]
        @inventory = { "S" => 0, "M" => 0, "L" => 0, "XL" => 0 }
   end

   def sell amount, size
   		 
  		case size
   			when "S"
   				if @inventory["S"] >= amount
			  	@inventory["S"] = @quantity -= amount
			end
			  when "M"
			 	if @inventory["M"] >= amount		
			  	@inventory["M"] = @quantity -= amount
			end
			  when "L"
			  	if @inventory["L"] >= amount 		
			  	@inventory["L"] = @quantity -= amount
			end
			  when "XL"
				if @inventory["XL"] >= amount 		
			  	@inventory["XL"] = @quantity -= amount
			end
        end
        
    end

    def stock amount, size
        case size
   			when "S"
			  @inventory["S"] = @quantity += amount
			  when "M"
			  @inventory["M"] = @quantity += amount
			  when "L"
			  @inventory["L"] = @quantity += amount
			else
			  @inventory["XL"] = @quantity += amount
			end
        
    end

    def return amountReturned, size
        case size
   			when "S"
			  @inventory["S"] = @quantity += amountReturned
			  when "M"
			  @inventory["M"] = @quantity += amountReturned
			  when "L"
			  @inventory["L"] = @quantity += amountReturned
			else
			  @inventory["XL"] = @quantity += amountReturned
			end
    end

    def ship_price
        return false if weight == -1 
        ship_price_per_oz * @weight
    end

    def quantity size = nil

        return @inventory if size == nil
        @inventory[size] 

    end

end




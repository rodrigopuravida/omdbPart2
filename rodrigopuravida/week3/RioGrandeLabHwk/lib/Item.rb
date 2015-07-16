class Item
    attr_reader :quantity, :ship_price_per_oz
    attr_accessor :name, :price, :description, :weight

    def initialize name, price, weight = nil
        @name = name
        @price = price
        @quantity = 0
        @description = ""
        @ship_price_per_oz = 1.2
        @weight = weight || 0

    end

    def sell amount
        if @quantity >= amount
            @quantity -= amount
            true
        else
            false
        end
    end

    def stock amount
        @quantity += amount
        true
    end

    def return amountReturned
        @quantity += amountReturned
    end

    def ship_price
        return false if weight == -1 
        ship_price_per_oz * @weight
    end
end



# def initialize width,height=nil
#     @width = width
#     @height = height || width
#   end
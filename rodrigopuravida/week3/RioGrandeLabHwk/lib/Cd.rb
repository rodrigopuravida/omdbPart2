require_relative 'Item.rb'

# CD < Item
# Tracks (number of)
# Artist
# Run time

class Cd < Item

	attr_accessor :name, :price, :tracks, :artist, :runTime

    def initialize name, price
        super(name,price)
        @tracks = 0
        @artist = ''
        @runTime = 0
    end
end
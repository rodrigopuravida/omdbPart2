# You are on your own... good luck.
require_relative 'Item.rb'

# CD < Item
# Tracks (number of)
# Artist
# Run time

class Song < DigitalItem

	attr_accessor :name, :price, :artist, :runTime

    def initialize name, price
        super(name,price)
        @artist = ''
        @runTime = 0
    end
end
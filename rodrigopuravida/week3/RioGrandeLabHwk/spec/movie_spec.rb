# You are on your own... good luck.
require_relative 'spec_helper'
require_relative '../lib/Movie.rb'

# Bluray < Item
# Run time
# Director
# Producer

describe Movie do

	before(:context) do
    @movie = Movie.new('BlackHole',12)
  end

  #check inilization
  describe "Initialization" do
    it "is an instance of the EBook class" do
      expect(@movie).to be_instance_of(Movie)
    end
  end

 describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@movie).to be_kind_of(Item)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@movie.quantity).to eq(0)
    end
    it "should be able to get and set name" do
      @movie.name="New Name"
      expect(@movie.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @movie.price=44.99
      expect(@movie.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@movie.description).to eq("")
      @movie.description="test"
      expect(@movie.description).to eq("test")
  	end
  	it "should be able to get and set Director" do
      @movie.director='Steven S'
      expect(@movie.director).to eq('Steven S')
    end 
    it "should be able to get and set Producer" do
      @movie.producer='YoMoma'
      expect(@movie.producer).to eq('YoMoma')
    end 
    it "should be able to get and set RunTime" do
      @movie.runTime='60'
      expect(@movie.runTime).to eq('60')
    end 
end


end
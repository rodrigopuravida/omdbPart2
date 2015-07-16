require_relative 'spec_helper'
require_relative '../lib/Shirt.rb'

describe Shirt do

  before(:context) do
    @shirt = Shirt.new('Shirt',5.99)
  end

  #check inilization
  describe "Initialization" do
    it "is an instance of the Book class" do
      expect(@shirt).to be_instance_of(Shirt)
    end
  end

  #check that it is an extended from Item
  describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@shirt).to be_kind_of(ClothingItem)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@shirt.inventory['S']).to eq(0)
    end
    it "should be able to get and set name" do
      @shirt.name="New Name"
      expect(@shirt.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @shirt.price=44.99
      expect(@shirt.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@shirt.description).to eq("")
      @shirt.description="test"
      expect(@shirt.description).to eq("test")
    end  
 end
 describe "Functionality" do

    it "should be able to retrieve array of sizes" do
      expect(@shirt.size.length()).to eq(4)
    end  
    it "should be able to retrieve first size is S" do
      expect(@shirt.size[0]).to eq('S')
    end  
    it "should be able to retrieve 2nd size is M" do
      expect(@shirt.size[1]).to eq('M')
    end 
    it "should be able to retrieve 3rd size is L" do
      expect(@shirt.size[2]).to eq('L')
    end 
    it "should be able to retrieve 4th size is XL" do
      expect(@shirt.size[3]).to eq('XL')
    end 
    it "should be able to stock based on size" do
      @shirt.stock 3, 'L'
      expect(@shirt.inventory['L']).to eq(3)
    end 
    it "should be able to retrieve quantity based on size" do
      expect(@shirt.quantity['L']).to eq(3)
    end 
    it "should be able to retrieve inventort hash if not size given" do
      expect(@shirt.inventory.length()).to eq(4)
    end 
    it "should be able to stock and stock to show the amount on that size" do
      @c4 = Shirt.new('Shirt',5.99)
      @c4.stock 5, 'S'
      expect(@c4.inventory['S']).to eq(5)
    end 
    it "should be able to sell and stock to show the amount diminished on that size" do
      @c4 = Shirt.new('Shirt',5.99)
      @c4.stock 5, 'S'
      @c4.sell 2, 'S'
      expect(@c4.inventory['S']).to eq(3)
    end 
    it "should be able to return and stock to show the amount increased on that size" do
      @c4 = Shirt.new('Shirt',5.99)
      @c4.stock 5, 'S'
      @c4.return 2, 'S'
      expect(@c4.inventory['S']).to eq(7)
    end 
  end
  

end
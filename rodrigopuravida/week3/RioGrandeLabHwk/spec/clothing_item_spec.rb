require_relative 'spec_helper'
require_relative '../lib/ClothingItem.rb'

describe ClothingItem do

  before(:context) do
    @clothingItem = ClothingItem.new('Shirt',5.99)
  end

  #check inilization
  describe "Initialization" do
    it "is an instance of the Book class" do
      expect(@clothingItem).to be_instance_of(ClothingItem)
    end
  end

  #check that it is an extended from Item
  describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@clothingItem).to be_kind_of(Item)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@clothingItem.quantity).to eq(0)
    end
    it "should be able to get and set name" do
      @clothingItem.name="New Name"
      expect(@clothingItem.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @clothingItem.price=44.99
      expect(@clothingItem.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@clothingItem.description).to eq("")
      @clothingItem.description="test"
      expect(@clothingItem.description).to eq("test")
    end   
    it "should be able to retrieve array of sizes" do
      expect(@clothingItem.sizes.length()).to eq(4)
    end  
    it "should be able to retrieve first size is S" do
      expect(@clothingItem.sizes[0]).to eq('S')
    end  
    it "should be able to retrieve 2nd size is M" do
      expect(@clothingItem.sizes[1]).to eq('M')
    end 
    it "should be able to retrieve 3rd size is L" do
      expect(@clothingItem.sizes[2]).to eq('L')
    end 
    it "should be able to retrieve 4th size is XL" do
      expect(@clothingItem.sizes[3]).to eq('XL')
    end 
  end
  

end
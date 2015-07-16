require_relative 'spec_helper'
require_relative '../lib/Pants.rb'

describe Pants do

  before(:context) do
    @pants = Pants.new('Shirt',5.99)
  end

  #check inilization
  describe "Initialization" do
    it "is an instance of the Book class" do
      expect(@pants).to be_instance_of(Pants)
    end
  end

  #check that it is an extended from Item
  describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@pants).to be_kind_of(ClothingItem)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@pants.inventory['S']).to eq(0)
    end
    it "should be able to get and set name" do
      @pants.name="New Name"
      expect(@pants.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @pants.price=44.99
      expect(@pants.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@pants.description).to eq("")
      @pants.description="test"
      expect(@pants.description).to eq("test")
    end  
   end

   describe "Functionality" do

    it "should be able to retrieve array of sizes" do
      expect(@pants.size.length()).to eq(4)
    end  
    it "should be able to retrieve first size is S" do
      expect(@pants.size[0]).to eq('S')
    end  
    it "should be able to retrieve 2nd size is M" do
      expect(@pants.size[1]).to eq('M')
    end 
    it "should be able to retrieve 3rd size is L" do
      expect(@pants.size[2]).to eq('L')
    end 
    it "should be able to retrieve 4th size is XL" do
      expect(@pants.size[3]).to eq('XL')
    end 
    it "should be able to stock based on size" do
      @pants.stock 3, 'L'
      expect(@pants.inventory['L']).to eq(3)
    end 
    it "should be able to retrieve quantity based on size" do
      expect(@pants.quantity['L']).to eq(3)
    end 
    it "should be able to retrieve inventort hash if not size given" do
      expect(@pants.inventory.length()).to eq(4)
    end 
    it "should be able to stock and stock to show the amount on that size" do
      @c4 = Pants.new('Shirt',5.99)
      @c4.stock 5, 'S'
      expect(@c4.inventory['S']).to eq(5)
    end 
    it "should be able to sell and stock to show the amount diminished on that size" do
      @c4 = Pants.new('Shirt',5.99)
      @c4.stock 5, 'S'
      @c4.sell 2, 'S'
      expect(@c4.inventory['S']).to eq(3)
    end 
    it "should be able to return and stock to show the amount increased on that size" do
      @c4 = Pants.new('Shirt',5.99)
      @c4.stock 5, 'S'
      @c4.return 2, 'S'
      expect(@c4.inventory['S']).to eq(7)
    end 
  end

  
end
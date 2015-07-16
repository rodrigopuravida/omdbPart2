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
      expect(@shirt.quantity).to eq(0)
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
  

end
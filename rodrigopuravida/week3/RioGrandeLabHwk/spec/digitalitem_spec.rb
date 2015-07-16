require_relative 'spec_helper'
require_relative '../lib/DigitalItem.rb'

describe DigitalItem do

  before(:context) do
    @digitalItem = DigitalItem.new('MyDigi',90)
  end

  #check inilization
  describe "Initialization" do
    it "is an instance of the DigitalItem class" do
      expect(@digitalItem).to be_instance_of(DigitalItem)
    end
  end

  #check that it is an extended from Item
  describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@digitalItem).to be_kind_of(Item)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@digitalItem.quantity).to eq(1)
    end
    it "should be able to get and set name" do
      @digitalItem.name="New Name"
      expect(@digitalItem.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @digitalItem.price=44.99
      expect(@digitalItem.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@digitalItem.description).to eq("")
      @digitalItem.description="test"
      expect(@digitalItem.description).to eq("test")
    end 
end

	describe "Special Cases" do
	it "should not be able to set default quantity" do
	 expect{@digitalItem.quantity = 1}.to raise_error NoMethodError
	end
     
    end

    it "quantity does not decrease when sold" do
      result = @digitalItem.sell 1
      expect(@digitalItem.quantity).to eq(1)
     
    end

    it "quantity does not decrease in stock" do
      result = @digitalItem.stock 1
      expect(@digitalItem.quantity).to eq(1)
     
    end

    it "quantity does not increase when items are returned" do
      result = @digitalItem.return 1
      expect(@digitalItem.quantity).to eq(1)
     
    end

    it "weight shuold be 0 for digital item" do
      expect(@digitalItem.weight).to eq(-1)
  	end

	it "should return false since weight = -1" do
      expect(@digitalItem.ship_price).to eq(false)
  	end

  	it "should be able to set property download_size" do
  	  result = @digitalItem.download_size = 100	
      expect(result).to eq(100)
  	end

  	it "should be able to get property download_size" do
  	  result = @digitalItem.download_size	
      expect(result).to eq(100)
  	end

  	it "should be able to create object with download_sizze property" do
  	  @digitalItem2 = DigitalItem.new('MyDigi',90, 100)	
      expect(@digitalItem2.download_size).to eq(100)
  	end

  	it "should be able to create object with download_sizze nil" do
  	  @digitalItem3 = DigitalItem.new('MyDigi',90)	
      expect(@digitalItem3.download_size).to eq(0)
  	end



	# end


  

end
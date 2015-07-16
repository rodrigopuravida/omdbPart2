# You are on your own... good luck.
require_relative 'spec_helper'
require_relative '../lib/EBook.rb'

describe EBook do

before(:context) do
    @eBook = EBook.new('EBook',98)
  end

  #check inilization
  describe "Initialization" do
    it "is an instance of the EBook class" do
      expect(@eBook).to be_instance_of(EBook)
    end
  end

  #check that it is an extended from Item
  describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@eBook).to be_kind_of(Item)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@eBook.quantity).to eq(0)
    end
    it "should be able to get and set name" do
      @eBook.name="New Name"
      expect(@eBook.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @eBook.price=44.99
      expect(@eBook.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@eBook.description).to eq("")
      @eBook.description="test"
      expect(@eBook.description).to eq("test")
    end  
    it "should be able to get and set pages" do
      @eBook.pages=100
      expect(@eBook.pages).to eq(100)
    end  
    it "should be able to get and set author" do
      @eBook.author='Homer'
      expect(@eBook.author).to eq('Homer')
    end   
    

  end
  

end
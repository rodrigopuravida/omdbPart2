require_relative 'spec_helper'
require_relative '../lib/Book.rb'

describe Book do

  before(:context) do
    @book = Book.new('Hamlet',5.99)
  end

  #check inilization
  describe "Initialization" do
    it "is an instance of the Book class" do
      expect(@book).to be_instance_of(Book)
    end
  end

  #check that it is an extended from Item
  describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@book).to be_kind_of(Item)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@book.quantity).to eq(0)
    end
    it "should be able to get and set name" do
      @book.name="New Name"
      expect(@book.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @book.price=44.99
      expect(@book.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@book.description).to eq("")
      @book.description="test"
      expect(@book.description).to eq("test")
    end  
    it "should be able to get and set pages" do
      @book.pages=100
      expect(@book.pages).to eq(100)
    end  
    it "should be able to get and set author" do
      @book.author='Homer'
      expect(@book.author).to eq('Homer')
    end   
    

  end
  

end
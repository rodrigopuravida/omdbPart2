require_relative 'spec_helper'
require_relative '../lib/Bluray.rb'

# Bluray < Item
# Run time
# Director
# Producer

describe Bluray do

	before(:context) do
    @bluray = Bluray.new('Madonna',12)
  end

  describe "Initialization" do
    it "is an instance of the Bluray class" do
      expect(@bluray).to be_instance_of(Bluray)
    end
  end

  describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@bluray).to be_kind_of(Item)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@bluray.quantity).to eq(0)
    end
    it "should be able to get and set name" do
      @bluray.name="New Name"
      expect(@bluray.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @bluray.price=44.99
      expect(@bluray.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@bluray.description).to eq("")
      @bluray.description="test"
      expect(@bluray.description).to eq("test")
  	end
  	it "should be able to get and set Director" do
      @bluray.director='Steven S'
      expect(@bluray.director).to eq('Steven S')
    end 
    it "should be able to get and set Producer" do
      @bluray.producer='YoMoma'
      expect(@bluray.producer).to eq('YoMoma')
    end 
    it "should be able to get and set RunTime" do
      @bluray.runTime='60'
      expect(@bluray.runTime).to eq('60')
    end 
end


end
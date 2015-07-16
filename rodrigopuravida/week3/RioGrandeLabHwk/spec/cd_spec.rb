require_relative 'spec_helper'
require_relative '../lib/Cd.rb'

describe Cd do

  before(:context) do
    @cd = Cd.new('Madonna',12)
  end

  #check inilization
  #check inilization
  describe "Initialization" do
    it "is an instance of the Cd class" do
      expect(@cd).to be_instance_of(Cd)
    end
  end
  #check that it is an extended from Item
  #check that it is an instance of Cd
  #check that it is an extended from Item
  describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@cd).to be_kind_of(Item)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@cd.quantity).to eq(0)
    end
    it "should be able to get and set name" do
      @cd.name="New Name"
      expect(@cd.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @cd.price=44.99
      expect(@cd.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@cd.description).to eq("")
      @cd.description="test"
      expect(@cd.description).to eq("test")
  	end
  	it "should be able to get and set Tracks" do
      @cd.tracks=4
      expect(@cd.tracks).to eq(4)
    end 
    it "should be able to get and set Artist" do
      @cd.artist='Beatles'
      expect(@cd.artist).to eq('Beatles')
    end 
    it "should be able to get and set RunTime" do
      @cd.runTime='60'
      expect(@cd.runTime).to eq('60')
    end 
end
  #check getters and setters

end
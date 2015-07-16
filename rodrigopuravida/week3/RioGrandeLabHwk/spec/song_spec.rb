# You are on your own... good luck.
require_relative 'spec_helper'
require_relative '../lib/Song.rb'

describe Song do

  before(:context) do
    @song= Song.new('Madonna',12)
  end

  #check inilization
  #check inilization
  describe "Initialization" do
    it "is an instance of the Cd class" do
      expect(@song).to be_instance_of(Song)
    end
  end
  #check that it is an extended from Item
  #check that it is an instance of Cd
  #check that it is an extended from Item
  describe "Initialization" do
    it "is a kind descendant of the Item class" do
      expect(@song).to be_kind_of(DigitalItem)
    	end
	end

	describe "Accessors" do
    it "should be able to get quantity" do
      expect(@song.quantity).to eq(1)
    end
    it "should be able to get and set name" do
      @song.name="New Name"
      expect(@song.name).to eq("New Name")
    end   
    it "should be able to get and set price" do
      @song.price=44.99
      expect(@song.price).to eq(44.99)
    end   
    it "should be able to get and set description" do
      expect(@song.description).to eq("")
      @song.description="test"
      expect(@song.description).to eq("test")
  	end
    it "should be able to get and set Artist" do
      @song.artist='Beatles'
      expect(@song.artist).to eq('Beatles')
    end 
    it "should be able to get and set RunTime" do
      @song.runTime='60'
      expect(@song.runTime).to eq('60')
    end 
end
  #check getters and setters

end
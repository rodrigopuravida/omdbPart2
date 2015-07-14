# Challenge 4 - Bank Transactions

# Create a prompt that asks the user if they would like to display their balance, withdraw or deposit. Write three methods to perform these calculations and output the result to the user. Here is a sample output:

# Your current balance is
# 4000
# What would you like to do? (deposit, withdraw, check_balance)
# deposit
# How much would you like to deposit?
# 1000
# Your current balance is 5000
# Are you done?
# yes
# Thank you!

def bank_transactions() 

	input = nil
	balance = 4000
	until input == 'yes'

		puts "Would you like to see your balance, withdraw or deposit?"
		choice = gets.chomp

		case choice
				when "balance"
					puts "Your current balance is 4000"
				when "withdraw"
				  	puts "How much would you like to withdraw"
					input = gets.chomp.to_i
					total = balance - input
					puts "Your new balance is #{total}"
				else
					puts "How much would you like to deposit"
				  	input = gets.chomp.to_i
				  	total = balance + input
					puts "Your new balance is #{total}"
		end

		puts "Are you done?"
		input = gets.chomp
		puts "Thank you!"


	end

end

bank_transactions

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TOKEN;


// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true
});

//Start bot

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(
        chatId,
        `
			Welcome at <b>Majestic test Bot</b>, thank you for trying out my service
			
			This bot can be used for different work like investment, coin doubling and even airdrop work...

			This bot will take you thorugh my demo telegram bot

			Click /menu to get started


        `, {
            parse_mode: 'HTML',
        }
    );
});
////////////////////Menus////////////////////
//Main Menu
const menu= {
        'reply_markup': {
            'keyboard': [['/Deposit', '/Withdraw'], ['/Balance', '/Profile'], ['/Referrals']],
            resize_keyboard: true,
            one_time_keyboard: true,
            force_reply: true,
        }
    }

//Vote

const vote = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: 'YES',
                    callback_data: JSON.stringify({
                        'command': 'mycommand1',
                        'answer': 'vote_yes'
                    })
                },
                {
                    text: 'NO',
                    callback_data: JSON.stringify({
                        'command': 'mycommand1',
                        'answer': 'vote_no'
                    })
                },
            ]
        ]
    }
};
	
/////////////////////////////////////////

////////////////Actions//////////////////

bot.onText(/\/menu/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Select an action below', menu);
});

bot.onText(/\/Deposit/, (msg,match) => {
	
	const chatId = msg.chat.id;
	const username = msg.chat.username;
	
	
	bot.sendMessage(
        chatId,
        `
			Weldone ${username},
			
			Send the coin you want to invest to the wallet below, balance would be updated automatically once the blockchain has confirm transaction,
			
			wallet
			
			/Deposit - Deposit fund into your account to start earning double every 1hour
			/Withdraw - Withdraw your balance
			/Balance - View you account balance
			/Profile - View your profile
			/Referrals - View your referrals
			/Vote - How do you like my bot?
        `, {
            parse_mode: 'HTML',
        }
    );
});

bot.onText(/\/Withdraw/, (msg) => {
	const chatId = msg.chat.id;
	
    bot.sendMessage(
        chatId,
        `
			You must have atleast $100 in your wallet befor you can process a withdrawal
			
			/Deposit - Deposit fund into your account to start earning double every 1hour
			/Withdraw - Withdraw your balance
			/Balance - View you account balance
			/Profile - View your profile
			/Referrals - View your referrals
			/Vote - How do you like my bot?

        `, {
            parse_mode: 'HTML',
        }
    );
});

bot.onText(/\/Balance/, (msg) => {
	
	const chatId = msg.chat.id;
	
    bot.sendMessage(
        chatId,
        `
			Your balance as at time is $0.00
			
			Refer your friends or deposit into your account to start earning
			
			/Deposit - Deposit fund into your account to start earning double every 1hour
			/Withdraw - Withdraw your balance
			/Balance - View you account balance
			/Profile - View your profile
			/Referrals - View your referrals
			/Vote - How do you like my bot?

        `, {
            parse_mode: 'HTML',
        }
    );
});

bot.onText(/\/Profile/, (msg) => {
	
	const chatId = msg.chat.id;
	const username = msg.chat.username;
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	
	
    bot.sendMessage(
        chatId,
        `
			Hello ${username}
			
			You joined the investment on ${date}
			
			Your present rank is novice (one star)
			
			/Deposit - Deposit fund into your account to start earning double every 1hour
			/Withdraw - Withdraw your balance
			/Balance - View you account balance
			/Profile - View your profile
			/Referrals - View your referrals
			/Vote - How do you like my bot?

        `, {
            parse_mode: 'HTML',
        }
    );
});

bot.onText(/\/Referrals/, (msg) => {
	
	const chatId = msg.chat.id;
	const username = msg.chat.username;
	
    bot.sendMessage(
        chatId,
        `
			Hello ${username}
			
			You have referred a total of 5 people
			
			Referral earrnings : $100.00
			
			Share your referral link below and start earrning
			
			link
			
			/Deposit - Deposit fund into your account to start earning double every 1hour
			/Withdraw - Withdraw your balance
			/Balance - View you account balance
			/Profile - View your profile
			/Referrals - View your referrals
			/Vote - How do you like my bot?

        `, {
            parse_mode: 'HTML',
        }
    );
});




bot.onText(/\/Vote/, (msg) => {
	
	const chatId = msg.chat.id;
	
    bot.sendMessage(msg.chat.id, 'Do you like my bot?', vote);
});

bot.onText(/\/vote_yes/, (msg) => {
	
	const chatId = msg.chat.id;
	
    bot.sendMessage(msg.chat.id, 'Thank you vey much, you can contact me to make yours');
});

bot.onText(/\/vote_no/, (msg) => {
	
	const chatId = msg.chat.id;
	
    bot.sendMessage(msg.chat.id, 'Aha why na!!');
});






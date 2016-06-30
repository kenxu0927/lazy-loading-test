export const IMG_BASE_URL = 'http://127.0.0.1:3333/assets/images'
export const BREAKPOINT_SM = '40em'
export const BREAKPOINT_MD = '52em'
export const BREAKPOINT_LG = '64em'
export const initialFilter = {	
	currentScore: {type: 'numRange', value: {min: 0, max: 10}},
	currentTitle: {type: 'text', value: ''},
	itemPrice: {type: 'numRange', value: {min: 0, max: Infinity}},
	channel: {type: 'category', value: 'All Marketplaces'},
	categories: {type: 'category', value: '---'},
	seller: {type: 'category', value: '---'}
}
export const eBaySites = ['eBay.com', 'eBay.ca', 'eBay,co.uk', 'eBay.com.au', 'eBay.fr', 'eBay.de', 'eBay.it', 'eBayMotors.com', 'All Marketplaces']
export const specialToken = '~!@#$%^*(\\)_+={}[\\]\\|\\\\\\/<>?;,\'"'
export const lowScoreThres = -0.1
export const maxSuggestions = 20
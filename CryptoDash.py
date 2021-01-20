import os

from binance.client import Client 

api_key = os.environ.get('binance_api')
api_secret = os.environ.get('binance_secret')

client = Client(api_key, api_secret)

#balance for acct asset LINK
print(client.get_asset_balance(asset = 'LINK'))

#get latest price
link_price = client.get_symbol_ticker(symbol='LINKUSDT')

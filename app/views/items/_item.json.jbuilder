json.extract! item, :id, :title, :artist, :description, :starting_bid, :image_url, :highest_bid_amount
json.url item_url(item, format: :json)

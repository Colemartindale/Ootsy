# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
Listing.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('listings')

user1 = User.create(email: 'phil@gmail.com', password: '123456')
user2 = User.create(email: 'tim@hotmail.com', password: '123456')
user3 = User.create(email: 'lizzo@gmail.com', password: '123456')
user4 = User.create(email: 'olive@cox.net', password: '123456')
user5 = User.create(email: 'ernest@yo.com', password: '123456')
demo = User.create(email: 'demo-email', password: 'demopw')

# Listing.create!(product_name: '', description: '', price: , category: "", quantity: , tags: "", shop_id: )

# jewelry & accessories
jewelry1 = Listing.create!(product_name: 'Real Leather Belt - Wood Buckle Forest Engraving', description: 'Our Leather snap belts are handcrafted with much love right here in our studio, the entire process is done by hand, from cutting the straps, to dying the leather. We use the finest full grain leather to produce our belts, and each one comes standard with a basic buckle, this makes it the perfect belt to mix and match with all of your regan flegan belt buckles. Please note, that since this is a handmade product the color and finish may vary slightly from the image shown.', price: 29.99, category: 'Jewelry & Accessories', quantity: 7, tags: 'accessories, clothing, belt, leather', shop_id: 1)
    jewelry1.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-belt.jpg"), filename: "jewelry-belt.jpg")

jewelry2 = Listing.create!(product_name: 'Mens Feather Earring', description: 'Silver color feather earring for men. Comes with eco-friendly gift wrap, ready to be a present.', price: 16.71, category: "Jewelry & Accessories", quantity: 20, tags: 'earring, jewelry, silver, feather', shop_id: 1)
    jewelry2.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-earring.jpg"), filename: "jewelry-earring.jpg" )

jewelry3 = Listing.create!(product_name: 'SONIC THE HEDGEHOG X KING ICE - KNUCKLES NECKLACE', description: "Knuckles the echidna is one of the most loved characters of the Sonic the Hedgehog video game series. This piece features multiple layers of hair around his face, each packed with hundreds of handset stones, staying true to what makes Knuckles so iconic.", price: 150.00, category: "Jewelry & Accessories", quantity: 10, tags: 'necklace, knuckles, sonic, jewelry', shop_id: 1)
    jewelry3.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-knuckles.jpeg"), filename: "jewelry-knuckles.jpeg")

jewelry4 = Listing.create!(product_name: 'Sun and Moon Necklace, Sunburst Necklace | Crescent Moon Necklace, Gold Sun Necklace | Sterling Silver Sun Pendant, Sun Charm, Golden Sun', description: 'Handmade item, Materials: Gold, Rose gold, Silver, Closure: Spring ring, Chain style: Cable, Adjustable length, Style: Minimalist, Made to Order', price: 19.79, category: "Jewelry & Accessories", quantity: 15, tags: 'necklace, jewelry, gold, chain', shop_id: 1)
    jewelry4.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-necklace.jpg"), filename: "jewelry-necklace.jpg")

jewelry5 = Listing.create!(product_name: '14k Gold Emerald Ring, Emerald Cut Emerald Ring, Minimalist Emerald Engagement Ring, 20th Anniversary Ring, May Birthstone Ring,', description: "This beautiful Emerald Gold Ring was handmade in Melt'm Jewelry Design Studio in California using 14k solid yellow gold band and 6x4mm emerald cut lab grown emerald stone. Emerald is featuring in 14k gold prong setting.", price: 240.00, category: "Jewelry & Accessories", quantity: 3, tags: 'ring, gold, jewelry, emerald', shop_id: 1)
    jewelry5.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-ring.jpg"), filename: "jewelry-ring.jpg")


# clothing & shoes
clothes1 = Listing.create!(product_name: "Newborn Baby Boy Coming Home Outfit Set up to 3 Items. Suspender Bow Tie Bodysuit, Leg Warmers & Knit Newsboy Hat. Easter Valentines Slate", description: "The Set of 3 Includes: Newsboy Hat, Leg Warmers, Suspender Bow Tie Bodysuit", price: 10.45, category: "Clothing & Shoes", quantity: 30, tags: "baby, clothes, infant, apparel", shop_id: 2)
    clothes1.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-baby.jpg"), filename: "clothes-baby.jpg" )

clothes2 = Listing.create!(product_name: "Combat Boots - Vintage Art | Vincent van Gogh: Almond Blossom | Custom Shoes, Vegan Leather Lace Up Boots, 90s Boots, 2000s Boots", description: "All of our Fashion Combat Boots are custom-made-to-order and handcrafted to the highest quality standards. - Made from vegan-friendly faux leather with a double-sided print and rounded toe construction. - Lace-up closure for a snug fit. - Soft textile lining with sturdy construction for maximum comfort. - High-quality rubber outsole for traction and exceptional durability. *Please note that colors may vary slightly from printed items to images on screen due to different lighting, screen resolutions, and printer calibration.", price: 79.65, category: "Clothing & Shoes", quantity: 20, tags: "boots, shoes, clothing, floral", shop_id: 2)
    clothes2.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-boots.jpg"), filename: "clothes-boots.jpg" )

clothes3 = Listing.create!(product_name: "Hatphile Pattern Multi Color Jacquard 5 Panel Hat Camp Cap 7 1/4 58 cm Large", description: "Unique jacquard 5 panel camper hat, Adjustable strapback for a custom fit, Large (58cm, 7 1/4) Polyester/cotton blend", price: 17.99, category: "Clothing & Shoes", quantity: 50, tags: "hat, headwear, clothing, caps", shop_id: 2)
    clothes3.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-hat.jpg"), filename: "clothes-hat.jpg" )

clothes4 = Listing.create!(product_name: "Casual Linen Overalls, Loose fit Linen Harem Jumpsuits, Yellow Linen Overalls, Casual Cropped Overalls, women Linen Romper", description: "Our minimal style of overalls. With a tailored leg and a clean, elegant side profile with the big deep pockets, these overalls will quickly become a favorite - the most easy wearing and comfortable one piece, you’ll reach for them again and again.", price: 79.00, category: "Clothing & Shoes", quantity: 2, tags: "overalss, clothes, womens, yellow", shop_id: 2)
    clothes4.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-overalls.jpg"), filename: "clothes-overalls.jpg" )

clothes5 = Listing.create!(product_name: "Men's linen pants in Cinnamon / Mens trousers / Elastic waist / Cargo pants / Linen clothing for men", description: "Linen pants with elasticated waist and cargo pockets TRUCKEE bring the contemporary spin to your summer outfits. They are laid back enough to combine your off-duty looks teaming them with sneakers and T-shirts. They are also classy enough to help you create some office friendly looks – pair them with a classical fit linen shirt and a jacket. Not to mention that you will be amazed at how comfortable you feel throughout your day wearing these breathable linen pants!", price: 92.00, category: "Clothing & Accessories", quantity: 36, tags: "pants, mens, clothes, linen", shop_id: 2)
    clothes5.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-pants.jpg"), filename: "clothes-pants.jpg" )

clothes6 = Listing.create!(product_name: "Cute Owl Shirt | Animal Lover Shirt | Owl T-Shirt | Gift for Animal Lovers | Owl Gift | Shirts for Women", description: "→ Solid color ones like White and Black are 100% Cotton. → Heather Colors are cotton/polyester blend and they are super comfy soft! → Bella-Canvas Unisex Jersey Short Sleeve Crew-Neck Unisex T-Shirt → Soft and High-Quality Fabric, sueded pre-shrunk sueded jersey, taped shoulder-shoulder. → Sueded Jersey → Side Seamed → Retail fit", price: 11.00, category: "Clothing & Shoes", quantity: 56, tags: "shirt, womens, pink, owl", shop_id: 2)
    clothes6.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-prof.jpg"), filename: "clothes-prof.jpg" )

clothes7 = Listing.create!(product_name: "Greek Men Leather Sandals, summer men shoes, men flats", description: "These sandals are custom made to order. Please contact me in case you have narrow or wide feet.", price: 51.71, category: "Clothing & Shoes", quantity: 22, tags: "shoes, mens, leather, sandals", shop_id: 2)
    clothes7.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-sandals.jpg"), filename: "clothes-sandals.jpg" )

clothes8 = Listing.create!(product_name: "Seek Adventure Shirt - Van Wanderlust Traveler Gift", description: "Adventure Tshirt. The premium tee that goes with anything! Fun, casual, or workout tshirt says 'Seek Adventure' in a trendy graphic.", price: 24.99, category: "Clothing & Shoes", quantity: 5, tags: "shirt, travel, adventure, clothing", shop_id: 5)
    clothes8.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-shirt.jpg"), filename: "clothes-shirt.jpg" )


# home & living





# art & collectibles
mil_falc = Listing.create!(product_name: 'Star Wars Millenium Falcon - Geek Decor - Print Poster', description: 'Star Wars Millenium Falcon - Geek Decor - Patent Print Poster Wall Decor - 0068', price: 11.00, category: "Art & Collectibles", quantity: 5, tags: 'star wars, art, picture', shop_id: 1)
    mil_falc.photos.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/art-starwars.jpg"), filename: "art-starwars.jpg")

























# Category.destroy_all
# ActiveRecord::Base.connection.reset_pk_sequence!('categories')
# cat1 = Category.create!(category_name: 'Jewelry & Accessories')
# cat2 = Category.create!(category_name: 'Clothing & Shoes')
# cat3 = Category.create!(category_name: 'Home & Living')
# cat4 = Category.create!(category_name: 'Toys & Entertainment')
# cat5 = Category.create!(category_name: 'Art & Collectibles')
# cat6 = Category.create!(category_name: 'Super Smash Bros')
# cat7 = Category.create!(category_name: 'Electronics')
# cat8 = Category.create!(category_name: "Father's Day Gifts")
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

Listing.destroy_all
User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('listings')

user1 = User.create(email: 'phil@gmail.com', password: '123456', shop_name: "Phil's Jewels")
user2 = User.create(email: 'tim@hotmail.com', password: '123456')
user3 = User.create(email: 'lizzo@gmail.com', password: '123456')
user4 = User.create(email: 'olive@cox.net', password: '123456')
user5 = User.create(email: 'ernest@yo.com', password: '123456')
demo = User.create(email: 'demo-email', password: 'demopw')

# Listing.create!(
#     product_name: "", 
#     description: "", 
#     price: , 
#     category: "", 
#     quantity: , 
#     tags: "", 
#     shop_id: )

# jewelry & accessories
jewelry1 = Listing.create!(
    product_name: 'Real Leather Belt - Wood Buckle Forest Engraving', 
    description: 'Our Leather snap belts are handcrafted with much love right here in our studio, the entire process is done by hand, 
        from cutting the straps, to dying the leather. We use the finest full grain leather to produce our belts, and each one comes standard 
        with a basic buckle, this makes it the perfect belt to mix and match with all of your regan flegan belt buckles. 
        Please note, that since this is a handmade product the color and finish may vary slightly from the image shown.', 
    price: 29.99, 
    category: 'Jewelry & Accessories', 
    quantity: 7, 
    tags: 'accessories, clothing, belt, leather', 
    shop_id: 1)
    jewelry1.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-belt.jpg"), filename: "jewelry-belt.jpg")

jewelry2 = Listing.create!(
    product_name: 'Mens Feather Earring', 
    description: 'Silver color feather earring for men. Comes with eco-friendly gift wrap, ready to be a present.', 
    price: 16.71, 
    category: "Jewelry & Accessories", 
    quantity: 20, 
    tags: 'earring, jewelry, silver, feather', 
    shop_id: 1)
    jewelry2.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-earring.jpg"), filename: "jewelry-earring.jpg" )

jewelry3 = Listing.create!(
    product_name: 'SONIC THE HEDGEHOG X KING ICE - KNUCKLES NECKLACE', 
    description: "Knuckles the echidna is one of the most loved characters of the Sonic the Hedgehog video game series. 
        This piece features multiple layers of hair around his face, each packed with hundreds of handset stones, staying true to what 
        makes Knuckles so iconic.", 
    price: 150.68, 
    category: "Jewelry & Accessories", 
    quantity: 10, 
    tags: 'necklace, knuckles, sonic, jewelry', 
    shop_id: 1)
    jewelry3.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-knuckles.jpeg"), filename: "jewelry-knuckles.jpeg")

jewelry4 = Listing.create!(
    product_name: 'Sun and Moon Necklace, Sunburst Necklace | Crescent Moon Necklace, Gold Sun Necklace | 
        Sterling Silver Sun Pendant, Sun Charm, Golden Sun', 
    description: 'Handmade item, Materials: Gold, Rose gold, Silver, Closure: Spring ring, Chain style: Cable, Adjustable length, 
        Style: Minimalist, Made to Order', 
    price: 19.79, 
    category: "Jewelry & Accessories", 
    quantity: 15, 
    tags: 'necklace, jewelry, gold, chain', 
    shop_id: 1)
    jewelry4.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-necklace.jpg"), filename: "jewelry-necklace.jpg")

jewelry5 = Listing.create!(
    product_name: '14k Gold Emerald Ring, Emerald Cut Emerald Ring, Minimalist Emerald Engagement Ring, 20th Anniversary Ring, 
        May Birthstone Ring,', 
    description: "This beautiful Emerald Gold Ring was handmade in Melt'm Jewelry Design Studio in California using 14k solid yellow 
        gold band and 6x4mm emerald cut lab grown emerald stone. Emerald is featuring in 14k gold prong setting.", 
    price: 240.00, 
    category: "Jewelry & Accessories", 
    quantity: 3, 
    tags: 'ring, gold, jewelry, emerald', 
    shop_id: 1)
    jewelry5.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/jewelry-ring.jpg"), filename: "jewelry-ring.jpg")


# clothing & shoes
clothes1 = Listing.create!(
    product_name: "Newborn Baby Boy Coming Home Outfit Set up to 3 Items. Suspender Bow Tie Bodysuit, Leg Warmers & Knit Newsboy Hat. 
        Easter Valentines Slate", 
    description: "The Set of 3 Includes: Newsboy Hat, Leg Warmers, Suspender Bow Tie Bodysuit", 
    price: 10.45, 
    category: "Clothing & Shoes", 
    quantity: 30, 
    tags: "baby, clothes, infant, apparel", 
    shop_id: 2)
    clothes1.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-baby.jpg"), filename: "clothes-baby.jpg" )

clothes2 = Listing.create!(
    product_name: "Combat Boots - Vintage Art | Vincent van Gogh: Almond Blossom | Custom Shoes, Vegan Leather Lace Up Boots, 
        90s Boots, 2000s Boots", 
    description: "All of our Fashion Combat Boots are custom-made-to-order and handcrafted to the highest quality standards. 
        - Made from vegan-friendly faux leather with a double-sided print and rounded toe construction. 
        - Lace-up closure for a snug fit. - Soft textile lining with sturdy construction for maximum comfort. 
        - High-quality rubber outsole for traction and exceptional durability. *Please note that colors may vary slightly from printed 
        items to images on screen due to different lighting, screen resolutions, and printer calibration.", 
    price: 79.65, 
    category: "Clothing & Shoes", 
    quantity: 20, 
    tags: "boots, shoes, clothing, floral", 
    shop_id: 2)
    clothes2.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-boots.jpg"), filename: "clothes-boots.jpg" )

clothes3 = Listing.create!(
    product_name: "Hatphile Pattern Multi Color Jacquard 5 Panel Hat Camp Cap 7 1/4 58 cm Large", 
    description: "Unique jacquard 5 panel camper hat, Adjustable strapback for a custom fit, Large (58cm, 7 1/4) Polyester/cotton blend", 
    price: 17.99, 
    category: "Clothing & Shoes", 
    quantity: 50, 
    tags: "hat, headwear, clothing, caps", 
    shop_id: 2)
    clothes3.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-hat.jpg"), filename: "clothes-hat.jpg" )

clothes4 = Listing.create!(
    product_name: "Casual Linen Overalls, Loose fit Linen Harem Jumpsuits, Yellow Linen Overalls, Casual Cropped Overalls, 
        women Linen Romper", 
    description: "Our minimal style of overalls. With a tailored leg and a clean, elegant side profile with the big deep pockets, 
        these overalls will quickly become a favorite - the most easy wearing and comfortable one piece, you’ll reach for them again and 
        again.", 
    price: 79.00, 
    category: "Clothing & Shoes", 
    quantity: 2, 
    tags: "overalss, clothes, womens, yellow", 
    shop_id: 2)
    clothes4.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-overalls.jpg"), filename: "clothes-overalls.jpg" )

clothes5 = Listing.create!(
    product_name: "Men's linen pants in Cinnamon / Mens trousers / Elastic waist / Cargo pants / Linen clothing for men", 
    description: "Linen pants with elasticated waist and cargo pockets TRUCKEE bring the contemporary spin to your summer outfits. 
        They are laid back enough to combine your off-duty looks teaming them with sneakers and T-shirts. They are also classy enough 
        to help you create some office friendly looks – pair them with a classical fit linen shirt and a jacket. Not to mention that 
        you will be amazed at how comfortable you feel throughout your day wearing these breathable linen pants!", 
    price: 92.21, 
    category: "Clothing & Accessories", 
    quantity: 36, 
    tags: "pants, mens, clothes, linen", 
    shop_id: 2)
    clothes5.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-pants.jpg"), filename: "clothes-pants.jpg" )

clothes6 = Listing.create!(
    product_name: "Cute Owl Shirt | Animal Lover Shirt | Owl T-Shirt | Gift for Animal Lovers | Owl Gift | Shirts for Women", 
    description: "→ Solid color ones like White and Black are 100% Cotton. → Heather Colors are cotton/polyester blend and they are 
        super comfy soft! → Bella-Canvas Unisex Jersey Short Sleeve Crew-Neck Unisex T-Shirt → Soft and High-Quality Fabric, sueded 
        pre-shrunk sueded jersey, taped shoulder-shoulder. → Sueded Jersey → Side Seamed → Retail fit", 
    price: 11.00, 
    category: "Clothing & Shoes", 
    quantity: 56, 
    tags: "shirt, womens, pink, owl", 
    shop_id: 2)
    clothes6.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-prof.jpg"), filename: "clothes-prof.jpg" )

clothes7 = Listing.create!(
    product_name: "Greek Men Leather Sandals, summer men shoes, men flats", 
    description: "These sandals are custom made to order. Please contact me in case you have narrow or wide feet.", 
    price: 51.71, 
    category: "Clothing & Shoes", 
    quantity: 22, 
    tags: "shoes, mens, leather, sandals", 
    shop_id: 2)
    clothes7.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-sandals.jpg"), filename: "clothes-sandals.jpg" )

clothes8 = Listing.create!(
    product_name: "Seek Adventure Shirt - Van Wanderlust Traveler Gift", 
    description: "Adventure Tshirt. The premium tee that goes with anything! Fun, casual, or workout tshirt says 'Seek Adventure' in a 
        trendy graphic.", 
    price: 24.99, 
    category: "Clothing & Shoes", 
    quantity: 5, 
    tags: "shirt, travel, adventure, clothing", 
    shop_id: 5)
    clothes8.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/clothes-shirt.jpg"), filename: "clothes-shirt.jpg" )


# home & living
home1 = Listing.create!(
    product_name: "Nature Wall Art Prints Landscape Mountain Decor - Mid-Century Wall Art, Mountain Wall Decor, 
        Scandinavian Poster UNFRAMED", 
    description: "MID CENTURY-INSPIRED ART: Inspired by the clean minimalist lines and bright colors of mid century decor, 
        this mountain wall decor set from Haus and Hues has a timeless appeal that blends well with most home decor. 
        Each mountain painting brings out a strong connection to nature with its varying shades of blue, yellow and orange, 
        creating an effortlessly fresh and vintage mix", 
    price: 13.99, 
    category: "Home & Living", 
    quantity: 85, 
    tags: "art, picture, nature, decor", 
    shop_id: 4)
    home1.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/home-pictures.jpg"), filename: "home-pictures.jpg" )

home2 = Listing.create!(
    product_name: "Best Seller | 6 Tier Anti-Corrosion Wood Plant Stand Flower Multi Shelf for Indoor, Outdoor, 
        Gardening Organizer | | ON SALE", 
    description: "This plant stand will be ideal to organize and display potted plants in your home, garden, patio or terrace. 
        It is also an ideal décor for a store, coffee shop outside or the inside. Crafted from weather-resistant solid wood, 
        this shelf is durable enough to be used outdoors year round.", 
    price: 105.98, 
    category: "Home & Living", 
    quantity: 20, 
    tags: "decor, plant, wood, home", 
    shop_id: 3)
    home2.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/home-plant.jpg"), filename: "home-plant.jpg" )

home3 = Listing.create!(
    product_name: "Best Seller | Large Multilayered 6 Tiers Wooden Plant Rack Stand Flower Pot Shelf Storage European Décor Style 
        Christmas Gifts | ON SALE", 
    description: "ndoor/ Outdoor Flower Stands: 6 tiers of exhibition space, turn your beautiful garden into a natural plant paradise 
        full of space crisscross and rich sense. Succulent plants, Narcissus, cactus, roses, lilies, tulips, daisies and so on, 
        your favorite.", 
    price: 117.17, 
    category: "Home & Living", 
    quantity: 20, 
    tags: "home, decor, plant, design", 
    shop_id: 3)
    home3.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/home-prof.jpg"), filename: "home-prof.jpg" )

home4 = Listing.create!(
    product_name: "Midcentury Modern Magazine Side Table", 
    description: 'I make this tables using best quality pine wood, you will receive this table in a box already assembled and 
        ready to use.
        26" Length X 25" Height (from the floor to the bottom) x 10” Depth
        Inner Space : 18.5" x 13" height', 
    price: 135.50, 
    category: "Home & Living", 
    quantity: 4, 
    tags: "table, decor, design, wood", 
    shop_id: 5)
    home4.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/home-side-table.jpg"), filename: "home-side-table.jpg" )

home5 = Listing.create!(
    product_name: '307 Tulipe Table Base (H28")| Handmade Metal Pedestal | Desk Pedestal, Dining & Kitchen Pedestal, Furniture Base | 
        FLOWYLINE DESIGN', 
    description: "You can find and buy Flowyline Design products such as handmade metal table legs & bench legs, metal desk legs, 
        coffee table legs, dining table legs, river table legs, console table legs, iron table legs, steel table legs, or any furniture 
        legs for your live edge slab table, round dining table, etc. Also, you can check and buy a metal table base, pedestal table base, 
        coffee table base, dining table base. All are handmade by me. Inspired by natural forms, our products emphasize curved lines and 
        surfaces instead of straight lines. It is guaranteed that our designer products will give unique character and great joy in your 
        living area wherever it’s displayed.", 
    price: 1800.80, 
    category: "Home & Living", 
    quantity: 2, 
    tags: "table, home, kitchen, decor", 
    shop_id: 4)
    home5.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/home-table.jpg"), filename: "home-table.jpg" )


# Toys & Entertainment
toys1 = Listing.create!(
    product_name: "Buzz Lightyear Inspired Wings", 
    description: "These wings will have your little one looking to defeat the Evil Emperor Zurg!",
    price: 40.99, 
    category: "Toys & Entertainment", 
    quantity: 13, 
    tags: "toys, buzz, costume, disney", 
    shop_id: 5)
    toys1.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/toys-buzz-wings.jpg"), filename: "toys-buzz-wings.jpg" )

toys2 = Listing.create!(
    product_name: "Stack the Cats! Cat lover gift. Bag of twelve mini wooden cats", 
    description: "A unique gift for cat lovers. Twelve miniature wooden cats in different poses waiting to be stacked or displayed as 
        creatively as possible. Stack them, Display them, Play with them, Personalise them, ...... a mini interactive cat display!
        The twelve tiny cats come in a drawstring Cotton Bag with a simple explanation card included.", 
    price: 16.89, 
    category: "Toys & Entertainment", 
    quantity: 51, 
    tags: "cats, game, gift, toys", 
    shop_id: 1)
    toys2.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/toys-cats.jpg"), filename: "toys-cats.jpg" )

toys3 = Listing.create!(
    product_name: "Giant Four in a Row (All Weather) Outdoor Game with Carrying Case and Noise Reducing Design - 60% Quieter - 
        Jumbo Connect 4 Discs To Win", 
    description: "JUMBO SIZE - Step up your game with this life size version of the classic four in a row game. 
        This oversized board game stands over 2ft tall x 3ft wide. Ideal size for both kids and adults.", 
    price: 119.99, 
    category: "Toys & Entertainment", 
    quantity: 10, 
    tags: "game, family, gift, large", 
    shop_id: 3)
    toys3.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/toys-connect4.jpg"), filename: "toys-connect4.jpg" )

toys4 = Listing.create!(
    product_name: "Personalized PS5 and Xbox Controller and Headphone Stand, Graduation Gift for Him, Gamer Room Decor, Headset Stand, 
        Boyfriend Gift Teen Gift", 
    description: "The Personalized Wooden Controller Stand is a versatile desk organizer. A stand where you can put your controllers.", 
    price: 51.95, 
    category: "Toys & Entertainment", 
    quantity: 35, 
    tags: "controller, gift, wood, gaming", 
    shop_id: 4)
    toys4.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/toys-controller-stand.jpg"), filename: "toys-controller-stand.jpg" )

toys5 = Listing.create!(
    product_name: "Betta Fish Plushie", 
    description: 'A beautiful betta fish plush!
        These plushies are approximately 10" tall, 12" long, and 2" wide.', 
    price: 35.01, 
    category: "Toys & Entertainment", 
    quantity: 100, 
    tags: "fish, plush, kids, toy", 
    shop_id: 5)
    toys5.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/toys-fish.jpg"), filename: "toys-fish.jpg" )

toys6 = Listing.create!(
    product_name: "OLD-SCHOOL TRUCK - a natural and eco-friendly wooden toy car made with sustainable hardwood - toddler or preschooler toy", 
    description: "Little ones gotta move, and our old-school wooden toy truck moves right along with them. A tried and true favorite for 
        toddlers, choose an heirloom toy that will last long after childhood. Sturdy, safe, all natural, and drives like a charm!", 
    price: 16.50, 
    category: "Toys & Entertainment", 
    quantity: 65, 
    tags: "car, wheels, toy, kids", 
    shop_id: 5)
    toys6.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/toys-prof.jpg"), filename: "toys-prof.jpg" )

toys7 = Listing.create!(
    product_name: "The Original Spiral by Mountain Spiral Railway! The ultimate natural wood train track accessory compatible with 
        Thomas, Brio and Ikea sets!", 
    description: "Mountain Spiral Railway is a custom, wood track that connects to standard wooden Thomas and Brio track sets. 
        The track ascends over 18” as it sweeps around two complete revolutions. Once reaching the summit, there is an S-turn where 
        after the track descends back to earth.", 
    price: 239.50, 
    category: "Toys & Entertainment", 
    quantity: 12, 
    tags: "trains, kids, toys, wheels", 
    shop_id: 3)
    toys7.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/toys-trains.jpg"), filename: "toys-trains.jpg" )


# Art & Collectibles
art1 = Listing.create!(
    product_name: "Fire Escape New York Wall Art", 
    description: 'Beautiful home decor with oak wooden frame. Dimensions: L:24" X H:36"', 
    price: 24.99, 
    category: "Art & Collectibles", 
    quantity: 8, 
    tags: "building, art, picture, wall art", 
    shop_id: 2)
    art1.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/art-building.jpg"), filename: "art-building.jpg")

art2 = Listing.create!(
    product_name: "Desert Wall Art Watercolor Print", 
    description: "This is a print of my original watercolor painting that I hand painted in 2020. All prints are gallery quality 
        Giclée prints on pure white, ultra smooth, 100% cotton rag, acid and lignin free archival paper using archival inks and are 
        individually signed.", 
    price: 12.32, 
    category: "Art & Collectibles", 
    quantity: 85, 
    tags: "water color, painting, wall decor, picture", 
    shop_id: 2)
    art2.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/art-desert.jpg"), filename: "art-desert.jpg")

art3 = Listing.create!(
    product_name: "World map wall art, World map print, World map poster, Map art print, Adventure Awaits Art, Wanderlust print", 
    description: "This 'adventure awaits' world map print in pastel tones would makes the perfect gift for anyone who loves to travel.", 
    price: 18.54, 
    category: "Art & Collectibles", 
    quantity: 74, 
    tags: "picture, wall decor, map, world map", 
    shop_id: 5)
    art3.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/art-map.jpg"), filename: "art-map.jpg")

art4 = Listing.create!(
    product_name: "", 
    description: "", 
    price: , 
    category: "Art & Collectibles", 
    quantity: , 
    tags: "", 
    shop_id: )
    art4.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/art-.jpg"), filename: "")

art5 = Listing.create!(
    product_name: 'Star Wars Millenium Falcon - Geek Decor - Print Poster', 
    description: 'Star Wars Millenium Falcon - Geek Decor - Patent Print Poster Wall Decor - 0068', 
    price: 11.05, 
    category: "Art & Collectibles", 
    quantity: 5, 
    tags: 'star wars, art, picture', 
    shop_id: 1)
    art5.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/art-starwars.jpg"), filename: "art-starwars.jpg")

art6 = Listing.create!(
    product_name: "Picasso - Bouquet of Peace Flowers, Exhibition Vintage Line Art Poster, Minimalist Line Drawing, Ideal Home Decor or 
        Gift Print", 
    description: "Premium High Quality Silk Poster Paper at 200gr.
        I only use the highest quality pigment based inks to achieve true colour accuracy, clarity, excellent longevity and durability!
        -The appearance of colours may vary from monitor to monitor.
        -All posters are shipped rolled inside cardboard tubes or hard envelopes.", 
    price: 12.55, 
    category: "Art & Collectibles", 
    quantity: 101, 
    tags: "picasso, painting, wall art, decor", 
    shop_id: 2)
    art6.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/art-prof.jpg"), filename: "art-prof.jpg")


# Super Smash Bros
smash1 = Listing.create!(
    product_name: "Kirby Burger Art Print", 
    description: "Kirby Burger art print is available as a giclee on archival matte paper. 
        This print is perfect for gamers that adore the Kirby series!", 
    price: 20.10, 
    category: "Super Smash Bros", 
    quantity: 120, 
    tags: "video games, kirby, smash bros, nintendo", 
    shop_id: 5)
    smash1.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/smash-kirby.jpg"), filename: "smash-kirby.jpg")

smash2 = Listing.create!(
    product_name: "Super Smash Bros Mug Gamer Gift Personalized Gift For Him Wooden Beer Mug Beer Stein Beer Tankard Gift for 
        Husband Mug Geek Gift for Gamer", 
    description: "If you want to surprise or please somebody with a unique gift, our wooden beer mug is a great choice for this purpose!", 
    price: 30.95, 
    category: "Super Smash Bros", 
    quantity: 21, 
    tags: "smash bros, mug, gift, nintendo", 
    shop_id: 4)
    smash2.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/smash-mug.jpg"), filename: "smash-mug.jpg")

smash3 = Listing.create!(
    product_name: "Super Smash Bros. - for N64 consoles - working cartridge / game pak - NTSC or PAL region - great condition // 
        fighting fighter crossover", 
    description: "This is a working cartridge of the SUPER SMASH BROS. videogame for the Nintendo 64 video game console. 
        (Comes with the cartridge only! There is no product box, manuals, etc.)", 
    price: 18.50, 
    category: "Super Smash Bros", 
    quantity: 1, 
    tags: "smash bros, nintendo, video games, fun", 
    shop_id: 3)
    smash3.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/smash-n64.jpg"), filename: "smash-n64.jpg")

smash4 = Listing.create!(
    product_name: "Super Smash Bros Ball Emblem Embroidered Custom Iron-On or Sew-On Patch, Limited Edition Patches, Custom Patches, 
        Patch, 90s Kid Patches", 
    description: "- You Will Be Receiving 1x Custom Limited Edition Patch
        - All Patches Measure Roughly 3 Inches!  
        - Superior Custom Embroidery Done on Each & Every Single Patch 
        - Can Be Used as either Iron-On or Sew-On
        - Superior Quality Made To Last!", 
    price: 7.88, 
    category: "Super Smash Bros", 
    quantity: 130, 
    tags: "smash bros, patch, nintendo, gift", 
    shop_id: 2)
    smash4.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/smash-patch.jpg"), filename: "smash-patch.jpg")

smash5 = Listing.create!(
    product_name: 'Super Smash Bros. - Smash gang 2" enamel pin or magnet - Classic N64 game enamel pin - retro gaming', 
    description: "The Super Smash Bros gang enamel pin, characters from the classic N64 video game Super Smash the 64— 
        The pin stands 2” tall and has a two pin double-clutch back for extra stability when pinning. 
        It is made of soft enamel zinc alloy with a black dyed plating. Looks great on your backpack, shirt, jacket, blanket, 
        display piece, canvas game scene background or whatever you decided to pin it to!", 
    price: 12.99, 
    category: "Super Smash Bros", 
    quantity: 99, 
    tags: "smash bros, video games, gift, nintendo", 
    shop_id: 1)
    smash5.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/smash-pin.jpg"), filename: "smash-pin.jpg")

smash6 = Listing.create!(
    product_name: "Super SSBU Characters, Unframed Plastic Print, Smash Original Concept Art, High-Quality Digital Ink, 
        Gamer Decor Gifts Mario Friends", 
    description: "Great gift for the biggest gamer fan in your life!
        These posters are printed on durable plastic and will be shipped in a flat box. 
        Made in the USA!", 
    price: 19.99, 
    category: "Super Smash Bros", 
    quantity: 39, 
    tags: "smash bros, video games, nintendo, poster", 
    shop_id: 5)
    smash6.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/smash-poster.jpg"), filename: "smash-poster.jpg")

smash7 = Listing.create!(
    product_name: "Mario Super Smash Bros Symbol Vinyl Graphic Decal Bumper Sticker Car Truck Laptop - Many color and size options!", 
    description: "A custom made-to-order vinyl decal. A great addition to any Mario enthusiast's collection. All orders are free 
        shipping! All vinyl cuts come with transfer paper pre-applied. All transfer paper is rubbed on fabric before application to the 
        sticker, allowing easy removal.", 
    price: 4.45, 
    category: "Super Smash Bros", 
    quantity: 200, 
    tags: "sticker, smash bros, gift, video games", 
    shop_id: 4)
    smash7.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/smash-prof.jpg"), filename: "smash-prof.jpg")


# Electronics
electronics1 = Listing.create!(
    product_name: "For the Frog the Bell Tolls RPG English Translated Repro Gameboy Nintendo", 
    description: "Up for sale is For the Frog the Bell Tolls for the original Gameboy. This game has been tested and works great! 
        It has been tested in original hardware as well as the Retro Freak and works with no problems.", 
    price: 14.49, 
    category: "Electronics", 
    quantity: 1, 
    tags: "video games, electronic, gameboy", 
    shop_id: 3)
    electronics1.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/electronics-prof.jpg"), filename: "electronics-prof.jpg")

electronics2 = Listing.create!(
    product_name: "Gold Cable Organizer - Cord Keeper Management System For Home Office Desk, Nightstand, Wall and Car - 
        Gift for Him, Her And Students - 2PCS", 
    description: "A great gift for the office and for students. A must-have for Work From Home (WFH). These little gorgeous solid 
        brass buttons make cord organization simple and stylish. Perfect for keeping cables neat and tidy on your work desk, nightstand, 
        wall and in your car. Screw on/off design keeps your cables accessible and where they need to be. Ideal for use with mobile phone 
        and laptop charge cables, USB cables and power cords.", 
    price: 12.98, 
    category: "Electronics", 
    quantity: 80, 
    tags: "cable organizer, charging, organization, electronic", 
    shop_id: 2)
    electronics2.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/electronics-cable-org.jpg"), filename: "electronics-cable-org.jpg")

electronics3 = Listing.create!(
    product_name: "Gksx/sk61 nautilus keyboard - choose customer switches, hot swappable mechanical/optical dual mode wireless and 
        wired keyboard / gift mouse", 
    description: "-wired transparent case
        -rk aluminum case available
        -brass plate
        -matching plumb blossom desk mouse pad
        -switch filming
        -switch lubing
        -case foam
        -pcb foam
        -Matching usb cable coil
        -gold bar stabalizers", 
    price: 127.99, 
    category: "Electronics", 
    quantity: 20, 
    tags: "keyboard, computer, accessory, electronics", 
    shop_id: 1)
    electronics3.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/electronics-keyboard.jpg"), filename: "electronics-keyboard.jpg")

electronics4 = Listing.create!(
    product_name: "Top Grain Leather Large Mouse Pad, Hand Crafted Custom Desk Pad, Personalized Extended Mouse Pad, Custom Tech 
        Accessories, Desk Accessories", 
    description: "MegaGear Leather Extended Mousepad
        MegaGear Mousepad is designed and crafted with the purpose of producing a product that is not only a result of top quality leather 
        craftsmanship but also a convenient and modern accessory that one can rely on.", 
    price: 50.94, 
    category: "Electronics", 
    quantity: 39, 
    tags: "leather, mouse, electronics, gifts", 
    shop_id: 5)
    electronics4.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/electronics-mouse-pad.jpg"), filename: "electronics-mouse-pad.jpg")

electronics5 = Listing.create!(
    product_name: "c287 MCM Mid Century Stereo Console NEW Modern Electronics Bluetooth, Turntable, SONOS ready, bar, credenza, 
        tube amp, Warranty, Vintage", 
    description: "Great sounding espresso Grundig, also have a natural blonde same console.
        New turntable and Bluetooth streaming included.
        External speaker options
        Sonos integration options
        Set top tube amplifier options", 
    price: 4037.50, 
    category: "Electronics", 
    quantity: 1, 
    tags: "stereo, music, speakers, electronics", 
    shop_id: 4)
    electronics5.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/electronics-stereo.jpg"), filename: "electronics-stereo.jpg")

electronics6 = Listing.create!(
    product_name: "Mini TV Apple Watch Charging Station, Personalized Gift, Mothers Day, Decor, Gifts for him/her, Watch Case, 
        Tech Organizer & Accessory", 
    description: "The Mini TV Apple Watch Charging Station is a fun little way to display your apple watch. With the apple watch becoming
        the television screen, the stand gives your watch a classy, retro look. A circular cutout is located in the back to holster 
        the charger, and the apple watch fits snuggly in the slot in the middle.", 
    price: 16.80, 
    category: "Electronics", 
    quantity: 64, 
    tags: "apple watch, charger, gift, 3D print", 
    shop_id: 3)
    electronics6.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/electronics-watch-stand.jpg"), filename: "electronics-watch-stand.jpg")


# Father's Day Gifts
fathers1 = Listing.create!(
    product_name: "Dad Jokes Father's Day Card", 
    description: "Silk Screen Printed with water based ink on professional equipment
        Paper: 100# recycled white kraft paper
        Inks: Black
        Size: Folded A2
        Single Card with one kraft envelope", 
    price: 5.50, 
    category: "Father's Day Gifts", 
    quantity: 500, 
    tags: "card, gift, father", 
    shop_id: 2)
    fathers1.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/fathers-card.jpg"), filename: "fathers-card.jpg")

fathers2 = Listing.create!(
    product_name: "Fathers day gift/Rustic Desk Organizer lamp/Docking station/Rustic home decor/Steampunk Lamp/Table Lamp/Edison 
        Light /Bedside Lamp", 
    description: "✥Features a full range dimming option to set just the right mood, available in high quality Brass and Silver sockets.
        ✥Free bulb included with your purchase, bulbs last about 15,000 hours. Replacement bulbs are easy to find online and your local 
        hardware store. Any LED or standard bulb will also work in any of our lamps socket.
        ✥Lamps parts are made of real steel.", 
    price: 48.60, 
    category: "Father's Day Gifts", 
    quantity: 52, 
    tags: "lamp, desk, gift, fathers", 
    shop_id: 1)
    fathers2.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/fathers-desk-or.jpg"), filename: "fathers-desk-or.jpg")

fathers3 = Listing.create!(
    product_name: "", 
    description: "", 
    price: , 
    category: "Father's Day Gifts", 
    quantity: , 
    tags: "", 
    shop_id: )
    fathers3.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/fathers-.jpg"), filename: "")

fathers4 = Listing.create!(
    product_name: "", 
    description: "", 
    price: , 
    category: "Father's Day Gifts", 
    quantity: , 
    tags: "", 
    shop_id: )
    fathers4.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/fathers-.jpg"), filename: "")

fathers5 = Listing.create!(
    product_name: "", 
    description: "", 
    price: , 
    category: "Father's Day Gifts", 
    quantity: , 
    tags: "", 
    shop_id: )
    fathers5.photo.attach(io: open("https://ootsy-seed.s3.us-west-1.amazonaws.com/fathers-.jpg"), filename: "")





















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
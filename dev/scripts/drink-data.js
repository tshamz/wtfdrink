var drinkData = {
  prompts: [
    "Today is: " + ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()] + ". Please drink a fucking",
    "I beg of you, please drink a fucking",
    "Sit down and pour yourself a fucking",
    "Stop fucking around and start sippin\' on a",
    "Board the struggle bus and drink a fucking",
    "Take a ride to <a href=\'http://www.urbandictionary.com/define.php?term=hammertown\' target=\'_blank\'>hamtown</a> and drink a fucking",
    "Go get yourself sauced on a fucking",
    "<a href=\"http://www.youtube.com/watch?v=BWiqnPIxIdM\" target=\"_blank\" >Saddle up</a> and knock back a fucking",
    "I want you to crack open a fucking",
    "Why don\'t you have yourself a fucking",
    "Drown your fucking <a href=\"http://www.youtube.com/watch?v=iNRUjnp-5Rw\" target=\"_blank\" >sorrows</a> with a",
    "Stop Whining<a href=\"http://www.youtube.com/watch?v=EL8e2ujXe8g\" target=\"_blank\" >!</a> Make yourself a fucking",
    "Your fucking glass is empty so go make a",
    "Don\'t not fucking make yourself drink a",
    "Slap on your fucking <a href=\"http://www.youtube.com/watch?v=c9q30Ce2vwE\"  target=\'_blank\' >rollerblades</a> and drink a",
    "<a href=\"http://www.youtube.com/watch?v=35XI37SVVYI\" target=\'_blank\' >Fuckin\' thing sucks!</a> Instead, go drink a ",
    "Listen up <a href=\"http://www.youtube.com/watch?v=oDbIxIS2KWE\" target=\'_blank\' >Brother</a>, go drink a fucking",
    "The fuck do you <a href=\"http://www.youtube.com/watch?v=N0nCs48Jb_w#t=05.5s\" target=\'_blank\' >want?</a> Go pour yourself a",
    "What the fuck!? Why aren\'t you drinking a",
    "Make a great fucking life choice and drink a",
    "Round up your amigos and drink a fucking",
    "Place in and/or around your mouth, a fucking",
    "Better go <a href=\"http://www.youtube.com/watch?v=kiGz2AJPMrQ\" target=\"_blank\" >H.A.M</a> by drinking a fucking",
    "Insert into your talking hole a nice fucking",
    "Fuck isn\'t a nice word, now drink a fucking",
    "Get off your <a href=\"http://www.youtube.com/watch?v=uDDMBwJUApg\" target=\"_blank\" >candy ass</a> and make a fucking",
    "Had pasta, got sauced, by drinking a fucking",
    "Going to <a href=\"http://wtfdrink.com\" >wtfdrink.com</a> also brings you here"
  ],
  drinks: {
    nonalcoholic: [{
      "name": "Water.",
      "link": "http://www.building-hardware.com/wp-content/uploads/2009/08/kitchen_sink.jpg",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/water.png",
      "description": "it's water. What more do you want?",
      "category": "all"
    }, {
      "name": "Capri Sun.",
      "link": "http://w3.kraftbrands.com/CapriSunMoms/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/capri-sun.png",
      "description": "Cooler than Kool-Aid",
      "category": "all"
    }, {
      "name": "Glass of Hot Dog H20.",
      "link": "http://www.urbandictionary.com/define.php?term=hotdog%20water&defid=2875308",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/hot-dog-h2o.png",
      "description": "This stuff taste great!",
      "category": "all"
    }, {
      "name": "Fresca.",
      "link": "http://www.youtube.com/watch?v=XDFCL5Oiqk0#t=26s",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/fresca.png",
      "description": "How 'bout a Fresca?!??",
      "category": "all"
    }, {
      "name": "Booty Sweat.",
      "link": "http://www.youtube.com/watch?v=b75UIUcQ67w",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/booty-sweat.png",
      "description": "Bumpin' n' Grindin'",
      "category": "all"
    }, {
      "name": "Crystal Lite.",
      "link": "http://www.kraftbrands.com/crystallight/Pages/default.aspx#/home",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/crystal-lite.png",
      "description": "The nectar of the Gods",
      "category": "all"
    }, {
      "name": "Shirley Temple.",
      "link": "http://en.wikipedia.org/wiki/Shirley_Temple_(cocktail)",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shirley-temple.png",
      "description": "I bet you probably drink Roy Rogers...",
      "category": "all"
    }, {
      "name": "Carrot Juice.",
      "link": "http://www.showtickets.com/Las-Vegas-Shows/Carrot-Top/images/carrottop_400x375_a.jpg",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/carrot-top.png",
      "description": "Not to be confused with Carrot Top",
      "category": "all"
    }, {
      "name": "Radiator Fluid.",
      "link": "http://almanargroup.com/images/p_big6.jpg",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/radiator-fluid.png",
      "description": "Yeah. Don't listen to this one",
      "category": "all"
    }, {
      "name": "KFC Gravy.",
      "link": "http://www.youtube.com/watch?v=5ucVjoTr_7s",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/kfc-gravy.jpg",
      "description": "I don't know why you need someone to tell you to do this, just do it",
      "category": "all"
    }],
    simple: [{
      "name": "Shot of Whiskey.",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }, {
      "name": "Shot of Rum.",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }, {
      "name": "Shot of Gin.",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }, {
      "name": "Shot of Vodka.",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }, {
      "name": "Shot of Tequila",
      "link": "#",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "\"I'm a real man, no chaser\" -Jeff Ashworth"
    }],
    alcoholic: [{
      "name": "Joose.",
      "link": "http://www.drinkjoose.com/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "4Loko.",
      "link": "http://www.youtube.com/watch?v=KVWWre8tn_U",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Antifreeze.",
      "link": "http://www.drinknation.com/drink/antifreeze-3",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Asshole Boyfriend.",
      "link": "http://www.drinknation.com/drink/asshole-boyfriend",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Limona Corona.",
      "link": "http://www.drinksmixer.com/drink4839.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pint-glass-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "151 Ton Bomb.",
      "link": "http://www.drinknation.com/drink/151-ton-bomb",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "John Daly.",
      "link": "http://www.drinknation.com/drink/john-daly",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "MD 20/20.",
      "link": "http://www.bumwine.com/md2020.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/white-wine-glass-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Natty Ice.",
      "link": "http://beeradvocate.com/beer/profile/29/653",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Bodka-Aid.",
      "link": "http://www.drinknation.com/drink/bodka-aid",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The human torch was denied a bank loan.",
      "category": "all"
    }, {
      "name": "Bottle of Andre.",
      "link": "http://www.bevmo.com/Shop/ProductDetail.aspx?ProductID=2063",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/flute-glass-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Gorilla Fart.",
      "link": "http://www.drinknation.com/drink/gorilla-fart",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Stranger Drink.",
      "link": "strangerdrink.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/unknown-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Zima.",
      "link": "http://www.thepetitionsite.com/1/bringbackzima/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pint-glass-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Adult Hot Chocolate.",
      "link": "http://www.drinknation.com/drink/adult-hot-chocolate",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coffee-mug-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Baileys Cup Of Coffee.",
      "link": "http://www.drinknation.com/drink/baileys-cup-of-coffee",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/irish-coffee-mug-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Bull Shot.",
      "link": "http://www.drinknation.com/drink/bull-shot",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Coffee Keokee.",
      "link": "http://www.drinknation.com/drink/coffee-keokee",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/irish-coffee-mug-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Atomic Bomb.",
      "link": "http://www.drinknation.com/drink/atomic-bomb",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mason-jar-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Boilermaker.",
      "link": "http://www.drinknation.com/drink/boilermaker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/irish-coffee-mug-icon.png",
      "description": "The arsonist has oddly shaped feet.",
      "category": "all"
    }, {
      "name": "Captain's Apple.",
      "link": "http://www.drinknation.com/drink/captains-apple",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Gluehwein.",
      "link": "http://www.drinknation.com/drink/gluehwein",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/irish-coffee-mug-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Cheap Sunglasses.",
      "link": "http://www.drinknation.com/drink/cheap-sunglasses",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Dancing Captain.",
      "link": "http://www.drinknation.com/drink/dancing-captain",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Depressed Goalie.",
      "link": "http://www.drinknation.com/drink/depressed-goalie",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Fade-O-Rade.",
      "link": "http://www.drinknation.com/drink/fade-o-rade",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Lawn Mower.",
      "link": "http://www.drinknation.com/drink/lawn-mower",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "One Hit Wonder. ",
      "link": "http://www.drinknation.com/drink/onehitwonder",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Sand Blaster. ",
      "link": "http://www.drinknation.com/drink/sand-blaster",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Surfer On Speed. ",
      "link": "http://www.drinknation.com/drink/surfer-on-speed",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Shout out to team reckless!",
      "category": "all"
    }, {
      "name": "Tough Guy. ",
      "link": "http://www.drinknation.com/drink/tough-guy",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Voodoo Dew. ",
      "link": "http://www.drinknation.com/drink/voodoo-dew",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Wave Runner.",
      "link": "http://www.drinknation.com/drink/wave-runner",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sherry-glass-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Hot Gold.",
      "link": "http://www.drinknation.com/drink/hot-gold",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coffee-mug-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Night Cap.",
      "link": "http://www.drinknation.com/drink/night-cap",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sherry-glass-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Wooley Mitten.",
      "link": "http://www.drinknation.com/drink/wooley-mitten",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coffee-mug-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Abortion Shot. ",
      "link": "http://www.drinknation.com/drink/abortion-shot",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "A Little Dick'll Do. ",
      "link": "http://www.drinknation.com/drink/a-little-dickll-do",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Dead Hooker. ",
      "link": "http://www.drinknation.com/drink/dead-hooker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Fucked-up Lemonade. ",
      "link": "http://www.drinknation.com/drink/fucked-up-lemonade",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sherry-glass-icon.png",
      "description": "I'm just making a point Frank, you don't have to celebrate it.",
      "category": "all"
    }, {
      "name": "Fuck Me Sideways. ",
      "link": "http://www.drinknation.com/drink/fuck-me-sideways",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Minty Asshole. ",
      "link": "http://www.drinknation.com/drink/minty-asshole",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "The Shaved Beaver. ",
      "link": "http://www.drinknation.com/drink/the-shaved-beaver",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupe-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Victory Drink. ",
      "link": "http://www.drinknation.com/drink/victory-drink",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sherry-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Chicago Ice Tea.",
      "link": "http://www.drinknation.com/drink/chicago-ice-tea",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sour-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Virgin Purple Drank.",
      "link": "http://www.drinknation.com/drink/purple-drank",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sour-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "The Dream.",
      "link": "http://www.sofakingdrunk.com/2009/01/16/martin-luther-king-jr-day-drink-recipes-mlk-day-cocktail-recipes/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/sour-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Olde English.",
      "link": "http://www.beeradvocate.com/beer/profile/105/3350",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "My Sweet Red Lips.",
      "link": "http://www.drinknation.com/drink/my-sweet-red-lips",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Screaming Orgasm. ",
      "link": "http://www.drinknation.com/drink/screaming-orgasm",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "There's a fucking dart in your neck!",
      "category": "all"
    }, {
      "name": "Strawberries & Cream. ",
      "link": "http://www.drinknation.com/drink/strawberries-and-cream",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Sunset in a Glass. ",
      "link": "http://www.drinknation.com/drink/sunset-in-a-glass",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Sweetheart's Kiss. ",
      "link": "http://www.drinknation.com/drink/sweethearts-kiss",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/coupette-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Sweet Surrender. ",
      "link": "http://www.drinknation.com/drink/sweet-surrender",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Touchie Feelie. ",
      "link": "http://www.drinknation.com/drink/touchie-feelie",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Valen-tini. ",
      "link": "http://www.drinknation.com/drink/valen-tini",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Wedding Cake.",
      "link": "http://www.drinknation.com/drink/wedding-cake",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/pousse-cafe-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Paul Dreamy.",
      "link": "http://www.drinknation.com/drink/paul-dreamy",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/paul.png",
      "description": "Paul Reamy does not love hot sausage.",
      "category": "all"
    }, {
      "name": "Anniversary Punch.",
      "link": "http://www.drinknation.com/drink/anniversary-punch",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/punch-bowl-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Paul Creamy.",
      "link": "http://www.drinknation.com/drink/paul-creamy",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/paul.png",
      "description": "HAHAHA PAUL LOVES HOT SAUSAGE!",
      "category": "all"
    }, {
      "name": "Lynyrd Skynyrd.",
      "link": "http://www.drinksmixer.com/drink10742.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Damn! This some good ass cheese! How come you didn't tell me how good the cheese was?",
      "category": "all"
    }, {
      "name": "Spiked Juice.",
      "link": "http://spikeyourjuice.com/",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/punch-bowl-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Irish Car Bomb.",
      "link": "http://www.drinknation.com/drink/irish-car-bomb",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Adios Mother Fucker.",
      "link": "http://www.drinknation.com/drink/adios-motherfucker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/snifter-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Alcoholic Dr Pepper.",
      "link": "http://en.wikipedia.org/wiki/Alcoholic_Dr_Pepper",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Black Velvet.",
      "link": "http://en.wikipedia.org/wiki/Black_Velvet_(beer_cocktail)",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Flaming Dr Pepper.",
      "link": "http://en.wikipedia.org/wiki/Flaming_Dr_Pepper",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Hangman's Blood.",
      "link": "http://en.wikipedia.org/wiki/Hangman%27s_Blood",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Michelada.",
      "link": "http://www.drinknation.com/drink/michelada",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Porchcrawler.",
      "link": "http://en.wikipedia.org/wiki/Porchcrawler",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "Sake Bomb.",
      "link": "http://www.drinknation.com/drink/sake-bomb",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Slim Jim Daniel Kim",
      "category": "all"
    }, {
      "name": "U-Boat.",
      "link": "http://en.wikipedia.org/wiki/U-Boot_(beer_cocktail)",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/beer-mug-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "El Chupacabra.",
      "link": "http://www.drinknation.com/drink/el-chupacabra",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Bloody Matador.",
      "link": "http://www.drinknation.com/drink/bloody-matador",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/cocktail-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Blue Lagoon.",
      "link": "http://www.drinknation.com/drink/blue-lagoon",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Cape Codder.",
      "link": "http://www.drinknation.com/drink/cape-codder",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Black And Gold.",
      "link": "http://www.drinknation.com/drink/black-gold",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Sam Sparro's Favorite Drink.",
      "category": "all"
    }, {
      "name": "Scuba Divin in Aruba.",
      "link": "http://www.drinknation.com/drink/scuba-divin-in-aruba",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Cuba Libre.",
      "link": "http://www.drinknation.com/drink/cuba-libre",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Moscow Mule.",
      "link": "http://www.drinknation.com/drink/moscow-mule",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "7 and 7.",
      "link": "http://www.drinknation.com/drink/7-and-7",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "Mai Tai-ler Shambora.",
      "link": "lololololol.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Nay-taan, help me blow up my boat.",
      "category": "all"
    }, {
      "name": "White Russian.",
      "link": "http://www.drinknation.com/drink/white-russian",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Caucasian.",
      "link": "http://www.drinknation.com/drink/caucasian",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Black Caucasian.",
      "link": "http://www.drinknation.com/drink/black-caucasian",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Old Fashioned.",
      "link": "http://en.wikipedia.org/wiki/Old-fashioned_(Slang)",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "30/4/05.",
      "link": "http://www.drinknation.com/drink/30-4-05",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Avocado Daiquiri.",
      "link": "http://www.drinknation.com/drink/avocado-daiquiri",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Bag Of Filth.",
      "link": "http://www.drinknation.com/drink/bag-of-filth",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Cocaine Shooter.",
      "link": "http://www.drinknation.com/drink/cocaine-shooter",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Dyslexic Easter Bunny.",
      "link": "http://www.drinknation.com/drink/dyslexic-easter-bunny",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Felony.",
      "link": "http://www.drinknation.com/drink/felony",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "O Canada.",
      "link": "http://www.youtube.com/watch?v=-gLLk8JEEpM",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Sex on a Surfboard.",
      "link": "http://www.drinknation.com/drink/sex-on-a-surfboard",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Sex with a Salamander.",
      "link": "http://www.drinknation.com/drink/sex-with-a-salamander",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Vin Diesel.",
      "link": "http://www.drinknation.com/drink/vin-diesel",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "\"4Loko is like a time machine... that only goes to the future.\"",
      "category": "all"
    }, {
      "name": "Redheaded Slut.",
      "link": "http://www.drinknation.com/drink/redheaded-slut",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "B-52.",
      "link": "http://www.drinknation.com/drink/b-52",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Liquid Marijuana.",
      "link": "http://www.drinknation.com/drink/liquid-marijuana",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "$3.00 Hooker.",
      "link": "http://www.drinknation.com/drink/300-hooker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Asian Hooker.",
      "link": "http://www.drinknation.com/drink/asian-hooker",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Asian Sensation.",
      "link": "http://www.youtube.com/watch?v=zIGCc5V0lj0&list=FLNuZDUkbVNZQ2jux8jlISbQ&index=2",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Woo Woo.",
      "link": "http://www.drinknation.com/drink/woo-woo",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/plastic-beer-cups-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Swedish Fish.",
      "link": "http://www.drinknation.com/drink/swedish-fish",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "A Dum Whitefool.",
      "link": "https://fbcdn-sphotos-a.akamaihd.net/hphotos-ak-snc4/39477_1471078330824_1049580261_31476087_55427_n.jpg",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/unknown-icon.png",
      "description": "\"i prefer to wear new balance shoes over the leading name brand of basket ball shoes\"",
      "category": "all"
    }, {
      "name": "Jungle Juice.",
      "link": "http://www.drinknation.com/drink/jungle-juice",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/punch-bowl-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Lindsay Lohan.",
      "link": "http://www.drinknation.com/drink/lindsay-lohan",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "What is this, like, strong guys?",
      "category": "all"
    }, {
      "name": "Moose Milk.",
      "link": "http://www.drinknation.com/drink/moose-milk",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/mikicon.png",
      "description": "Mikaela Musman, the dreamscape of femininity..",
      "category": "all"
    }, {
      "name": "Blood and Guts.",
      "link": "http://drinknation.com/drink/blood-and-guts",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Bloody Mary.",
      "link": "http://drinknation.com/drink/bloody-mary",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/old-fashioned-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Dark Nightmare.",
      "link": "http://drinknation.com/drink/dark-nightmare",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Demon's Breath.",
      "link": "http://drinknation.com/drink/demons-breath",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Dirty Oatmeal.",
      "link": "http://drinknation.com/drink/dirty-oatmeal",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/shot-glass-icon.png",
      "description": "Werewolf bar mitzvah, spooky scary...",
      "category": "halloween"
    }, {
      "name": "Highball.",
      "link": "http://www.drinksmixer.com/drink4266.html",
      "icon": "http://whatthefuckshouldidrinktonight.com/drink_icons/highball-glass-icon.png",
      "description": "FREEEEEEEEZE!",
      "category": "all"
    }]
  }
};

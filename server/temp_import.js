/**
 * Created by Ryan on 8/14/2015.
 */
Meteor.startup(function(){
    var stones = [
        {
            "type":"Granite",
            "color":"Cream, Beige",
            "name":"Splendoure",
            "desc":"Splendoure Granite is a cream colored base with coral, cream and beige accents."
        },
        {
            "type":"Granite",
            "color":"Green, Grey",
            "name":"Aquario",
            "desc":"Auquario is a stunning piece.  Hues of blue and green, greys & tans give this a variety of options for many kitchen and baths."
        },
        {
            "type":"Granite",
            "color":"Cream, Beige",
            "name":"Supreme Gold",
            "desc":"Beautiful Cream and Beige base with hues of orange and brown throughout."
        },
        {
            "type":"Granite",
            "color":"White, Cream",
            "name":"Delicatus",
            "desc":"A white, creamy base with rose quartz.  This stunning piece is complete with black specks creating a beautiful contrast."
        },
        {
            "type":"Granite",
            "color":"Grey, Rose",
            "name":"Imperial Gold",
            "desc":"A gorgeous grey and rose combination with blue and tan hues to balance out the stone.  Endless possibilities with this piece."
        },
        {
            "type":"Granite",
            "color":"White, Beige",
            "name":"River Gold",
            "desc":"River Gold is a white based granite with natural iron throughout giving it a golden tint."
        },
        {
            "type":"Granite",
            "color":"Grey, Green",
            "name":"Surf Green",
            "desc":"Gorgeous black granite with light waves of cream and grey, absolutely beautiful piece for any kitchen or bath."
        },
        {
            "type":"Granite",
            "color":"Cream, Beige",
            "name":"Blue Flower",
            "desc":"Beautiful cream based granite.  Specks of blue and grey along with veins of black and tan make this a very stunning, unique piece."
        },
        {
            "type":"Granite",
            "color":"Black, Beige",
            "name":"Indian Black",
            "desc":"Gorgeous black granite with light waves of cream and grey, absolutely beautiful."
        },
        {
            "type":"Granite",
            "color":"White, Grey",
            "name":"Elegant White",
            "desc":"Beautiful white and grey granite with slight waves of rose and cream wave accents."
        },
        {
            "type":"Granite",
            "color":"Grey, Black",
            "name":"Bahama Blue",
            "desc":"Sleek dark grey granite with hues of blue and light purple to enhance the stone. Lighting can really bring these colors to life to stand out in any kitchen or bath."
        },
        {
            "type":"Granite",
            "color":"White, Cream, Rose",
            "name":"Sienna Bordeaux",
            "desc":"Creamy beige and white with beautiful waves of rose.  This piece shows veins of grey and hues of blue throughout the piece as well."
        },
        {
            "type":"Granite",
            "color":"Beige, Green, Black",
            "name":"Black Mosaico",
            "desc":"This stunning piece of granite is a dried up river bed, you can actually see the stones in this beautiful, unique piece of granite."
        },
        {
            "type":"Granite",
            "color":"Geen",
            "name":"Gaya",
            "desc":"Beautiful sea green piece of stone with gold and creamy waves to add extra character.  This is a statement maker!"
        },
        {
            "type":"Granite",
            "color":"Black, Beige",
            "name":"Amarone",
            "desc":"A magnificent piece of black granite with waves of grey, cream and orange.  This is a must see in person."
        },
        {
            "type":"Granite",
            "color":"White, Cream, Blue",
            "name":"Imperial Blue",
            "desc":"This beautiful piece of stone is mixed with purples, white and hues of blue.  Stunner!"
        },
        {
            "type":"Quartzite",
            "color":"Grey, Dark Blue ",
            "name":"Macabus",
            "desc":"Beautiful grey based stone with veins of dark blue throughout the piece branching out."
        },
        {
            "type":"Marble",
            "color":"Cream, Green",
            "name":"Amazon Green",
            "desc":"This marble is stunning.  Waves of green, white and orange throughout."
        },
        {
            "type":"Marble",
            "color":"Cream, Beige",
            "name":"Daino",
            "desc":"This Daino marble is a sandy beige, with hues of cream, brown and beige throughout that reallt tie this piece together."
        },
        {
            "type":"Marble",
            "color":"Blue, Grey, Black",
            "name":"Blue Bahia",
            "desc":"Blue Bahia is a gorgeous black and grey piece of stone enhanced with blue and cream waves of color."
        },
        {
            "type":"Marble",
            "color":"White, Grey",
            "name":"Leather Carrera",
            "desc":"Gorgeous white marble with both light grey and dark grey waves.  Perfect for any modern kitchen!"
        }
    ];
    _.each(stones, function (stone) {
        var id;
        //Products.insert(stone);
        //id = Accounts.createUser({
        //    email: user.email,
        //    password: "apple1",
        //    profile: { name: user.name }
        //});

       // if (user.roles.length > 0) {
            // Need _id of existing user record so this call must come
            // after `Accounts.createUser` or `Accounts.onCreate`
        //    Roles.addUsersToRoles(id, user.roles, 'default-group');
       // }

    });
    //Roles.addUsersToRoles('h682bWaTHKQvfhBu5', ['admin']);
});
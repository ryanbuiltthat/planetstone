/**
 * Created by Ryan on 1/21/2016.
 */
let administrators = [
    {
        name: { first: 'Ryan', last: 'Harris' },
        email: 'ryan@brandstoryexperts.com',
        password: 't2harris'
    }
];


let generateAccounts = () => {
    let fakeUserCount = 0,
        usersExist    = _checkIfAccountsExist( administrators.length + fakeUserCount );

    if ( !usersExist ) {
        _createUsers( administrators );
        //_createUsers( _generateFakeUsers( fakeUserCount ) );
    }
};

let _checkIfAccountsExist = ( count ) => {
    let userCount = Meteor.users.find().count();
    return userCount < count ? false : true;
};

let _createUsers = ( users ) => {
    for ( let i = 0; i < users.length; i++ ) {
        let user       = users[ i ],
            userExists = _checkIfUserExists( user.email );

        if ( !userExists ) {
            _createUser( user );
        }
    }
};

let _checkIfUserExists = ( email ) => {
    return Meteor.users.findOne( { 'emails.address': email } );
};

let _createUser = ( user ) => {
    Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: {
            name: user.name
        }
    });
};

//let _generateFakeUsers = ( count ) => {
//    let users = [];
//
//    for ( let i = 0; i < count; i++ ) {
//        users.push({
//            name: { first: faker.name.firstName(), last: faker.name.lastName() },
//            email: faker.internet.email(),
//            password: 'password'
//        });
//    }
//
//    return users;
//};

Modules.server.generateAccounts = generateAccounts;
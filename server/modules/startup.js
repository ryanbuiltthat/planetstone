/**
 * Created by Ryan on 1/21/2016.
 */
let startup = () => {
    _setBrowserPolicies();
    _generateAccounts();
};

var _setBrowserPolicies = () => {};

var _generateAccounts = () => Modules.server.generateAccounts();

Modules.server.startup = startup;
/**
 * Created by Ryan on 8/14/2015.
 */


/**
 * TODO: add upsert forms
 */

Template.viewProducts.helpers({
    autoSaveMode: function () {
        return Session.get("autoSaveMode") ? true : false;
    },
    selectedPersonDoc: function () {
        return Products.findOne(Session.get("selectedPersonId"));
    },
    isSelectedPerson: function () {
        return Session.equals("selectedPersonId", this._id);
    },
    formType: function () {
        if (Session.get("selectedPersonId")) {
            return "update";
        } else {
            return "disabled";
        }
    },
    disableButtons: function () {
        return !Session.get("selectedPersonId");
    }
});

Template.viewProducts.events({
    'click tbody > tr': function (event) {
        var dataTable = $(event.target).closest('table').DataTable();
        var rowData = dataTable.row(event.currentTarget).data();
        //console.log("click: "+rowData._id);
        Session.set("selectedPersonId", rowData._id);
    },
    'change .autosave-toggle': function () {
        Session.set("autoSaveMode", !Session.get("autoSaveMode"));
    }
});
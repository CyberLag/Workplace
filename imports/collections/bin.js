import {Mongo} from "meteor/mongo";


Meteor.methods( {
    'bins.insert': function() {
        return Bin.insert({
                createdAt: new Date(),
                content : "",
                sharedWith: [], 
                ownerId : this.userId
        });

    }, 
    'bins.remove' : function (bin) {
        return Bin.remove(bin)
    }
});
export const Bin = new Mongo.Collection("bins");
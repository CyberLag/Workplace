import { Meteor } from 'meteor/meteor';
import { Bin} from "../imports/collections/bin";

Meteor.startup(() => {
  // code to run on server at startup

  Meteor.publish("bins", function() {
    return Bin.find({ownerId: this.userId})
  })
});

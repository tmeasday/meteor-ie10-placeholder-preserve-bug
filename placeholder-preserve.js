if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return Session.get('greeting');
  };

  Template.hello.events({
    'click input' : function () {
      Session.set('greeting', Random.id())
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

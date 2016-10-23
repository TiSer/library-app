import Ember from 'ember';

export default Ember.Controller.extend({
  isMessageValid: Ember.computed.gte('message.length', 5),
  isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isValid: Ember.computed.and('isEmailValid', 'isMessageValid'),


  actions: {

    saveMessage() {
      this.set('responseMessage', `Thank you! We've just saved your message.`);
      this.set('emailAddress', '');
      this.set('message', '');
    }

  }
});

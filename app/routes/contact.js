import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  // responseMessage: '',
  // emailAddress: '',
  // message: '',

  actions: {

    // saveContact() {
    //   const email = this.get('emailAddress');
    //   const message = this.get('message');
    //
    //   const newContact = this.store.createRecord('contact', { email: email, message: message });
    //   newContact.save().then((response) => {
    //     this.set('responseMessage', `Thank you! We've just saved your message.`);
    //     this.set('emailAddress', '');
    //     this.set('message', '');
    //   });
    // }

    saveContact(newContactMessage) {
      newContactMessage.save().then(() => this.controller.set('responseMessage', true));
    },

    willTransition() {
      let model = this.controller.get('model');

      model.rollbackAttributes();
      this.controller.set('responseMessage', false);
    }

  }

});

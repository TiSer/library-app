import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

  isMessageLongEnough: Ember.computed.gte('message.length', 5),
  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isValid: Ember.computed.and('isEmailValid', 'isMessageLongEnough'),
});

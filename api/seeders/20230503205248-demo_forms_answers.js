'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('forms_answers', [{
       name: 'teste',
       email: 'teste@gmail.com',
       cpf: '11111111111',
       phone: '11911111111',
       create_at: new Date(),
       createdAt: new Date(),
       updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('forms_answers', null, {});
  }
};

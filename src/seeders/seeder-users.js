'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [

      {
        email: 'admin@gmail.com',
        password: '123456',
        firstName: 'Khai',
        lastName: 'Do',
        address: 'VN',
        gender: 1,
        typeRole:'ROLE',
        keyRole:'R1',


        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

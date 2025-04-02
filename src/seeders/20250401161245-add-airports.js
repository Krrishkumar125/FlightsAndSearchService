'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name: 'Jay Prakash Narayan Airport',
        cityId: 4,
        address:"xyz colony",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Gaya Airport',
        cityId: 6,
        address:"xyz colony",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Chennai International Airport (MAA) ',
        cityId: 1,
        address:"xyz colony",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: 5,
        address:"xyz colony",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Hindon Airport ',
        cityId: 5,
        address:"xyz colony",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: 'Delhi Airport ',
        cityId: 5,
        address:"xyz colony",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ],{});
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

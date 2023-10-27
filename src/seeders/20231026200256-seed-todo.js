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
     * 
     /** */
     Example:
     await queryInterface.bulkInsert('todos', [
      {
        title:'hero',
        createdAt:new Date(),
        updatedAt:new Date()

      
      },
    {
      title:'heroOne',
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      title:'jhon',
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      title:'monkey',
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      title:'krusial',
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      title:'eskam',
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      title:'tech',
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      title:'rakamin',
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      title:'glass',
      createdAt:new Date(),
      updatedAt:new Date()

    },
    {
      title:'orkm',
      createdAt:new Date(),
      updatedAt:new Date()

    }
  ], {});
  


  
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

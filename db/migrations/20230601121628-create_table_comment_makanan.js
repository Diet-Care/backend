module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comment_makanan', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      id_makanan:{
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          references: {
              model: {
                  tableName: 'makanan'
              },
              key: 'uuid'
          }
      },
      bintang:{
          type: Sequelize.DataTypes.CHAR,
      },
      comment_review:{
          type: Sequelize.DataTypes.STRING,
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comment_makanan');
  }
};

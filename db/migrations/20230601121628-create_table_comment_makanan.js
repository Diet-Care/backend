module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comment_makanan', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      id_olahraga:{
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          references: {
              model: {
                  tableName: 'olahraga'
              },
              key: 'uuid'
          }
      },
      bintang:{
          type: Sequelize.DataTypes.CHAR,
      },
      comment_review:{
          type: Sequelize.DataTypes.STRING(255),
      }
    }, {
      timestamps: false,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('comment_makanan');
  }
};

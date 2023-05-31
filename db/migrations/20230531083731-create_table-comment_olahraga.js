module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comment_olahraga', {
      id:{
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
      id_olahraga:{
          type: Sequelize.DataTypes.INTEGER,
          references: {
              model: {
                  tableName: 'olahraga'
              },
              key: 'id'
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
    await queryInterface.dropTable('comment_olahraga');
  }
};

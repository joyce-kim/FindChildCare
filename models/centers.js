/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('centers', {
    OBJECTID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    X: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Y: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADDRESS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    XCOORD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    YCOORD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    WARD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ZIPCODE: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ADDRID: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LIC_NUM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LIC_ISSUE_DATE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LIC_EXP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    POC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONTACT_TYPE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OTHER_CONTACT_DESC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PHONE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    LIC_CAP_INFANTS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LIC_CAP_PRE_CHILD: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LIC_CAP_TOD: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    LIC_CAP_SCH_AGE_CHILD: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TOT_LIC_CAP: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    TIER_NAME: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'centers'
  });
};

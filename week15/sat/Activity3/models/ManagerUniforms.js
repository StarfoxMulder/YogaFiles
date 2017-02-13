module.exports = function(sequelize, DataTypes) {
	var ManagerUniform = sequelize.define('ManagerUniform', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		uniformColor: {
			type: DataTypes.STRING
		}
	})

	return ManagerUniform;
}
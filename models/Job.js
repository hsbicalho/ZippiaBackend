const Job = (sequelize, DataTypes) => {
  const Store = sequelize.define(
    "Job", 
    {
      companyName: DataTypes.STRING,
      jobTitle: DataTypes.STRING,
      description: DataTypes.STRING,
      location: DataTypes.STRING,
    },
    {
    timestamps: false,
    }
  );
  return Store;
}

module.exports = Job;
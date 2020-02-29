const user = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Field 'username' on User type must not be empty",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Field 'email' on User type must not be empty",
        },
        isEmail: {
          args: true,
          msg: "Field 'email' on User type must be a valid email address",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Field 'password' on User type must not be empty",
        },
        len: {
          args: [7, 42],
          msg:
            "Field 'password' on User type must be between 7 and 42 characters",
        },
      },
    },
  });

  User.associate = models => {
    User.hasMany(models.Message, { onDelete: "CASCADE" });
    User.hasMany(models.Transaction, { onDelete: "CASCADE" });
  };

  User.findByLogin = async login => {
    let user = await User.findOne({
      where: {
        username: login,
      },
    });

    // if (!user) {
    //   user = await User.findOne({
    //     where: {
    //       email: login,
    //     },
    //   });
    // }

    return user;
  };

  return User;
};

export default user;

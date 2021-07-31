export default function (role) {
  return async function (req, res, next) {
    const user = await req.user;

    if (user.dataValues.role === role) {
      return next();
    }

    return res.status(403).json({
      message: "You do not have permission to access",
      role: user.role,
    });
  };
}

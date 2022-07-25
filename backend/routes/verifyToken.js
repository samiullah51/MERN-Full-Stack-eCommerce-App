const JWT = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied!");
  try {
    const verified = JWT.verify(token, process.env.JWT_SEC);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send("invalid token");
  }
};

const verifyTokenAndAuthorization = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that.");
    }
  });
};

const verifyTokenAndAdmin = async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that.");
    }
  });
};

module.exports = {
  verifyTokenAndAuthorization,
  verifyToken,
  verifyTokenAndAdmin,
};

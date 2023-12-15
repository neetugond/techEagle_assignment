const jwt=require("jsonwebtoken");
const protectManagerRoute= (req,res,next)=>{
    try {
        const authHeader = req.headers.Authorization || req.headers.authorization;
    
        if (authHeader !== undefined && authHeader.startsWith("Bearer")) {
          const token = authHeader.split(" ")[1];
    
          jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
            console.log("decoded:", decoded.userType);
            if (decoded.userType === "manager") {
              next();
            } else {
              return res
                .status(401)
                .json({ msg: "Unauthorized" });
            }
          });
        } else {
          return res.status(401).json({ msg: "Token missing" });
        }
    } catch (error) {
        return res.status(400).json({
          msg: "Error in protectManagerRoute",
          error: error.message,
        });
      }
    };

module.exports = protectManagerRoute;
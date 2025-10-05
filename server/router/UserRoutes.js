import router from "express"
const UserRoute = router.Router();
import { registerUser, loginUser, forgotPassword, resetPassword } from "../controller/UserController.js"

// REGISTER USER
UserRoute.post("/register", registerUser);

// LOGIN USER
UserRoute.post("/login", loginUser);

// FORGOT PASSWORD
UserRoute.post("/forgotpassword", forgotPassword);

// RESET PASSWORD
UserRoute.post("/resetpassword", resetPassword);

export default UserRoute;

import router from "express"
const PropertyRoute =  router.Router();
import { postProperty, getAllProperties, getPropertiesUser } from "../controller/PropertyController.js"
import auth from "../middleware/auth.js";

// POST PROPERTY
PropertyRoute.post("/postproperty", auth, postProperty);

// GET ALL PROPERTIES
PropertyRoute.get("/getallproperties", getAllProperties);

// GET All properties of specific owner
PropertyRoute.get("/getpropertiesUser", auth, getPropertiesUser);

export default PropertyRoute;

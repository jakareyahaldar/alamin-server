const express = require("express")
const router = express.Router()

const Controlar = require("./controlar.js")


//  all Routes 
router.get("/all",Controlar.all)

router.post("/image",Controlar.imageUpload)
router.get("/image",Controlar.getUser)

router.post("/carear",Controlar.addCarear)
router.put("/carear/:_id",Controlar.PUTCarear)
router.delete("/carear/:_id",Controlar.DeleteCarear)


router.post("/expertise",Controlar.AddExparties)
router.put("/expertise/:_id",Controlar.PutExparties)
router.delete("/expertise/:_id",Controlar.DeleteExparties)


router.post("/certificate",Controlar.AddCertificate)
router.put("/certificate/:_id",Controlar.PutCertificate)
router.delete("/certificate/:_id",Controlar.DeleteCertificate)

router.post("/work",Controlar.AddWork)
router.put("/work/:_id",Controlar.PutWork)
router.delete("/work/:_id",Controlar.DeleteWork )

router.post("/login",Controlar.Login)
router.post("/password",Controlar.setPassword)












// Export the router 
module.exports = router
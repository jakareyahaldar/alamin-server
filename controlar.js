const userCon = require("./mongoose/model/user.js")
const CarearColl = require("./mongoose/model/carear_path_model.js")
const checkObjEmpty = require("./utilities/objectEmptyItemCheck.js")
const ExpertiesColl = require("./mongoose/model/expertiesModel.js")
const CertificateColl = require("./mongoose/model/certificateModel.js")
const workDemonColl = require("./mongoose/model/workDemonModel.js")
const { createJWT, decodeJWT } = require("./utilities/JWT.js")
const Controlar = {}









// _________________ GET ALL DATA _________________
Controlar.all = async (req, resp) => {
    try {
        const [user] = await userCon.find()
        const carearPath = await CarearColl.find()
        const Experties = await ExpertiesColl.find()
        const Certificate = await CertificateColl.find()
        const WorkDemon = await workDemonColl.find()


        resp.status(200).json({ data: { user, carearPath, Experties, Certificate, WorkDemon } })
    } catch (err) {
        resp.status(500).json({ error: err.message })
    }
}





//____________________ SAVE HOME IMAGE HERO IMAGE _______________________
Controlar.imageUpload = async (req, resp) => {
    try {
        if (!req?.body?.url) throw Error("Empty url.")
        // find my user 
        const [user] = await userCon.find()

        if (!user) {
            const user = new userCon({
                name: "Alamin Howlader",
                description: "my desc",
                image: req.body.url
            })
            const save = await user.save()
        }

        user.image = req.body.url
        await user.save()

        resp.status(200).json({
            url: req.body.url
        })

    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}




// __________________GET USER DATA _____________________
Controlar.getUser = async (req, resp) => {
    try {
        const [user] = await userCon.find()
        if (!user) throw Error("Not Found.")
        resp.status(200).json({
            data: user
        })
    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}



//____________________ADD A CAREAR PATH ITEM_________________
Controlar.addCarear = async (req, resp) => {
    try {
        const { role, date, organization, points } = req.body;
        if (!role || !date || !organization || !points) throw Error("Please provide all data.")
        const newData = new CarearColl(req.body)
        const save = await newData.save()
        resp.status(200).json({ ok: "ok" })
    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}



//_____________PUT CAREAR ____________
Controlar.PUTCarear = async (req, resp) => {
    try {
        const { _id } = req.params || {}
        const data = req.body
        if (!_id) throw Error("Please provide Item id.")
        const item = await CarearColl.findOne({ _id })
        if (!item?._id) throw Error("Items not found!")
        for (const key of Object.keys(data)) {
            item[key] = data[key]
        }
        const save = await item.save()
        resp.status(200).json({ _id })
    } catch (err) {
        resp.status(500).json({ error: err.message })
    }
}




//_____________DELETE CAREAR ____________
Controlar.DeleteCarear = async (req, resp) => {
    try {
        const { _id } = req.params || {}
        if (!_id) throw Error("Please provide Item id.")
        await CarearColl.findOneAndDelete({ _id })
        resp.status(200).json({ _id })
    } catch (err) {
        resp.status(500).json({ error: err.message })
    }
}



//________________________________________________________________________________________________
// EXPARTIES MANAGE SECTION 
Controlar.AddExparties = async (req, resp) => {
    try {
        const data = req.body;
        checkObjEmpty(data)

        const newExperties = new ExpertiesColl(data)
        await newExperties.save()

        resp.status(200).json({
            ok: "ok"
        })

    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}


Controlar.PutExparties = async (req, resp) => {
    try {
        const data = req.body;
        const { _id } = req.params

        checkObjEmpty(data)
        if (!_id) throw Error("cant find id !")

        const Experties = await ExpertiesColl.findOne({ _id })
        for (const key of Object.keys(data)) {
            Experties[key] = data[key]
        }
        await Experties.save()

        resp.status(200).json({
            ok: "ok"
        })

    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}



Controlar.DeleteExparties = async (req, resp) => {
    try {
        const { _id } = req.params
        if (!_id) throw Error("cant find id !")

        await ExpertiesColl.findOneAndDelete({ _id })

        resp.status(200).json({
            ok: "ok"
        })

    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}


//________________________________________________________________________________________________
// CERTIFICATE MANAGE SECTION 
Controlar.AddCertificate = async (req, resp) => {
    try {
        const data = req.body;
        checkObjEmpty(data)

        const newCErtificate = new CertificateColl(data)
        await newCErtificate.save()

        resp.status(200).json({
            ok: "ok"
        })
    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}



Controlar.PutCertificate = async (req, resp) => {
    try {
        const data = req.body;
        const { _id } = req.params

        checkObjEmpty(data)
        if (!_id) throw Error("cant find id !")

        const certificate = await CertificateColl.findOne({ _id })
        for (const key of Object.keys(data)) {
            certificate[key] = data[key]
        }
        await certificate.save()

        resp.status(200).json({
            ok: "ok"
        })

    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}



Controlar.DeleteCertificate = async (req, resp) => {
    try {
        const { _id } = req.params
        if (!_id) throw Error("cant find id !")

        await CertificateColl.findOneAndDelete({ _id })

        resp.status(200).json({
            ok: "ok"
        })

    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}



//________________________________________________________________________________________________
// WORK DEMONSTRATION MANAGE SECTION 

Controlar.AddWork = async (req, resp) => {
    try {
        const data = req.body;
        checkObjEmpty(data)

        const newWorkDemon = new workDemonColl(data)
        await newWorkDemon.save()

        resp.status(200).json({
            ok: "ok"
        })
    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}



Controlar.PutWork =  async (req, resp) => {
    try {
        const data = req.body;
        const { _id } = req.params

        checkObjEmpty(data)
        if (!_id) throw Error("cant find id !")

        const workDemon = await workDemonColl.findOne({ _id })
        for (const key of Object.keys(data)) {
            workDemon[key] = data[key]
        }
        await workDemon.save()

        resp.status(200).json({
            ok: "ok"
        })

    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}



Controlar.DeleteWork = async (req, resp) => {
    try {
        const { _id } = req.params
        if (!_id) throw Error("cant find id !")

        await workDemonColl.findOneAndDelete({ _id })

        resp.status(200).json({
            ok: "ok"
        })

    } catch (err) {
        resp.status(500).json({
            error: err.message
        })
    }
}


//______________________________________________________________________________________
// PASSWORD MANAGER 

Controlar.setPassword = async (req,resp)=>{
  try{
    const {password} = req.body
    if(!password) throw Error("Please Input Password!")
    const hashPass = createJWT(password)
    if(!hashPass) throw Error("Server Error!")
    const [user] = await userCon.find()
    user.password = hashPass
    await user.save()
    resp.status(200).json({token: hashPass})
  }catch(err){
    resp.status(500).json({error: err.message})
  }
}

Controlar.Login = async (req,resp)=>{
  try{
    const { enteredPassword } = req.body
    if(!enteredPassword) throw Error("Please Enter a password!")
    const [user] = await userCon.find()
    const decoded = decodeJWT(user.password)
    if(decoded.error) throw Error("Server error")
    if(decoded.data !== enteredPassword.trim()) throw Error("invalid password!")
    const tocken = createJWT(enteredPassword.trim())
    resp.status(200).json({tocken})
  }catch(err){
    resp.status(500).json({error: err.message})
  }
}





module.exports = Controlar
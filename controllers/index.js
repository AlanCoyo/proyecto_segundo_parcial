//Importando objeto db
const {db}= require("../firebase");

const createAccount = async (req, res) => {
    try{
        const{body:{money}}=req;

        if((typeof(money)==="number")&&money>=0){
            const collectiblesDB=  db.collection("users");
            const newUser={
                "current_balance": {
                    money,
                    "collectibles":[]
                },
            }

            const{_path:{segments}} =await collectiblesDB.add(newUser);
            const id=segments[1];
            res.send({
                //Indicar que todo esta bien
                "status":200, 
                id,
                ...newUser
            })
        }
        else{
            res.send({
                "status":400, 
                "current_balance": {},
                "business_errors": ["Money value is invalid"]

            })
        }
    }
    catch(error){
        console.log(error)
        res.send({
            "status":400, 
            "current_balance": {},
            "business_errors": [Error]

        })
    }
};
module.exports={
    createAccount
}
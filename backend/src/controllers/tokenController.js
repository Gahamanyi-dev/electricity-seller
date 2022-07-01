import Token from "../models/token.model.js";
import Meter from "../models/meters.model.js";
import Joi from "joi";
import generateRandomToken from '../utils/generateToken.js';
import moment from "moment";

const myCustomValidation = (value, helpers) => {
    if (typeof value !== 'number') return helpers.error('any.invalid')
    
    if (value % 100 === 0) {
      return value
    } else return helpers.error('any.invalid')
  }

  
function validate(req){
    const schema = Joi.object({
      meterNumber: Joi.string().required().max(10),
        amount:Joi.number().custom(myCustomValidation,"custom validation for multiple of 100")
    })
    return schema.validate(req)
}

const tokenController = {
  async createToken(req, res) {
   

      const {error} = validate(req.body);
      if (error) {
          return res.send({
              success:false,
              message:error.message,
              data:null
          })
      }
      let meter= await Meter.findOne({meterNumber: req.body.meterNumber})
     
      if(!meter){ return res.send({
        success:false,
        message:"this meter doesn't exist  first register it",
      })
    }
      // let token  = await Token.findOne({tokenNumber:req.body.tokenNumber})
      // if(token) return res.send({
      //     success:false,
      //     message:'token already exist',
      //     data: null
      // })
     
         let token = await new Token({
         meterNumber:req.body.meterNumber,
          tokenNumber : generateRandomToken(),
          status :"VALID",
          expiresAt : moment().add((req.body.amount/100), 'days').format()
         })
         
          token.save()

          .then((token) =>
            res.send({
              success: true,
              message: "token successfully created",
              data: token,
            })
          )
          .catch((err) => res.send({
              success: false,
              message:"something went wrong",
              data:null
          }));
      
  },

  async getall(req, res) {
    Token.find()
      .then((tokens) =>
        res.send({
          success: true,
          message: "get all tokens successful",
          data: tokens,
        })
      )
      .catch((err) => res.send({
        success: false,
        message:"couldn't fetch tokens",
        data:null
    }));
  },

  async readTokenById(req, res) {
    await Token.findById(req.params.id)
      .then((token) => res.send({
        success: true,
        message: 'Get token successful',
        data: token
      }).status(201))
      .catch((err) => res.send({
        success: false,
        message: 'Get token Failed',
        data: null
      }).status(400));
  },

  async updateToken(req, res) {
    console.log(req.params.id);
    await Token.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((updatedToken) => res.send({
        success: true,
        message: 'Update token successful',
        data: updatedToken
      }).status(201))
      .catch((err) => res.send({
        success: false,
        message: 'Update token failed',
        data: null
      }).status(400));
  },

  async deleteToken(req, res) {
    await Token.findOneAndRemove(req.params.id)
      .then((deletedToken) => res.send({
        success: true,
        message: 'Delete token successfull',
        data: deletedToken
      }).status(201))
      .catch((err) => res.send({
        success: false,
        message: 'Delete token failed',
        data: null
      }).status(400));
  },
};

export default tokenController;

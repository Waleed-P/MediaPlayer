import axios from "axios";

//common api request configuaration for all api request
const commonAPI = async (httpMethod,url,reqBody)=>{
    const reqConfig = {
        url,
        method:httpMethod,
        data:reqBody
    }
     return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}

export default commonAPI
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
const    baseURL= 'https://apiqa.ngamia.africa';

async function PostMethod(payload,resourceUrl,token=null){

    console.log('payload:', payload)
    var result=await axios({
        method: "POST",
        url: baseURL+resourceUrl,
        data: JSON.stringify(payload),
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
    });
    return result;
}
export default {
    
    Login: (payload)=>{
        return PostMethod(payload,'/api/MyAccount/Login')
    }
}
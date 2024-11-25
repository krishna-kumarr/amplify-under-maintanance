const axios = require("axios");

const stopMaintanance = async() =>{
    try {
        const { data } = await axios.post("http://localhost:8000/api/v1/stop_maintanance")

        console.log(data)
    } catch (Err) {
        console.log(Err)
    }
}
stopMaintanance()
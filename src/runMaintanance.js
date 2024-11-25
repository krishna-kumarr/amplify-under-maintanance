const axios = require("axios");

const runMaintanance = async () => {
    try {
        const { data } = await axios.post("http://localhost:8000/api/v1/start_maintanance")

        console.log(data)
    } catch (Err) {
        console.log(Err)
    }
}

runMaintanance()
import axios from "axios";
let request = axios.create({
    baseURL:"",
    timeOut:5000
})
export default request
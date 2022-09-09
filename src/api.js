import axios from "axios";
export default axios.create({
    baseUrl:"https://mocki.io/v1/7b16a7c1-4672-41fa-8af5-67e6e3d85af3",
    headers:{
        "content-type":"application/json",
    }
});
import axios from "axios";
import SampComponent from "./SampComponent";
import ViewComponent from "./ViewComponent";
class SampleServices{

    savetasks(tasks){
        return axios.post("http://localhost:8080//saved",tasks);
    }
    viewall(){
        return axios.get("http://localhost:8080//getall");
    }
    deletehandle(id){
        return axios.get("http://localhost:8080//delete//"+id);
    }
    update(id){
        return axios.put("http://localhost:8080//update//"+id);
    }

} export default new SampleServices;
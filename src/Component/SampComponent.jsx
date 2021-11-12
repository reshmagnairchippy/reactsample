import react,{Component} from "react";
import SampleServices from "./SampleServices";

export class SampComponent extends Component{
  constructor(props){
      super(props)
      this.state={
          tname:""
      }
      this.handleTnameChange= this.handleTnameChange.bind(this)
  }

  handleTnameChange=(event)=>{
      this.setState({
          tname:event.target.value
      })
  }

  handleSubmit=(event)=>{
      console.log("success");
      let tasks={
          tname:this.state.tname    
      }
      console.log(JSON.stringify(tasks))
      SampleServices.savetasks(tasks).then((res)=>{
          console.log(res);
      });
      window.location.reload(false);
 
}

    render(){
        return(
           
            <div class="row"> 
              <div class="col-sm-4">
                   
                   <form>
                       <div class="form-group">
                         <input type="text" placeholder="Add a task" value={this.state.tname} onChange={this.handleTnameChange} /> 
                         <button type="button" value="Add" onClick={this.handleSubmit}>Add</button> 
                       </div>
                    </form>   
              </div> 
            </div>
        )
    }
}
export default SampComponent;
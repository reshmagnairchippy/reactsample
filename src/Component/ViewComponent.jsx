import react,{Component} from "react";
import SampleServices from "./SampleServices";
import SampComponent from "./SampComponent";
import { CSSProperties } from "react";



export class ViewComponent extends Component{
      
    constructor(props){
        super(props)
        this.state={
           tasks:[],
           simp:""

        }
    }
    componentDidMount(){
        SampleServices.viewall().then((res)=>{
            console.log(res);
            this.setState({tasks:res.data})
            console.log(this.state.tasks)
        });
    }

    updatehandle=(event)=>{
        
        console.log(JSON.stringify(event.target.value));
        SampleServices.update(event.target.value).then(res=>{
           console.log(res);

       });
       window.location.reload(false);
     }
    deletehandle=(id)=>{
        SampleServices.deletehandle(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== id)
            });
        });
        window.location.reload(false);
        }

   
   
    render(){

        return(

            <div class="row">
                <div class="col-sm-6">
                    <table class="table">
                        <thead>
                            <tr><th>Tasks</th></tr>
                        </thead>
                        
                        <tbody>{
                            this.state.tasks.map(
                                t => 
                                  <tr><td><input type="checkbox" value={t.id}  onClick={this.updatehandle}/>
                                   <span style={{textDecoration:t.status==="completed"?"line-through":null}}key={t.id}>{t.tname} 
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.deletehandle.bind(this,t.id)}> x</button> </span></td></tr>
                            )
                        }  
                        </tbody> 
 
                    </table>
                </div>
            </div>
     
           
        )

}
}
export default ViewComponent;
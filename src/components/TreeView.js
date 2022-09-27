
import { Tree, TreeNode } from "react-organizational-chart";

const TreeData = {
    left: {
      title: "Child1",
      left: {
        title: "GrandChild1",
        left:{
            title: "Great Grand Child"
        },
        right:{
            title: "Great Grand Child"
        }
      },
      right: {
        title: "GrandChild2",
        left:{
             title:'Great Grand Child'   
        },
        right:{
            title:'Great Grand Child'
        }
      }
    },
  
    right: {
      title: "Child2",
      left: {
        title: "GrandChild2",
        left:{
            title: "Great Grand Child"
        },
        right:{
            title: "Great Grand Child"
        }
      },
      right: {
        title: "GrandChild3",
        
        left :{ 
            title: "Great Grand Child"
        },
        right :{ 
            title: "Great Grand Child"
        },
    }
    }
  };

  export const SubTree = ({node})=>{
        if(node.left || node.right){
            return(

            <TreeNode label={node.title} lineBorderRadius={5} >
                    {
                        node.left && <SubTree node={node.left} />
                    }
                    {
                        node.right && <SubTree node={node.right} />
                    }
            </TreeNode>
            )
        }

        return <TreeNode label={node.title}/>

  }
  

  export const TreeDataView = ()=>{

    return(
        <Tree label={<div>Root</div>} >
               <SubTree node={TreeData} />     



              {/* <TreeNode label={<div>Child1</div>} >
                    <TreeNode label={<div>GrandChild</div>}/>
                    <TreeNode label={<div>GrandChild2</div>}/>
                </TreeNode>  
              <TreeNode label={<div>Child2</div>} >
                    <TreeNode label={<div>GrandChild</div>}/>
                    <TreeNode label={<div>GrandChild</div>}/>
                </TreeNode>   */}
              
        </Tree>
    )



  }




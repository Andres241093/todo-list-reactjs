import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            newName: ''
        }
    }
    render(){
        return(
            <div>
                <table border="1">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.items.map((item)=>{
                        return item.id !== 0? this.renderItem(item) : '';
                    })}
                </tbody>
                </table>
            </div>
        );
    };
    renderItem(item){
        return(
                    <tr key={item.id}>
                        <td>
                            <input onChange={()=>this.props.onCheckItem(item.id)} type="checkbox" />
                        </td>
                        <td>{item.id}</td>
                        <td>{
                            item.changeName ? 
                            <input placeholder={item.name} onChange={this.changeName.bind(this)} type="text" /> :
                            item.name
                        }</td>
                        <td>{item.status ? 'done' : 'pending'}</td>
                        <td>
                            <button onClick={()=>this.onUpdateItem(item)}>update</button>
                            <button onClick={()=>this.props.onDeleteItem(item.id)}>x</button>
                        </td>
                    </tr>
        );
    }

    onUpdateItem(item){
        console.log(item)
        if(this.state.newName){
            this.props.onUpdateItem(item.id,this.state.newName);
        }else{
            this.props.onUpdateItem(item.id,item.name);
        }
        this.setState({
            newName: ''
        });
    }

    changeName(e){
        e.preventDefault();
        this.setState({
            newName: e.target.value
        });
    }
}
export default List;
import React, { Component } from 'react';

class List extends Component {
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
                        <td>{item.name}</td>
                        <td>{item.status ? 'done' : 'pending'}</td>
                        <td>
                            <button onClick={()=>this.props.onUpdateItem(item.id)}>update</button>
                            <button onClick={()=>this.props.onDeleteItem(item.id)}>x</button>
                        </td>
                    </tr>
        );
    }
}
export default List;
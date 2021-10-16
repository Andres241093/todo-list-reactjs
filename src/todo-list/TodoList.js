import React, { Component } from 'react';
import List from './list/List';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    name: '',
                    status: false
                }
            ],
            collector: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onUpdateItem = this.onUpdateItem.bind(this);
        this.onCheckItem = this.onCheckItem.bind(this);
    }
    render(){
        return(
            <div>
                <input value={this.state.collector} onChange={this.onChange} type="text" />
                <button onClick={this.onAddItem}>add +</button>

                <List 
                    onCheckItem={this.onCheckItem} 
                    onUpdateItem={this.onUpdateItem} 
                    onDeleteItem={this.onDeleteItem} 
                    items={this.state.items}
                />
            </div>
        );
    }

    onChange(e){
        e.preventDefault();
        this.setState({
            collector: e.target.value
        });
    }

    onAddItem(){
        const tempArray = this.state.items;
        let lastId = Number(this.state.items[this.state.items.length-1].id);
        if(this.state.collector !== ''){
            lastId++;
            tempArray.push({
                id: lastId,
                name: this.state.collector,
                status: false
            });
        }
        this.setState({
            items: tempArray,
            collector: ''
        });
    }

    onDeleteItem(itemId){
        const tempArray = this.state.items;
        const indexToDelete = tempArray.indexOf(
            tempArray.filter((item)=>item.id === itemId)
        );
        tempArray.splice(indexToDelete,1);
        this.setState({
            items: tempArray
        });
    }

    onUpdateItem(itemId){
        console.log(itemId)
    }

    onCheckItem(itemId){
        const tempArray = this.state.items;
        const indexToChange = tempArray.indexOf(
            tempArray.find((item)=>item.id === itemId)
        );
        tempArray.splice(indexToChange,1,{
            ...tempArray[indexToChange], 
            status: !tempArray[indexToChange].status
        });
        this.setState({
            items: tempArray
        })
    }
}
export default TodoList;
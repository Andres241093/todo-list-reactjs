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
                    status: false,
                    changeName: false
                }
            ],
            collector: ''
        }
    }
    render(){
        return(
            <div>
                <input value={this.state.collector} onChange={this.onChange.bind(this)} type="text" />
                <button onClick={this.onAddItem.bind(this)}>add +</button>

                <List 
                    onCheckItem={this.onCheckItem.bind(this)} 
                    onUpdateItem={this.onUpdateItem.bind(this)} 
                    onDeleteItem={this.onDeleteItem.bind(this)} 
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
                status: false,
                changeName: false
            });
        }
        this.setState({
            items: tempArray,
            collector: ''
        });
    }

    onDeleteItem(itemId){
        const tempArray = this.state.items;
        const indexToDelete = this.searchIem(itemId);
        tempArray.splice(indexToDelete,1);
        this.setState({
            items: tempArray
        });
    }
    
    onUpdateItem(itemId,newName){
        const tempArray = this.state.items;
        const indexToChange = this.searchIem(itemId);
        tempArray.splice(indexToChange,1,{
            ...tempArray[indexToChange], 
            changeName: !tempArray[indexToChange].changeName,
            name: newName
        });
        this.setState({
            items: tempArray
        });
    }

    onCheckItem(itemId){
        const tempArray = this.state.items;
        const indexToChange = this.searchIem(itemId);
        tempArray.splice(indexToChange,1,{
            ...tempArray[indexToChange], 
            status: !tempArray[indexToChange].status
        });
        this.setState({
            items: tempArray
        })
    }

    searchIem(itemId){
        return this.state.items.indexOf(
            this.state.items.find((item)=>item.id === itemId)
        );
    }
}
export default TodoList;
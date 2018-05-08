import React, { Component } from 'react';
import { database } from '../../firebase';

class Order extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postTitle: '',
            postPrice: '',
            postDesc: ''
        }

        this.orderRef = database.ref('/orders');
    }

    handleSubmit = e => {
        console.log('SUBMIT');
        e.preventDefault();
        this.orderRef.push({
            postTitle: this.state.postTitle,
            postPrice: this.state.postPrice,
            postDesc: this.state.postDesc
        })
    }

    render() {
        let {postTitle, postPrice, postDesc} = this.state;
        return (
            <div className="ad">
                <h3>Create ad:</h3>
                <form>
                    <label className="posting-title">
                        <h4>Post title</h4>
                        <input
                            required
                            value={postTitle} 
                            onChange={e => this.setState({postTitle: e.target.value })}
                            type="text"/>
                    </label>
    
                    <label className="post-price">
                        <h4>price $</h4>
                        <input
                            required
                            value={postPrice} 
                            onChange={e => this.setState({postPrice: e.target.value })}                            
                            type="text"/>                    
                    </label>
                    <label className="post-desc">
                        <h4>Posting description</h4>
                        <textarea
                            required
                            value={postDesc}
                            onChange={e => this.setState({postDesc: e.target.value })}                            
                            name="post-desc" 
                            id="post-desc" 
                            cols="30" 
                            rows="10"/>
                    </label>
                    <button 
                        disabled={!postTitle} 
                        type="submit" 
                        onClick={this.handleSubmit}
                    >create add</button>
                </form>
            </div>
        );
    } 
}

export default Order;
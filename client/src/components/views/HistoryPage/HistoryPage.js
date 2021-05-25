import React from 'react'
import Axios from 'axios';
function HistoryPage(props) {

    return (
        <div style={{ width: '80%', margin: '3rem auto'}}>
            <div style={{ textAlign: 'center' }}>
                <h1>History</h1>    
            </div>    
            <br />

            <table>
                <thead>
                    <tr>
                        <th>Payment Id</th>
                        <th>Product name</th>
                        <th>Price(원)</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>

                <tbody>
                    {props.user.userData && props.user.userData.history.map(item => (
                        <tr key={item._id}>
                            <td>{item.id}</td>
                            <td><a href={`/product/${item.id}`}>{item.name}</a></td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.dateOfPurchase}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage

import React, {useState} from 'react'
import { Button, Descriptions } from 'antd';
import { useDispatch } from 'react-redux';
import { addToCart} from '../../../../_actions/user_actions'
const Continents = [
    {key:1, value: "상의"},
    {key:2, value: "바지"},
    {key:3, value: "아우터"},
    {key:4, value: "신빌"},
    {key:5, value: "가방"},
    {key:6, value: "모자"},
    {key:7, value: "액세서리"}
]
function ProductInfo(props) {
    const dispatch = useDispatch()
    const [Index, setIndex] = useState(Continents[props.detail.continents - 1])
    // console.log(props.detail.continents);
    // console.log(Index);
    const clickHandler = () => {
        // 필요한 정보를 Cart 필드에다가 넣어준다.
        dispatch(addToCart(props.detail._id))
    }
    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="Continents">{Index}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger" onClick={clickHandler}>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo
// Description 링크 : https://ant.design/components/descriptions/#header
import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import axios from "axios"
import { Icon, Col, Card, Row, Carousel} from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider'

function LandingPage() {
    const [Products, setProducts] = useState([])
    useEffect(() => {
        axios.post('/api/product/products')
        .then(response => {
            if(response.data.success){
                // console.log(response.data);
                setProducts(response.data.productInfo);
            } else {
                alert("상품들을 가져오는데 실패 했습니다.")
            }
        })
    }, [])
    
    const renderCards = Products.map((product, index) =>{
        console.log(product);// Col의 전체크기는 24이다. 창화면이 제일 클때(lg) 사진 하나의 크기를 6으로 맞춰준다(그럼 한 줄에 4장이다.)
                             // 창화면이 보통 일 때(md) 사진 하나의 크기를 8로 맞춰준다(그럼 한 줄에 3장이다.)
                             // 창화면이 제일 작을 때(xs) 사진 하나의 크기를 24로 맞춰준다(그럼 한 줄에 1장이다.)
        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                key={index}
                cover={<ImageSlider images={product.images}/>}
            >
               
                <Meta 
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })

    return (
        <div style={{ width: '75%', margin: '3rem auto'}}>
            <div style={{ textAlign: 'center'}}>
                <h2>씨님의 옥상에 오신 것을 환영합니다.<Icon type="rocket"/></h2>
            </div>

            {/* Filter */}

            {/* Search */}

            {/* Cards */}
            <Row gutter={16}>
                {renderCards}
            </Row>

            <div style={{ display:'flex', justifyContent: 'center'}}>
                <button>더보기</button>
            </div>
        </div>
    )
}

export default LandingPage

// Carousei 참고링크 : https://ant.design/components/carousel/ 
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery'

function ProductImage(props) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        if(props.detail.images && props.detail.images.length > 0){
            let images = []

            props.detail.images.map(item => {
                images.push({
                    original: `http://localhost:5000/${item}`,
                    thumbnail: `http://localhost:5000/${item}`
                })
            })
            setImages(images)
        }
    },[props.detail])
// useEffect의 마지막 인자는 props.detail이 바뀔때마다 랜더링이 되라는 것이다.
    return (
        <div>
            <ImageGallery items={Images}/>
        </div>
    )
}

export default ProductImage
// 이미지갤러리 참고링크
// https://www.npmjs.com/package/react-image-gallery
const continents = [
    {
        "_id":1,
        "name": "상의"
    },
    {
        "_id":2,
        "name": "바지"
    },
    {
        "_id":3,
        "name": "아우터"
    },
    {
        "_id":4,
        "name": "신빌"
    },
    {
        "_id":5,
        "name": "가방"
    },
    {
        "_id":6,
        "name": "모자"
    },
    {
        "_id":7,
        "name": "액세서리"
    },
]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "~10,000원",
        "array": [0, 10000]
    },
    {
        "_id": 2,
        "name": "10,000원 ~ 20,000원",
        "array": [10000, 20000]
    },
    {
        "_id": 3,
        "name": "20,000원 ~ 30,000원",
        "array": [20000, 30000]
    },
    {
        "_id": 4,
        "name": "30,000원 ~ 40,000원",
        "array": [30000, 40000]
    },
    {
        "_id": 5,
        "name": "50,000원 ~",
        "array": [50000, 1000000]
    },
]
export {
    continents,
    price
}
import React, { useEffect, useState } from 'react'
import * as ProductAPI from '@indussoft/indus-idfc-los'
import layoutData from '../mocks/layout.json'
import stageJson from '../mocks/stageData.json'
import productData from '../mocks/product.json'
const Driver = ({abc}) => {
    const [data, setData] = useState(null)
    // const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        try {
            // make an api call here to get data
            setTimeout(()=>{
                setLoading(false)
                setData({layoutData, stageJson, productData})
            }, 3000)
        } catch (e) {
            setError(e)
            setLoading(false)
        }
    }, [])

    return (
        <>
        <ProductAPI.ProductPage config={'config'} data={{isLoading:loading, productData:data}} />
        <div>I am driver</div>
        </>
    )
}
export default Driver
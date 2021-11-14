import React from 'react'
import clasess from './main.module.css'

const categorys = [

    {
        name: 'All',
        id: 1
    }, {
        name: 'Electronics',
        id: 2
    },
    {
        name: 'Clothes',
        id: 3
    },
    {
        name: 'Clothes',
        id: 3
    }, {
        name: 'Clothes',
        id: 3
    }, {
        name: 'Clothes',
        id: 3
    }, {
        name: 'Clothes',
        id: 3
    },
]
const products = [
    {
        name: 'Concept Art & Illustration',
        image: "https://user-assets.sharetribe.com/images/listing_images/images/4114581/small_3x2/mentoring_sessions7.png?1620496878",
        price: '90'
    },
    {
        name: 'Concept Art & Illustration',
        image: "https://user-assets.sharetribe.com/images/listing_images/images/4114581/small_3x2/mentoring_sessions7.png?1620496878",
        price: '90'
    },
    {
        name: 'Concept Art & Illustration',
        image: "https://user-assets.sharetribe.com/images/listing_images/images/4114581/small_3x2/mentoring_sessions7.png?1620496878",
        price: '90'
    }
    ,
    {
        name: 'Concept Art & Illustration',
        image: "https://user-assets.sharetribe.com/images/listing_images/images/4114581/small_3x2/mentoring_sessions7.png?1620496878",
        price: '90'
    },

]
function MainHome() {
    return (
        <section className={clasess.Container}>
            <div className={clasess.Wraper}>
                <div className={clasess.Filter}>
                    <p> All categories </p>

                    <div style={{ marginTop: '1rem' }}>
                        <ul>
                            {categorys.map(category => (
                                <li key={category.id}>
                                    <a style={{ textTransform: 'uppercase' }} href="#">{category.name}</a>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
                <div style={{ width: '52rem' }} className={clasess.MainList}>
                    {products.map(product => (
                        <div className={clasess.Product} key={product.id}>
                            <div className={clasess.ProductImage}>
                                <img style={{ borderRadius: '.7rem' }} src={product.image} alt="" />
                            </div>
                            <div style={{ marginLeft: '1rem', display: 'flex', position: 'relative', justifyContent: 'space-between', width: '100%' }}>
                                <div className={clasess.ProductName}>{product.name}</div>
                                <div>
                                    <p >
                                        <span style={{ fontSize: '1.5rem' }}>
                                            ${product.price}
                                        </span>
                                        <br />
                                        per hour
                                    </p>
                                </div>
                                <div style={{ marginTop: 'auto', display: 'flex', position: 'absolute', left: 0, bottom: 10 }}>
                                    <div>
                                        <img src="https://user-assets.sharetribe.com/images/people/images/tzYJqf-qkb8w_Sl6JJYRbg/thumb/IMG_2161.JPG?1625763317" alt="" />
                                    </div>
                                    <div style={{ paddingLeft: '1rem' }}>
                                        <p style={{ color: '#00bfe6', margin: '0', fontSize: '.9rem' }} >Sandra Duchiewicz</p>
                                        <p style={{ margin: '0', fontSize: '.8rem' }}>
                                            <img width="15" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Five_Pointed_Star_Solid.svg" alt="" />  42 Reviews
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MainHome

import React from 'react';
import ProductItem from './ProductItem';
import data from './data';

const Products = () => {
  return (<div>
      <h1 className='text-center mt-3'>All Products</h1>
      <section className='py-4 container'>
                <div className="row">
                    {data.productData.map((item,index)=>{
                            return(
                                <ProductItem 
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                    price={item.price}
                                    item={item}
                                    key={index}
                                />
                            )
                    })}
                </div>
      </section>
  </div>);
};

export default Products;

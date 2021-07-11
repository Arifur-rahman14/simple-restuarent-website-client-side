import React from 'react';
import { 
    ProductCard, 
    ProductContainer, 
    ProductDescription, 
    ProductHeading, 
    ProductImg, 
    ProductInfo, 
    ProductTitle, 
    ProductWrapper,
    ProductBtn,
    ProductPrice
 } from './ProductStyle';

const Product = ({ heading, data }) => {
    return (
        <div>
            <ProductContainer>
                <ProductHeading>{heading}</ProductHeading>
                <ProductWrapper>
                    {data.map((product,index) => {
                        return(
                            <ProductCard key={index}>
                                <ProductImg src={product.img} alt={product.alt}></ProductImg>
                                <ProductInfo>
                                    <ProductTitle>{product.name}</ProductTitle>
                                    <ProductDescription>{product.desc}</ProductDescription>
                                    <ProductPrice>{product.price}</ProductPrice>
                                    <ProductBtn>{product.button}</ProductBtn>
                                </ProductInfo>
                            </ProductCard>
                        )
                    })}
                </ProductWrapper>
            </ProductContainer>
        </div>
    );
};

export default Product;
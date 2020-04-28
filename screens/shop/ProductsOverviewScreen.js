import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/shop/ProductItem';
import {useSelector} from 'react-redux';


const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);

    return <FlatList data={products} 
                     keyExtractor={item => item.id}
                renderItem={itemData => 
                <ProductItem 
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price ={itemData.item.price} 
                onViewDetail={()=>{
                    props.navigation.navigate('ProductDetail', { 
                        productId: itemData.item.id,
                        productTitle: itemData.item.title
                    });
                }}
                onAddCart={()=>{}}
                /> }/>;
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

export default ProductsOverviewScreen;

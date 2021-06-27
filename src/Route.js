import React from 'react';
import Product from './components/Product/Product';
import Introduce from './components/Introduce';
import ProductAdd from './components/Product/ProductAdd';
import Type from './components/Type/Type';
import TypeAction from './components/Type/TypeAction';

const Routes = [
    {
        path:'/product',
        exact:true,
        main: () => <Product/> 
    },
    {
        path:'/product/add',
        exact:true,
        main: () => <ProductAdd/> 
    },
    {
        path:'/type',
        exact:true,
        main: () => <Type />
    },
    {
        path:'/type/add',
        exact:true,
        main: () => <TypeAction />
    },

    {
        path:'/intro',
        exact:false,
        main: () => <Introduce/> 
    },

    {
        path:'/logout',
        exact:false,
        main: () => <Introduce/> 
    },
]



export default Routes;
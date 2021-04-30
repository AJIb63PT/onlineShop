import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)
const store = new Vuex.Store({
        state: {
        
          products: [],
          cart:[]
        },
        mutations:{
            SET_PRODUCTS_TO_STATE:(state,products)=>{
                state.products=products;
            },
            SET_CART:(state,product)=>{
                if(state.cart.length>0){
                    let productsexist =false;
                    state.cart.map(function(item){
                        if(item.id===product.id){
                            productsexist=true;
                            item.quantity++
                        }
                    })
                    if(!productsexist){
                    state.cart.push(product)

                    }

                }
                else{
                    state.cart.push(product)
                }
                
            },
            DELETE:(state,index)=>{
                state.cart.splice(index,1)
            },
            INCREMENT: (state, index) => {
              state.cart[index].quantity++
            },
            DECREMENT: (state, index) => {
              if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
              }
            }
        },
        actions:{
            GET_PRODUCTS_FROM_API({commit}){
                return axios('https://fakestoreapi.com/products',{
                    method:"GET"
                })
                .then((products)=>{
                    commit('SET_PRODUCTS_TO_STATE',products.data);
                    return products;
                })
                .catch((error)=>{
                    console.log(error)
                    return error;
                })
            },
            ADD_TO_CART({commit},product){
                commit('SET_CART',product);

            },
            DELETE_FROM_CART({commit},index){
                commit('DELETE',index);
            },
            INCREMENT_CART_ITEM({commit},index){
                commit('INCREMENT',index)
            },
            DECREMENT_CART_ITEM({commit},index){
                commit('DECREMENT',index)
            }

    
        },
        getters:{
            PRODUCTS(state){
                return state.products;
            },
            CART(state){
                return state.cart;
            }
        },
      });
      
      
export default store;
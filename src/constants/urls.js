export const  urls ={
    categories :{
        get: '/categories',
        post: '/categories',
        patch: (id)=> `/categories/${id}`,
        delete: (id)=> `/categories/${id}`
    },
    banners:{
        get: '/banners',
        post: '/banners',
        patch: (id)=> `/banners/${id}`,
        delete: (id)=> `/banners/${id}`
    }
}
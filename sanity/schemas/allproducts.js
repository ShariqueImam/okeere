export default {
    name:'product',
    title:'product',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',

        },
        {
            name:'price',
            title:'Price',
            type:'number',

        },
        {
            name:'description',
            title:'Description',
            type:'string',

        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true
            }

        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:96
            }

        },
        {
            name:'category',
            title:'Category',
            type:'string',

        },
        {
            name:'countInStock',
            title:'Stock',
            type:'number',

        },
     

    ]
}

interface Blog{
    author:string;
    date:string;
    id:number;
    title:string;
    category:string;
    content:string[];
    authorimage:string;
    image:string
}

export const blogData : Blog[]=[
    {
        author:"John Doe",
        date:"29.12.2023",
        id:1,
        title:"Getting Started1",
        category:"Design",
        content:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum sapien`],
        authorimage:`http://i.pravatar.cc/300`,
        image: `https://source.unsplash.com/collection/494263/800x600`
    },
    {
        author:"Ahmad",
        date:"28.12.2023",
        id:2,
        title:"Getting Started1",
        category:"Design",
        content:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum sapien`],
        authorimage:`http://i.pravatar.cc/300`,
        image: `https://source.unsplash.com/collection/225/800x600`
    },
    {
        author:"Awais",
        date:"27.12.2023",
        id:3,
        title:"Getting Started1",
        category:"Design",
        content:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum sapien`],
        authorimage:`http://i.pravatar.cc/300`,
        image: `https://source.unsplash.com/collection/3106804/800x600`
    },
    {
        author:"Hassan",
        date:"26.12.2023",
        id:4,
        title:"Getting Started1",
        category:"Design",
        content:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum sapien`],
        authorimage:`http://i.pravatar.cc/300`,
        image: `https://source.unsplash.com/collection/539527/800x600`
    },
    {
        author:"Hamza",
        date:"25.12.2023",
        id:5,
        title:"Getting Started1",
        category:"Design",
        content:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum sapien`],
        authorimage:`http://i.pravatar.cc/300`,
        image: `https://source.unsplash.com/collection/3657445/800x600`
    },
    {
        author:"Sahbaz",
        date:"24.12.2023",
        id:6,
        title:"Getting Started1",
        category:"Design",
        content:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum sapien`],
        authorimage:`http://i.pravatar.cc/300`,
        image: `https://source.unsplash.com/collection/764827/800x600`
    },
    {
        author:"Adeel",
        date:"23.12.2023",
        id:7,
        title:"Getting Started1",
        category:"Design",
        content:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum sapien`],
        authorimage:`http://i.pravatar.cc/300`,
        image: `https://source.unsplash.com/collection/325867/800x600`
    },
    {
        author:"Usman",
        date:"22.12.2023",
        id:8,
        title:"Getting Started1",
        category:"Design",
        content:[`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum sapien`],
        authorimage:`http://i.pravatar.cc/300`,
        image: `https://source.unsplash.com/collection/1118905/800x600`
    }
]
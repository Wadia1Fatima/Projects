const menuData = [
    {
        id: 1,
        label: "Home",
        path: "/"
    },
    {
        id: 2,
        label: "Products",
        children: [
            {
                id: 21,
                label: "Electronics",
                children: [
                    {
                        id: 211,
                        label: "Laptops",
                        children: [
                            {
                                id: 2111,
                                label: "Gaming Laptops"
                            },
                            {
                                id: 2112,
                                label: "Business Laptops"
                            }
                        ]
                    },
                    {
                        id: 212,
                        label: "Mobile Phones",
                        children: [
                            {
                                id: 2121,
                                label: "Android"
                            },
                            {
                                id: 2122,
                                label: "iPhone"
                            }
                        ]
                    },
                    {
                        id: 213,
                        label: "Accessories"
                    }
                ]
            },
            {
                id: 22,
                label: "Clothing",
                children: [
                    {
                        id: 221,
                        label: "Men",
                        children: [
                            {
                                id: 2211,
                                label: "Shirts"
                            },
                            {
                                id: 2212,
                                label: "Pants"
                            }
                        ]
                    },
                    {
                        id: 222,
                        label: "Women",
                        children: [
                            {
                                id: 2221,
                                label: "Dresses"
                            },
                            {
                                id: 2222,
                                label: "Shoes"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        label: "Services",
        children: [
            {
                id: 31,
                label: "Web Development"
            },
            {
                id: 32,
                label: "App Development"
            },
            {
                id: 33,
                label: "UI/UX Design"
            }
        ]
    },
    {
        id: 4,
        label: "About Us",
        children: [
            {
                id: 41,
                label: "Our Team"
            },
            {
                id: 42,
                label: "Our Story"
            },
            {
                id: 43,
                label: "Contact"
            }
        ]
    },
    {
        id: 5,
        label: "Blog",
        children: [
            {
                id: 51,
                label: "Technology"
            },
            {
                id: 52,
                label: "Programming",
                children: [
                    {
                        id: 521,
                        label: "JavaScript"
                    },
                    {
                        id: 522,
                        label: "React"
                    },
                    {
                        id: 523,
                        label: "Node.js"
                    }
                ]
            }
        ]
    }
];

export default menuData;
const posts = [
    {
        id: 1,
        title: "Introduction to React",
        content: "React is a JavaScript library for building user interfaces.",
        image: 'https://picsum.photos/200/300',
        comments: [
            {
                username: "JohnDoe",
                userImage: "https://picsum.photos/50/50",
                content: "Great post!",
                likes: 3
            },
            {
                username: "JaneSmith",
                userImage: "https://picsum.photos/51/50",
                content: "Very helpful",
                likes: 5
            }
        ],
        likes: 10
    },
    {
        id: 2,
        title: "Understanding React Router",
        content: "React Router is a library for routing in React applications.",
        image: 'https://picsum.photos/201/300',
        comments: [
            {
                username: "Alice",
                userImage: "https://picsum.photos/52/50",
                content: "Nice explanation",
                likes: 2
            }
        ],
        likes: 5
    },
    {
        id: 3,
        title: "State Management in React",
        content: "Learn about managing state in React using hooks and context.",
        image: 'https://picsum.photos/202/300',
        comments: [
            {
                username: "Bob",
                userImage: "https://picsum.photos/53/50",
                content: "Good read",
                likes: 4
            }
        ],
        likes: 8
    },
    {
        id: 4,
        title: "React Lifecycle Methods",
        content: "Learn about React class component lifecycle methods.",
        image: 'https://picsum.photos/203/300',
        comments: [
            {
                username: "Charlie",
                userImage: "https://picsum.photos/54/50",
                content: "Very informative",
                likes: 6
            }
        ],
        likes: 7
    },
    {
        id: 5,
        title: "Using React Hooks",
        content: "React hooks allow you to use state and other features in functional components.",
        image: 'https://picsum.photos/204/300',
        comments: [
            {
                username: "Dave",
                userImage: "https://picsum.photos/55/50",
                content: "Helpful guide",
                likes: 8
            }
        ],
        likes: 12
    },
    {
        id: 6,
        title: "React Context API",
        content: "The Context API is a way to manage global state in a React app.",
        image: 'https://picsum.photos/205/300',
        comments: [
            {
                username: "Eve",
                userImage: "https://picsum.photos/56/50",
                content: "Great explanation",
                likes: 7
            }
        ],
        likes: 9
    },
    {
        id: 7,
        title: "React Performance Optimization",
        content: "Tips and techniques to optimize the performance of your React applications.",
        image: 'https://picsum.photos/206/300',
        comments: [
            {
                username: "Frank",
                userImage: "https://picsum.photos/57/50",
                content: "Useful tips",
                likes: 5
            }
        ],
        likes: 6
    },
    {
        id: 8,
        title: "React Testing Library",
        content: "Learn how to test React components using React Testing Library.",
        image: 'https://picsum.photos/207/300',
        comments: [
            {
                username: "Grace",
                userImage: "https://picsum.photos/58/50",
                content: "Good tutorial",
                likes: 3
            }
        ],
        likes: 4
    },
    {
        id: 9,
        title: "React and TypeScript",
        content: "Using TypeScript with React for type safety and better developer experience.",
        image: 'https://picsum.photos/208/300',
        comments: [
            {
                username: "Hank",
                userImage: "https://picsum.photos/59/50",
                content: "Very useful",
                likes: 6
            }
        ],
        likes: 11
    },
    {
        id: 10,
        title: "Deploying React Applications",
        content: "A guide to deploying React applications to production.",
        image: 'https://picsum.photos/209/300',
        comments: [
            {
                username: "Ivy",
                userImage: "https://picsum.photos/60/50",
                content: "Great guide",
                likes: 8
            }
        ],
        likes: 13
    }
];

export default posts;

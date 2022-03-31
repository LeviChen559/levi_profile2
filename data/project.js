const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
};
const scrollToTop200 = () => {
    window.scrollTo({
        top: 200,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
};
const scrollToTop800 = () => {
    window.scrollTo({
        top: 800,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
};
const scrollToTop1400 = () => {
    window.scrollTo({
        top: 1400,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
};
const scrollToTop1800 = () => {
    window.scrollTo({
        top: 1800,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
};
const scrollToTop2200 = () => {
    window.scrollTo({
        top: 2200,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
};
const scrollToTop2600 = () => {
    window.scrollTo({
        top: 2600,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
};

const scrollToTop3000 = () => {
    window.scrollTo({
        top: 3200,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
};

export const project =
    [{
        name: "Echo",
        title: "Echo",
        time: "Feb, 2022- March, 2022",
        members: "2",
        src: "echo2.png",
        codeTool: "React(Next.js), Javascript, Mongodb, Node.js, Git",
        link: "https://echo-sage.vercel.app/",
        scrollUp: scrollToTop,
        scrollDown: scrollToTop1400,
        back: "Top",
        next: "Buzzy Bee",
        intro: "This is a reader social media. In the application, each reader can leave and find comments about books. Also, they can record books to their reading list. You may see other people’s reading lists, so you can request a friend connection or subscribe to their new comments. We provide a platform where readers can share their thoughts and find the same or different ideas. The way may give you the other aspect of view to read books."

    },
    {
        name: "Buzzy Bee",
        title: "Buzzy Bee",
        time: "Sep, 2021- Dec, 2021",
        members: "5",
        src: "buzzybee.png",
        link: "https://www.youtube.com/watch?v=m0a9ocunClA",
        codeTool: "React Native(Expo.js), Javascript, Firebase, , Git",
        scrollUp: scrollToTop800,
        scrollDown: scrollToTop1800,
        back: "Echo",
        next: "Lebrary",
        intro: "The app helps students to organize their school life. There are three main features in the app, separately schedule, group and meeting. The schedule helps them arrange their time. The group feature brings better communication. The meeting feature solves the pain of group meetings since setting a perfect time for a discussion that fits members is troublesome."
    },
    {
        name: "Lebrary",
        title: "Lebrary",
        time: "Feb, 2022- Feb, 2022",
        members: "5",
        src: "lebrary.png",
        link: "https://lebrary.vercel.app/",
        codeTool: "React Native(Expo.js), Javascript, Git",
        scrollUp: scrollToTop1400,
        scrollDown: scrollToTop2200,
        back: "Buzzy Bee",
        next: "covid",
        intro: "The app helps students to organize their school life. There are three main features in the app, separately schedule, group and meeting. The schedule helps them arrange their time. The group feature brings better communication. The meeting feature solves the pain of group meetings since setting a perfect time for a discussion that fits members is troublesome."
    },
    {
        name: "covid",
        title: "Covid-action Website",
        time: "Jan, 2021- May, 2021",
        members: "3",
        src: "covid.png",
        link: "https://covid-action.vercel.app/",
        codeTool: "React(Next.js), Javascript ,Git",
        scrollUp: scrollToTop1800,
        scrollDown: scrollToTop2600,
        back: "Lebrary",
        next: "Noti",
        intro: "A responsive website that provides all info related to covid-19 to help people go through the pandemic. There are three main features of the website. Firstly, it provides the latest statistics on covid-19 and the government policy. Secondly, there is a small quiz to test your memories. Lastly, it gives you the info about how to protect your health and the info about vaccines."
    }, {
        name: "Noti",
        title: "Noti app Website",
        time: "Jan, 2021- May, 2021",
        members: "3",
        src: "noti.png",
        link: "https://noti-app.vercel.app",
        codeTool: "React(Next.js), Javascript ,Git",
        scrollUp: scrollToTop2200,
        scrollDown: scrollToTop3000,
        back: "covid",
        next: "",
        intro: "The Noti app is an app that combines three features, a calendar system, a note system, and a checklist system. The purpose is to make users get their life under control and organized. In this project, we are creating a responsive website that promotes the Noti app. To demo the functions to the public.."
    },

    ]
// https://noti-app-inky.vercel.app/

export const webtools =
    [
        {
            title: "Development",
            toolnaame: "HTML5",
            exp: "2 years",
            src: "./skill_icon/html-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Development",
            toolnaame: "CSS/SASS",
            exp: "2 years",
            src: "./skill_icon/css-icon.png",
            src2: "./skill_icon/sass.png",
            sx: { width: 30, height: 30, display: 'flex', ml: 1 }
        },
        {
            title: "Development",
            toolnaame: "Bootstrap",
            exp: "2 years",
            src: "./skill_icon/bootstrap-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Development",
            toolnaame: "Javascript",
            exp: "2 years",
            src: "./skill_icon/JS-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "FrontEnd",
            toolnaame: "React(Next)",
            exp: "1 year",
            src: "./skill_icon/next-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "FrontEnd",
            toolnaame: "React-Native(Expo)",
            exp: "1/2 year",
            src: "./skill_icon/react-native-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "BackEnd",
            toolnaame: "Node",
            exp: "1/2 year",
            src: "./skill_icon/node-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "BackEnd",
            toolnaame: "PHP",
            exp: "1/2 year",
            src: "./skill_icon/php-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Database",
            toolnaame: "MySQL",
            exp: "1/2 year",
            src: "./skill_icon/mysql-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Database",
            toolnaame: "Firebase",
            exp: "1/2 year",
            src: "./skill_icon/firebase-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        }, {
            title: "Database",
            toolnaame: "MongoDB",
            exp: "1/2 year",
            src: "./skill_icon/mongodb-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Version Control",
            toolnaame: "Git",
            exp: "1/2 year",
            src: "./skill_icon/Git-icon.png",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "CMS",
            toolnaame: "WordPress",
            exp: "1/2 year",
            src: "./skill_icon/wordpress.png",
            sx: { width: 30, height: 30, display: 'none' }
        },
    ]

export const designtools =
    [
        {
            title: "Prototyping",
            toolnaame: "Figma",
            exp: "1 1/2 year",
            src: "./skill_icon/Figma-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Graphic",
            toolnaame: "Illustrator",
            exp: "10 years +",
            src: "./skill_icon/ai-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Graphic",
            toolnaame: "Photshop",
            exp: "10 years +",
            src: "./skill_icon/PS-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Animation",
            toolnaame: "After-effect",
            exp: "1 year",
            src: "./skill_icon/ae-icon.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Layout",
            toolnaame: "Indesign",
            exp: "1/2 year",
            src: "./skill_icon/indesign.png",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        },
        {
            title: "Management software",
            toolnaame: "Mirro",
            exp: "1 year",
            src: "./skill_icon/miro-icon.webp",
            src2: "",
            sx: { width: 30, height: 30, display: 'none' }
        }

    ]
export const idtools =
    [{
        title: "CAD",
        toolnaame: "AutoCAD",
        exp: "3 years ",
        src: "./skill_icon/autocad.png",
        src2: "",
        sx: { width: 30, height: 30, display: 'none' }
    },
    {
        title: "3D Modeling-Surface",
        toolnaame: "Alias",
        exp: "5 years +",
        src: "./skill_icon/alias.jpeg",
        src2: "",
        sx: { width: 30, height: 30, display: 'none' }
    },
    {
        title: "3D Modeling-Solid",
        toolnaame: "Solidworks",
        exp: "10 years +",
        src: "./skill_icon/Solidworks-icon.png",
        src2: "",
        sx: { width: 30, height: 30, display: 'none' }
    },
    {
        title: "3D Modeling-Solid",
        toolnaame: "Pro/Engineer",
        exp: "5 years +",
        src: "./skill_icon/proe.webp",
        src2: "",
        sx: { width: 30, height: 30, display: 'none' }
    },
    {
        title: "Rendering",
        toolnaame: "Cinema 4D",
        exp: "10 years +",
        src: "./skill_icon/Cinema4D-icon.png",
        src2: "",
        sx: { width: 30, height: 30, display: 'none' }
    },
    {
        title: "Rendering",
        toolnaame: "KeyShot",
        exp: "10 years +",
        src: "./skill_icon/keyshot-icon.png",
        src2: "",
        sx: { width: 30, height: 30, display: 'none' }
    },

    ]
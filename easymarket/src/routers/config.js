// import AddQuestion from "../pages/main/question/addQuestion"
// import QuestionType from "../pages/main/question/questionsType"
// import Questions from "../pages/main/question/questions/questions"
// import WatchQuestion from "../pages/main/question/checkTheitem"

// import AddUser from "../pages/main/user/addUser"
// import ShowUser from "../pages/main/user/showUser"

// import AddExam from "../pages/main/exam/addexam/addExam"
// import ExamList from "../pages/main/exam/examList/eaxmList"
// import ExamEdit from "../pages/main/exam/addexam/examEdit"
// import ExamDetail from "../pages/main/exam/examList/examDetail"
// import Grade from "../pages/main/classRoom/grade"
// import Room from "../pages/main/classRoom/room"
// import Student from "../pages/main/classRoom/student"
// import Page from '../pages/main/checking/page';
// import Excel from "../pages/main/checking/excel"
import dynamic from 'dva/dynamic';
const AddQuestion = dynamic({
    component: () => import("../pages/main/question/addQuestion"),
});
const QuestionType = dynamic({
    component: () => import("../pages/main/question/questionsType"),
});
const Questions = dynamic({
    component: () => import("../pages/main/question/questions/questions"),
});
const WatchQuestion = dynamic({
    component: () => import("../pages/main/question/checkTheitem"),
});
const AddUser = dynamic({
    component: () => import("../pages/main/user/addUser"),
});
const ShowUser = dynamic({
    component: () => import("../pages/main/user/showUser"),
});
const AddExam = dynamic({
    component: () => import("../pages/main/exam/addexam/addExam"),
});
const ExamList = dynamic({
    component: () => import("../pages/main/exam/examList/eaxmList"),
});
const ExamEdit = dynamic({
    component: () => import("../pages/main/exam/addexam/examEdit"),
});
const ExamDetail = dynamic({
    component: () => import("../pages/main/exam/examList/examDetail"),
});
const Grade = dynamic({
    component: () => import("../pages/main/classRoom/grade"),
});
const Room = dynamic({
    component: () => import("../pages/main/classRoom/room"),
});
const Student = dynamic({
    component: () => import("../pages/main/classRoom/student"),
});
const Page = dynamic({
    component: () => import('../pages/main/checking/page'),
});
const Excel = dynamic({
    component: () => import("../pages/main/checking/excel"),
});
//配置；路由表：
export default {
    routes:[
        {
           name:"router.questions",
           icon:"mail",
           path:"",
           children:[
               {
                   name:"router.questions.add",
                   path:"/main/addquestion",
                   component:AddQuestion,
                   view_id:"main-addQuestions"
               },
               {
                    name:"router.questions.view",
                    path:"/main/questiontype",
                    component:QuestionType,
                    view_id:"main-questionsType"
                },
                {
                    name:"router.questions.type",
                    path:"/main/watchquestion",
                    component:WatchQuestion,
                    view_id:"main-watchQuestions"
                },
                {
                    name:"",
                    path:"/main/questions/:id",
                    component:Questions,
                    view_id:"main-questionsDetail"
                }
           ]
        },
        {
            name:"router.user",
            icon:"user",
            path:"",
            children:[
                {
                    name:"router.user.add",
                    path:"/main/adduser",
                    component:AddUser,
                    view_id:"main-addUser"
                },
                {
                    name:"router.user.show",
                    path:"/main/showuser",
                    component:ShowUser,
                    view_id:"main-showUser"
                }
            ]
         },
         {
            name:"router.exam",
            icon:"project",
            path:"",
            children:[
                {
                    name:"router.exam.add",
                    path:"/main/addexam",
                    component:AddExam,
                    view_id:"main-addExam"
                },
                {
                    name:"router.exam.list",
                    path:"/main/examlist",
                    component:ExamList,
                    view_id:"main-examList"
                },{
                    name:"",
                    path:"/main/examEdit",
                    component:ExamEdit,
                    view_id:"main-examEdit"
                },
                {
                    name:"",
                    path:"/main/examDetail",
                    component:ExamDetail,
                    view_id:"main-examDetail"
                },
            ]
         },
         {
            name:"router.class",
            icon:"mail",
            path:"",
            children:[
                {
                    name:"router.class.grade",
                    path:"/main/grade",
                    component:Grade,
                    view_id:"main-grade"
                },
                {
                    name:"router.class.room",
                    path:"/main/room",
                    component:Room,
                    view_id:"main-room"
                },
                {
                    name:"router.class.student",
                    path:"/main/student",
                    component:Student,
                    view_id:"main-student"
                }
            ]
         },{
            name:"router.marking",
            icon:"mail",
            path:"",
            children:[
                {
                    name:"router.marking.wait",
                    path:"/main/page",
                    component:Page,
                    view_id:"main-grade"
                },
                {
                    name:"router.marking.wait",
                    path:"/main/pages",
                    component:Page,
                    view_id:"main-gradessssssssssss"
                },
                {
                    name:"router.marking.excel",
                    path:"/main/excle",
                    component:Excel,
                    view_id:"main-grade"
                },
            ]
         },
    ]
}
class Student{
    constructor({
        name,
        email,
        username,
        twitter= undefined,
        instagram= undefined,
        faceboolk= undefined,
        approvedCourses= [],
        learningPaths= [],
    }){
        this.name= name;
        this.email= email;
        this.username= username;
        this.socialMedia= {
            twitter,
            instagram,
            faceboolk,
        };
        this.approvedCourses= approvedCourses;
        this.learningPaths= learningPaths;
    }
}

class LearningPaths{
    constructor({
        id,
        namePaths,
        courses= [],
    }){
        this.id= id;
        this.namePaths= namePaths;
        this.courses= courses;
    }
    addPaths(){}
    removePaths(){}
}
let pathsWebDevp= new LearningPaths({
    id:4587,
    namePaths: "Web Developer",
    courses:coursMaquetacionMobileFirst
})


// let coursDiseñoDeveloper= new Courses({
//     id:"web124",
//     nameCourses: "Diseño para Developers"
// })
// let coursSistemaDiseño= new Courses({
//     id:"web124",
//     nameCourses: "Sistema de Diseño"
// })
// let coursTransformacionTransiciones= new Courses({
//     id:"web124",
//     nameCourses: "Transformación y Transiciones en CSS"
// })
// let coursAnimacionCss= new Courses({
//     id:"web124",
//     nameCourses: "Animaciones en CSS"
// })

let juan1= new Student({
    name:"Juanito lopez",
    username: "jaundc",
    email: "dfjdf@got.com",
    twitter: "datoJuanito",
    approvedCourses: pathsWebDevp
})
let juan2= new Student({
    name:"Juanito2 lopez",
    username: "jaundc2",
    email: "dfjdf@go2t.com",
    faceboolk: "datoJuanito2",
})

console.log(juan1)
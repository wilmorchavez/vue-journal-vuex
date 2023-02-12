// export default ()=>({

import { loadRouteLocation } from "vue-router";

// })


export default ()=>({
isLoading: true,
entries:[
    {
        id: new Date().getTime(),
        date:new Date().toDateString(),
        text: 'Magna occaecat eu Lorem duis commodo adipisicing qui aute occaecat aute fugiat. Labore esse dolore nulla qui nulla sint excepteur magna ut. Excepteur commodo occaecat commodo sunt dolore. Deserunt eu amet commodo et velit magna irure est et adipisicing enim laboris voluptate. Sit non sunt adipisicing reprehenderit. Ullamco enim minim excepteur amet. Ipsum ullamco in id nisi incididunt dolore enim laborum cillum sunt.',
        picture: null,
    },
    {
        id: new Date().getTime()+1000,
        date:new Date().toDateString(),
        text: 'Magna occaecat eu Lorem duis commodo adipisicing qui aute occaecat aute fugiat. Labore esse dolore nulla qui nulla sint excepteur magna ut. Excepteur commodo occaecat commodo sunt dolore. Deserunt eu amet commodo et velit magna irure est et adipisicing enim laboris voluptate. Sit non sunt adipisicing reprehenderit. Ullamco enim minim excepteur amet. Ipsum ullamco in id nisi incididunt dolore enim laborum cillum sunt.',
        picture: null,
    },
    {
        id: new Date().getTime()+2000,
        date:new Date().toDateString(),
        text: 'Magna occaecat eu Lorem duis commodo adipisicing qui aute occaecat aute fugiat. Labore esse dolore nulla qui nulla sint excepteur magna ut. Excepteur commodo occaecat commodo sunt dolore. Deserunt eu amet commodo et velit magna irure est et adipisicing enim laboris voluptate. Sit non sunt adipisicing reprehenderit. Ullamco enim minim excepteur amet. Ipsum ullamco in id nisi incididunt dolore enim laborum cillum sunt.',
        picture: null,
    },
]
})

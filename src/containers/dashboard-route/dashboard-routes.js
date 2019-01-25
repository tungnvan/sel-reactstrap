import PageOne from "./containers/page-one/page-one";
import PageTwo from "./containers/page-two/page-two";

export const DASHBOARD_ROUTES = [
    {
        path: "/dashboard/page-one",
        exact: true,
        component: PageOne,
    }, {
        path: "/dashboard/page-two",
        exact: true,
        component: PageTwo,
    }
];
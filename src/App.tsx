import "@/styles/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteComponentConfig from "@/configs/route_component.config";
import RouteConfig from "@/configs/route.config";
import MainLayout from "@/components/layouts/MainLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {RouteComponentConfig.public.map((r) => {
                    const Component = r.component;
                    return <Route key={r.name} path={RouteConfig[r.name].path} element={<Component />} />;
                })}
                <Route path="*" element={<MainLayout />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

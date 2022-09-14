import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Route, Routes } from "react-router-dom";
import RouteComponentConfig from "@/configs/route_component.config";
import RouteConfig from "@/configs/route.config";
import SideMenu from "@/components/layouts/side_menu/SideMenu";
import LogoZingMp3Svg from "@/assets/icons/logo-dark.svg";
import HeaderPage from "@/components/layouts/HeaderPage";

const MainLayout = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible>
                <div className="d-flex items-center p-24">
                    <img className="h-32" src={LogoZingMp3Svg} />
                </div>
                <SideMenu />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, background: "white" }}>
                    <HeaderPage />
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        padding: 30,
                    }}
                >
                    <Routes>
                        {RouteComponentConfig.public.map((r) => {
                            const Component = r.component;
                            return <Route key={r.name} path={RouteConfig[r.name].path} element={<Component />} />;
                        })}
                    </Routes>
                </Content>
                <Footer></Footer>
            </Layout>
            <Sider>Play list</Sider>
        </Layout>
    );
};

export default MainLayout;

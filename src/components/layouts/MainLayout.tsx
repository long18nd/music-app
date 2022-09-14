import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Route, Routes } from "react-router-dom";
import RouteComponentConfig from "@/configs/route_component.config";
import RouteConfig from "@/configs/route.config";
import SideMenu from "@/components/layouts/side_menu/SideMenu";

const MainLayout = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider trigger={null} collapsible>
                <SideMenu />
                Long
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {/*<HeadMenu isSidebarOpen={isSidebarOpen} onToggleSideBar={toggleSidebar} />*/}
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
                        <Route path="*" element={<div>Not found</div>} />
                    </Routes>
                </Content>
                <Footer></Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;

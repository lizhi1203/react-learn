import './App.css';
import { useState } from 'react';
// import SyntaxPage from "./views/base/SyntaxPage";
// import ClassComponent from './views/base/ClassComponent';
// import FunctionComponent from './views/base/FunctionComponent';
// import SetStatePage from './views/base/SetStatePage';
// import HomePage from './views/component/HomePage';
// import ReduxPage from './views/redux/ReduxPage';
// import ReactReduxPage from './views/redux/ReactReduxPage';
// import RouterPage from './views/router/RouterPage';
// import OutletPage from './views/router/OutletPage';
// import PureComponentPage from './views/pureComponent/PureComponentPage';
// import LifeCyclePage from './views/lifecycle/LifeCyclePage';
// import LifeCycle164Page from './views/lifecycle/LifeCycle164Page';
// import AntdPage from './views/antd/AntdPage';
// import HookPage from './views/hook/HookPage';
// import UseMemoPage from './views/hookApi/UseMemoPage';
// import UseCallbackPage from './views/hookApi/UseCallbackPage';
// import DialogPage from './views/createPortal/DialogPage';
// import HocPage from './views/hoc/HocPage';
// import SimpleFormPage from './views/form/SimpleFormPage';
// import RCFormPage from './views/form/RCFormPage';
// import MyRCFormPage from './views/form/MyRCFormPage';
import IndexPage from './views/layout/IndexPage';
import CartPage from './views/layout/CartPage';
import OrderListPage from './views/layout/OrderListPage';
import UserPage from './views/layout/UserPage';
import BottomNav from './components/BottomNav';

function App() {
  const [activeNum, setActiveNum] = useState(0)
  return (
    <div className="App">
      {/* <SyntaxPage /> */}
      {/* <ClassComponent /> */}
      {/* <FunctionComponent /> */}
      {/* <SetStatePage /> */}
      {/* <HomePage /> */}
      {/* <ReduxPage /> */}
      {/* <ReactReduxPage /> */}
      {/* <RouterPage /> */}
      {/* <OutletPage /> */}
      {/* <PureComponentPage /> */}
      {/* <LifeCyclePage /> */}
      {/* <LifeCycle164Page /> */}
      {/* <AntdPage /> */}
      {/* <HookPage /> */}
      {/* <UseMemoPage /> */}
      {/* <UseCallbackPage /> */}
      {/* <DialogPage /> */}
      {/* <HocPage /> */}
      {/* <SimpleFormPage /> */}
      {/* <RCFormPage /> */}
      {/* <MyRCFormPage /> */}
      {activeNum === 0 &&  <IndexPage />}
      {activeNum === 1 &&  <CartPage />}
      {activeNum === 2 &&  <OrderListPage />}
      {activeNum === 3 &&  <UserPage />}
      <BottomNav activeNum={activeNum} setActiveNum={setActiveNum} />
    </div>
  );
}

export default App;

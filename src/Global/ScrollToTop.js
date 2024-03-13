import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//useEffect：於處理副作用操作，元件掛載、更新時執行一些操作。
// useLocation：用於獲取目前的路由位置資訊。



const ScrollToTop = () =>{
    const {pathname} = useLocation(); //pathname:目前瀏覽的路由的路徑名稱部分

    useEffect(() =>{
        window.scrollTo(0,0);
    },[pathname])
    //第二個參數是 [pathname]，所以這個函式只有在 pathname 改變時才會觸發，
    //這樣就確保了在切換頁面時才會進行自動捲動到頂部的操作。
}

export default ScrollToTop;
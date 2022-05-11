import styles from "../styles/layout.module.scss";
import Link from "next/link"
const Layout = () => {
  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.menu_wrapper}>
        <span>홈</span>
        <span>시리즈</span>
        <span>영화</span>
        <span>NEW! 요즘 대세 콘텐츠</span>
        <span>내가 찜한 콘텐츠</span>
      </div>
      <Link href={`/login#2`} >
        <span>로그인</span>
      </Link>
      <span>회원가입</span>
    </div>
  );
};

export default Layout;
